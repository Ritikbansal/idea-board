"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { ArrowUp, ArrowLeft, Lightbulb } from "lucide-react";
import Link from "next/link";

interface Idea {
  id: number;
  content: string;
  upvotes: number;
  createdAt: string;
}

export default function IdeaBoardApp() {
  const [ideas, setIdeas] = useState<Idea[]>([]);
  const [newIdea, setNewIdea] = useState("");
  const [charCount, setCharCount] = useState(0);
  const MAX_CHARS = 280;

  useEffect(() => {
    fetch("/api/ideas")
      .then((res) => res.json())
      .then((data) => setIdeas(data));
  }, []);

  const handleIdeaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length <= MAX_CHARS) {
      setNewIdea(value);
      setCharCount(value.length);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newIdea.trim().length === 0) return;

    const res = await fetch("/api/ideas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: newIdea }),
    });

    if (res.ok) {
      const idea = await res.json();
      setIdeas((prev) => [idea, ...prev]);
      setNewIdea("");
      setCharCount(0);
    }
  };

  const handleUpvote = async (id: number) => {
    const res = await fetch(`/api/ideas/${id}`, { method: "PUT" });
    if (res.ok) {
      const updated = await res.json();
      setIdeas((prev) =>
        prev.map((idea) => (idea.id === id ? updated : idea))
      );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <Lightbulb className="h-5 w-5 text-primary-foreground" />
            </div>
            <h1 className="text-xl font-bold">The Idea Board</h1>
          </div>
          <Button asChild variant="ghost" size="sm">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </header>

      <div className="container mx-auto max-w-3xl px-4 py-8">
        <Card className="mb-8 p-6">
          <h2 className="mb-4 text-lg font-semibold">Share Your Idea</h2>
          <form onSubmit={handleSubmit}>
            <Textarea
              value={newIdea}
              onChange={handleIdeaChange}
              placeholder="What's your idea? (280 characters max)"
              className="mb-3 min-h-[120px] resize-none"
            />
            <div className="flex items-center justify-between">
              <span className={`text-sm ${charCount > MAX_CHARS * 0.9 ? "text-destructive" : "text-muted-foreground"}`}>
                {charCount}/{MAX_CHARS}
              </span>
              <Button type="submit" disabled={newIdea.trim().length === 0}>
                Post Idea
              </Button>
            </div>
          </form>
        </Card>

        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold">All Ideas ({ideas.length})</h2>
          <p className="text-sm text-muted-foreground">Sorted by upvotes</p>
        </div>

        {ideas.length === 0 ? (
          <Card className="p-12 text-center">
            <Lightbulb className="mx-auto mb-4 h-12 w-12 text-muted-foreground/50" />
            <h3 className="mb-2 text-lg font-semibold">No ideas yet</h3>
            <p className="text-muted-foreground">Be the first to share an idea with the community!</p>
          </Card>
        ) : (
          <div className="space-y-4">
            {ideas.map((idea) => (
              <Card key={idea.id} className="flex gap-4 p-6 transition-all hover:shadow-md">
                <div className="flex flex-col items-center gap-1">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-10 w-10 rounded-full bg-transparent"
                    onClick={() => handleUpvote(idea.id)}
                  >
                    <ArrowUp className="h-4 w-4" />
                  </Button>
                  <span className="text-sm font-semibold">{idea.upvotes}</span>
                </div>
                <div className="flex-1">
                  <p className="text-pretty leading-relaxed">{idea.content}</p>
                  <p className="mt-3 text-xs text-muted-foreground">
                    Posted {new Date(idea.createdAt).toLocaleString()}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
