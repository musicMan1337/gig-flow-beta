import { prisma } from "@/db/client"
import type { Prisma } from "@prisma/client"

export async function createSong(data: Prisma.SongCreateInput) {
  return prisma.song.create({
    data,
    include: {
      soloSections: true,
    },
  })
}

export async function editSong(id: string, data: Prisma.SongUpdateInput) {
  return prisma.song.update({
    where: { id },
    data,
    include: {
      soloSections: true,
    },
  })
}

export async function deleteSong(id: string) {
  return prisma.song.delete({
    where: { id },
  })
}
