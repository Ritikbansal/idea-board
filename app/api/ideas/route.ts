import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const ideas = await prisma.idea.findMany({
    orderBy: { upvotes: "desc" },
  });
  return NextResponse.json(ideas);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    if (!body.content || body.content.length === 0) {
      return NextResponse.json({ error: "Content is required" }, { status: 400 });
    }

    const idea = await prisma.idea.create({
      data: { content: body.content },
    });

    return NextResponse.json(idea, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: "Failed to create idea" }, { status: 500 });
  }
}
