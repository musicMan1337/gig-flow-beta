import { prisma } from "@/db/client"

async function main() {
  const song = await prisma.song.create({
    data: {
      title: "Corridors of Time",
      sourceGame: "Chrono Trigger",
      sourcePlatform: "SNES",
      sourceYear: 1995,
      baseLength: 270,
      minLength: 270,
      maxLength: 360,
      style: "jazz_fusion_ballad",
      feel: ["laid_back", "ethereal"],
      tempo: 92,
      intensity: 2,
      key: "F minor",
      instruments: ["piano", "bass", "drums", "violin", "flute"],
      features: ["extended_solo_section", "builds_to_climax"],
      soloSections: {
        create: [
          {
            location: "main_solo",
            length: 32,
            bars: 16,
            repeatable: true,
            instruments: ["piano", "violin", "flute"],
          },
        ],
      },
    },
  })

  console.log({ song })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
