import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const videos = await prisma.video.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      user: {
        select: {
          username: true,
        },
      },
    },
  });

  return NextResponse.json(videos);
}
