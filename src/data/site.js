export const site = {
  name: 'Avidi Venkata Narasamma',
  displayName: 'Avidi Venkata Narasamma',
  headline: 'Building digital experiences with code & creativity.',
  description:
    "I'm a Computer Science Engineering student passionate about software development, full-stack applications, and building practical solutions to real-world problems.",
  availability: 'Open to internships & software engineering opportunities',
  roles: ['Software Developer', 'Full Stack Developer', 'Computer Science Engineer'],
  location: 'Hyderabad, Telangana, India',
  education: {
    degree: 'B.Tech in Computer Science and Engineering',
    college: 'Malla Reddy Engineering College for Women',
    shortCollege: 'MRECW',
    cgpa: '8.81',
    year: 'Final Year',
    graduation: 'Expected 2027',
  },
  links: {
    github: 'https://github.com/navyaavidi8305-star',
    linkedin: 'https://www.linkedin.com/in/avidi-venkata-narasamma-7a6166369',
    email: 'navyaavidi8305@gmail.com',
  },
  resumePath: '/resume.pdf',
  // Optional: add a Formspree / similar endpoint to enable direct form delivery.
  // Example: VITE_CONTACT_ENDPOINT=https://formspree.io/f/your-id in a .env file.
  contactEndpoint: import.meta.env.VITE_CONTACT_ENDPOINT ?? '',
}

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export const sectionIds = navItems.map((item) => item.id)
