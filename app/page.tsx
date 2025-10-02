import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Lightbulb, TrendingUp, Users } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden border-b">
        <div className="container mx-auto px-4 py-24 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-muted px-4 py-2 text-sm">
              <Lightbulb className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">Anonymous. Simple. Powerful.</span>
            </div>
            <h1 className="mb-6 text-balance text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              Share Ideas.
              <br />
              <span className="text-primary">Shape the Future.</span>
            </h1>
            <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
              The Idea Board is where creativity meets community. Post your ideas anonymously, vote on what matters, and
              watch the best concepts rise to the top.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="group">
                <Link href="/app">
                  Start Sharing Ideas
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#features">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 top-0 -z-10 h-full bg-gradient-to-b from-primary/5 to-transparent" />
      </section>

      <section id="features" className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">Why The Idea Board?</h2>
            <p className="text-pretty text-lg text-muted-foreground">
              A platform designed for pure ideas, free from bias and ego.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-2 p-8 transition-all hover:border-primary/50 hover:shadow-lg">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">Anonymous Posting</h3>
              <p className="text-muted-foreground">
                Share your ideas without revealing your identity. Let your concepts speak for themselves, free from
                personal bias or reputation.
              </p>
            </Card>

            <Card className="border-2 p-8 transition-all hover:border-primary/50 hover:shadow-lg">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">Community Voting</h3>
              <p className="text-muted-foreground">
                Upvote the ideas you believe in. The community decides what rises to the top, creating a meritocracy of
                innovation.
              </p>
            </Card>

            <Card className="border-2 p-8 transition-all hover:border-primary/50 hover:shadow-lg">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">Real-Time Updates</h3>
              <p className="text-muted-foreground">
                Watch ideas flow in real-time. See what the community is thinking right now and join the conversation as
                it happens.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="border-t bg-muted/30 py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">
              Ready to Share Your Ideas?
            </h2>
            <p className="mb-8 text-pretty text-lg text-muted-foreground">
              Join a community of thinkers, creators, and innovators. Your next big idea is just a click away.
            </p>
            <Button asChild size="lg" className="group">
              <Link href="/app">
                Get Started Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t py-8">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-muted-foreground">
            © 2025 The Idea Board. Built for creators, by creators.
          </p>
        </div>
      </footer>
    </div>
  )
}
