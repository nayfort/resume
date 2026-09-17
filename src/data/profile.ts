export const profile = {
  email: "mitrofanovvladislav2004@gmail.com",
  github: "https://github.com/nayfort",
  linkedin: "https://linkedin.com/in/nayfort",
  telegram: "https://t.me/nayfort",
} as const;

export const sectionIds = [
  "experience",
  "skills",
  "education",
  "languages",
  "contacts",
] as const;
export type SectionId = (typeof sectionIds)[number];
