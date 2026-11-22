export const projects = [
  {
    id: 'drivemate',
    index: '01',
    name: 'DriveMate AI',
    subtitle: 'Vehicle Management System',
    category: 'Full-stack · Supabase',
    accent: 'violet',
    featured: true,
    description:
      'A centralized vehicle management platform that helps owners organize multiple vehicles, track maintenance and fuel records, monitor mileage and expenses, and keep important documents up to date.',
    features: [
      'Multi-vehicle management dashboard',
      'Maintenance and service tracking',
      'Fuel, mileage, and expense records',
      'Document validity monitoring',
      'FASTag balance tracking',
      'Supabase authentication and database',
    ],
    tech: ['React', 'Vite', 'JavaScript', 'Supabase', 'React Router', 'Recharts'],
    links: {
      github: 'https://github.com/navyaavidi8305-star/DriveMate_AI',
      demo: 'https://drivemate-ai.vercel.app',
    },
  },
  {
    id: 'careerpilot',
    index: '02',
    name: 'CareerPilot AI',
    subtitle: 'AI-Powered Career Guidance Platform',
    category: 'Full-stack · AI',
    accent: 'cyan',
    featured: false,
    description:
      'A full-stack AI-powered career guidance platform that helps students and job seekers achieve career readiness through intelligent resume analysis, ATS scoring, career recommendations, skill gap analysis, and personalized learning roadmaps.',
    features: [
      'AI resume analysis and ATS scoring',
      'Personalized career recommendations',
      'Skill gap analysis and learning roadmaps',
      'AI interview coach',
      'Multilingual learning resources',
      'Interactive career knowledge graph',
      'AI career assistant',
    ],
    tech: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Prisma',
      'Google Gemini',
      'D3.js',
    ],
    links: {
      demo: 'https://career-pilot-ai-iota-vert.vercel.app/',
      backend: 'https://careerpilot-ai-backend-uekp.onrender.com/api/health',
    },
  },
]

export const projectAccents = {
  violet: {
    glow: 'rgba(139, 92, 246, 0.38)',
    from: 'from-violet-500/35',
    via: 'via-fuchsia-500/10',
    text: 'text-violet-200',
  },
  cyan: {
    glow: 'rgba(34, 211, 238, 0.32)',
    from: 'from-cyan-500/35',
    via: 'via-sky-500/10',
    text: 'text-cyan-200',
  },
}
