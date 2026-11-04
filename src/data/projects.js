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
]

export const projectAccents = {
  violet: {
    glow: 'rgba(139, 92, 246, 0.38)',
    from: 'from-violet-500/35',
    via: 'via-fuchsia-500/10',
    text: 'text-violet-200',
  },
}
