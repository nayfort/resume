# 👋 Vladyslav Mytrofanov — Interactive Resume

![Vite](https://img.shields.io/badge/Vite-B73BFE?logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)
![Deploy](https://img.shields.io/badge/deployed-live-brightgreen)

A desktop & mobile-responsive interactive resume, built as a real web application
instead of a static PDF — with theming, i18n, and a component-driven architecture.

🔗 **Live website:** [Open](https://resume-seven-rouge.vercel.app/)

## ✨ Features

- 🌗 Light / dark theme with persisted preference
- 🌍 Multi-language support (EN / UA / PL — i18n)
- 📱 Fully responsive layout for desktop and mobile
- ⚡ Built with Vite for fast dev/build performance
- 🧩 Component-based architecture (React + TypeScript)
- Section navigation with active-section highlighting
- Email copy confirmation and back-to-top navigation
- Print stylesheet for browser printing / saving to PDF

## 🛠 Tech Stack

**Frontend:** React · TypeScript · Vite · CSS
**UI:** Ant Design
**Tooling:** ESLint, i18next

## 🚀 Getting Started

1. **Clone the repository:**

```bash
    git clone https://github.com/nayfort/resume.git
    cd resume
```

2. **Install dependencies:**

```bash
    npm install
```

3. **Run locally:**

```bash
    npm run dev
```

    Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📁 Project Structure

```text
src/
├── assets/             # Profile photo and language flags
├── components/
│   ├── ui/             # Shared SectionCard, TagList, ExternalLink
│   ├── details/        # Header and footer
│   ├── resume/         # Resume sections
│   └── print.css       # Print-specific layout
├── data/               # Profile, section IDs, experience and skills
├── hooks/              # Theme, clipboard lifecycle, active section
└── utils/i18n/         # Typed translations and locale configuration
```

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm install` | Installs all dependencies |
| `npm run dev` | Starts the development server |
| `npm run build` | Type-checks and builds the app for production |
| `npm run lint` | Checks TypeScript and React code |
| `npm run preview` | Previews the production build |
| `npm run format:check` | Checks consistent source formatting |

## 📬 Contact

- **Email:** mitrofanovvladislav2004@gmail.com
- **LinkedIn:** [Vladyslav Mytrofanov](https://linkedin.com/in/nayfort)
- **Telegram:** [@nayfort](https://t.me/nayfort)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## Maintaining the resume

- Update contact details in `src/data/profile.ts`.
- Update employment metadata in `src/data/experience.ts` and technologies in `src/data/skills.ts`.
- Keep the English, Ukrainian and Polish JSON translations in `src/utils/i18n/locales` aligned. TypeScript checks translation keys against the English resource.
- Use `SectionCard` for titled resume sections, `TagList` for technology lists and `ExternalLink` for links that should preserve the resume tab.
- UI components render content; hooks own browser subscriptions and clipboard timer cleanup. Print styling is separate from screen styling.
- Before submitting changes, run `npm run lint`, `npm run format:check` and `npm run build`.
