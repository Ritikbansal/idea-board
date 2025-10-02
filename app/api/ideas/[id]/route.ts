import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    const updated = await prisma.idea.update({
      where: { id: Number(id) },
      data: { upvotes: { increment: 1 } },
    });

    return NextResponse.json(updated);
  } catch (err) {
    return NextResponse.json({ error: "Idea not found" }, { status: 404 });
  }
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    await prisma.idea.delete({ where: { id: Number(id) } });
    return NextResponse.json({ message: "Idea deleted" });
  } catch (err) {
    return NextResponse.json({ error: "Idea not found" }, { status: 404 });
  }
}
