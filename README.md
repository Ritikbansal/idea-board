# The Idea Board

A modern web application for sharing and voting on ideas anonymously.

## Features

- **Marketing Landing Page**: Compelling hero section with features and CTAs
- **Idea Board App**: Post ideas (280 char limit), upvote, and see real-time updates
- **Anonymous**: No login required, pure idea meritocracy
- **Responsive Design**: Works beautifully on all devices

## Getting Started

### Development

\`\`\`bash
npm install
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to view the landing page.
Navigate to [http://localhost:3000/app](http://localhost:3000/app) for The Idea Board.

### Docker

Build and run with Docker Compose:

\`\`\`bash
docker-compose up --build
\`\`\`

Or build and run manually:

\`\`\`bash
docker build -t idea-board .
docker run -p 3000:3000 idea-board
\`\`\`

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Storage**: localStorage (client-side persistence)

## Project Structure

\`\`\`
├── app/
│   ├── page.tsx          # Landing page
│   ├── app/
│   │   └── page.tsx      # Idea Board app
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   └── ui/               # UI components
├── Dockerfile            # Docker configuration
├── docker-compose.yml    # Docker Compose setup
└── README.md
\`\`\`

## Future Enhancements

- Add database integration (PostgreSQL/Supabase)
- Real-time updates with WebSockets
- Idea categories and filtering
- Comment threads on ideas
- User authentication (optional)

## License

MIT
