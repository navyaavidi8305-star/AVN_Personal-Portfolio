# Avidi Venkata Narasamma — Software Developer Portfolio

A premium, responsive portfolio for **Avidi Venkata Narasamma (AVN)**, a final-year Computer Science Engineering student seeking software engineering internships, graduate trainee positions, and entry-level developer roles.

Built with React, Vite, Tailwind CSS, Framer Motion, and Lucide React.

## Features

- Dark, minimal design with violet accents and ambient gradients
- Responsive navigation with active-section tracking and mobile menu
- Animated hero with a code-themed profile panel
- About, skills, featured projects, experience, education, certifications, and contact sections
- Featured DriveMate AI project with source code and live demo links
- Resume download from `public/resume.pdf`
- Accessible, validated contact form with mailto fallback
- SEO metadata, Open Graph image, JSON-LD, and a custom favicon
- Reduced-motion support and keyboard-friendly interactions

## Tech Stack

- React 19
- Vite
- JavaScript
- Tailwind CSS v4
- Framer Motion
- Lucide React

## Getting Started

```bash
npm install
npm run dev
```

The development server runs at the URL printed by Vite (usually `http://localhost:5173`).

### Production build

```bash
npm run build
npm run preview
```

### Lint

```bash
npm run lint
```

## Project Structure

```text
public/
  favicon.svg
  og-image.png
  resume.pdf
src/
  components/
    layout/        Navbar, Footer
    sections/      Hero, About, Skills, Projects, Experience, Education,
                   Certifications, Contact
    ui/            Reveal, SectionHeading, ResumeButton, ProjectPreview, BrandIcons
  data/            Site content separated from UI components
  hooks/           Active-section tracking, resume availability
  App.jsx
  index.css
  main.jsx
```

## Configuration

### Personal details and links

Edit `src/data/site.js` for the display name, email, GitHub, LinkedIn, location, education details, and resume path.

### Projects

Edit `src/data/projects.js`. Each project supports:

- `links.github` — repository URL
- `links.demo` — live deployment URL

If a demo link is an empty string, the card shows a clearly marked **"Demo not available"** placeholder rather than a broken link.

### Resume

The resume is served from `public/resume.pdf`. Replace that file with an updated PDF, keeping the same filename. No code changes are required.

### Contact form

By default, submitting a valid form opens the visitor's email app with the message prefilled (`mailto:`). No success message is shown unless a real request succeeds.

To enable direct delivery, copy `.env.example` to `.env` and add a form endpoint such as Formspree:

```bash
VITE_CONTACT_ENDPOINT=https://formspree.io/f/your-id
```

The form posts JSON containing `name`, `email`, `subject`, and `message`.

### SEO

Update the title, meta description, Open Graph tags, and JSON-LD in `index.html`. Replace `public/og-image.png` if you change the branding.

Social preview images should use an absolute URL. After deploying, replace the relative `/og-image.png` values for `og:image` and `twitter:image` with the production URL, for example `https://your-domain.vercel.app/og-image.png`.

## Deploy to Vercel

1. Push the project to a GitHub repository.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Vercel detects Vite automatically. Confirm:
   - Build command: `npm run build`
   - Output directory: `dist`
4. If you configured a contact endpoint, add `VITE_CONTACT_ENDPOINT` under **Settings → Environment Variables**.
5. Deploy.

No rewrite rules are required because the site is a single-page portfolio with in-page navigation.

## Publish to GitHub

From this project folder:

```bash
git init
git add .
git commit -m "Build AVN developer portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<repository-name>.git
git push -u origin main
```

If the folder already belongs to an existing repository, create a dedicated repository for the portfolio or move the project outside the parent repository first.
