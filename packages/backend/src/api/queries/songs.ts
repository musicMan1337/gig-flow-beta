import { prisma } from "@/db/client"
import type { Prisma } from "@prisma/client"

export async function getSongs(where: Prisma.SongWhereInput = {}) {
  return prisma.song.findMany({
    where,
    include: {
      soloSections: true,
    },
  })
}

export async function getSongById(id: string) {
  return prisma.song.findUnique({
    where: { id },
    include: {
      soloSections: true,
    },
  })
}

export async function createSong(data: Prisma.SongCreateInput) {
  return prisma.song.create({
    data,
    include: {
      soloSections: true,
    },
  })
}
