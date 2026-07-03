# Dharm - The Digital Room

Premium AI Digital Marketing portfolio website built with Next.js 15, React, Tailwind CSS, TypeScript, Framer Motion, Lucide React, and React Hook Form.

## What is included

- Premium home page with hero, services, stats, portfolio, testimonials, blog, and CTA
- About, services, dynamic service detail, blog, dynamic blog detail, and contact pages
- API routes for contact, newsletter, blog, services, and testimonials
- SEO with metadata, Open Graph, Twitter Cards, robots.txt, and sitemap.xml
- Responsive, mobile-first layout with premium sage-green styling
- Placeholder SVG imagery for a self-contained starting point
- Production-ready folder structure for future CMS or admin expansion

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create a `.env.local` file and add values as needed:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
```

3. Run the project locally:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

## Email delivery

The contact API uses Nodemailer when SMTP environment variables are present. The recipient email is already set to `tdb5948@gmail.com` in the app config. If SMTP settings are missing, submissions are still saved locally so the form remains functional during development.

## Notes

- Book Consultation buttons point to the contact page.
- The project is prepared for future CMS integration through the current data and API structure.
- Replace SVG placeholders with real brand photography whenever you are ready.
