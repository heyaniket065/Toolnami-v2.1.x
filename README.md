# ToolNami Hub

Build a premium, modern, highly polished multi-page website called “ToolNami” — a professional online tools platform.

Create the complete website UI/UX and visual system now, with all pages, navigation, responsive layouts, interactions, animations, and reusable components.

BRAND & STYLE

- Brand name: ToolNami

- Clean, modern, aesthetic and professional — never cringe or overly flashy.

- Bright, attractive visual identity using Blue + Yellow + White as the primary palette.

- Support both Light Mode and Dark Mode with a smooth theme toggle.

- Subtle anime-inspired personality in the branding/visual details, but keep the product clearly professional and tool-focused.

- Avoid excessive neon, cyberpunk, heavy glow, black-heavy luxury/shopping aesthetics, and unnecessary visual clutter.

- Strong typography, excellent spacing, rounded modern UI, polished cards and subtle depth.

- Make the website feel fast, trustworthy, useful and high-quality.

MOTION & INTERACTIONS

- Add smooth page transitions.

- Add subtle entrance animations while scrolling.

- Add polished hover/focus effects on buttons, cards and navigation.

- Add tasteful micro-interactions throughout the UI.

- Keep animations lightweight and performance-friendly.

- No distracting or continuous animations.

SITE STRUCTURE

Create these pages:

1. Home

2. Tools

3. About

4. Contact

5. Privacy Policy

6. Terms & Conditions

HEADER / NAVIGATION

- ToolNami logo/wordmark.

- Navigation: Home, Tools, About, Contact.

- Search icon / search access.

- Light/Dark mode toggle.

- Responsive mobile navigation menu.

- Sticky, clean header with polished scroll behavior.

HOME PAGE

Create a strong first-screen experience without overwhelming users.

Hero section:

- ToolNami branding.

- Clear headline explaining that ToolNami provides useful online tools.

- Short supporting text.

- Prominent search interface.

- Primary “Explore Tools” action.

- Attractive but minimal visual motion.

Below the hero:

- Show only 5–7 featured/popular tool card placeholders.

- Do not overcrowd the homepage with hundreds of tools.

- Each tool card should visually resemble modern content/video cards:

  - attractive thumbnail/visual area

  - tool title

  - short description

  - entire card is clickable

  - NO separate “Open Tool” button

- Add a clear “Explore All Tools” section/action leading to the Tools page.

- Add a clean category-preview section.

- Add a small trust/value section explaining the platform concept.

- Keep the homepage visually spacious and easy to scan.

TOOLS PAGE

Create the complete tools-directory UI even though real tools are not implemented yet.

- Search bar at the top.

- Category navigation/filter UI.

- Modern responsive tool-card grid.

- Same clickable card design used throughout the platform.

- Pagination system:

  Previous | 1 | 2 | 3 | 4 | ... | Next

- Design the architecture so hundreds of tools can later be added without redesigning the interface.

- Include loading/empty/search-result states in the design system.

ABOUT PAGE

- Professional ToolNami introduction.

- Brand story/purpose section.

- Clean visual storytelling layout.

- Keep content structure ready for final copy later.

CONTACT PAGE

- Professional contact form UI:

  Name

  Email

  Message

  Submit

- Include clean validation/error/success states visually.

- Design it so backend/database/email functionality can be connected later.

FOOTER

Create a complete professional footer containing:

- ToolNami branding

- Short description

- Navigation links

- Social media placeholders

- Privacy Policy

- Terms & Conditions

- Contact

- Copyright line

RESPONSIVE DESIGN

- Mobile-first.

- Excellent experience on mobile phones, tablets and desktop.

- Cards, grids, typography, navigation and spacing must adapt naturally.

- No horizontal scrolling.

- Make the mobile homepage especially polished.

DESIGN SYSTEM

Create a consistent reusable design system for:

- Colors

- Typography

- Buttons

- Cards

- Inputs

- Search components

- Navigation

- Badges

- Pagination

- Modal/dropdown styles

- Empty/loading/error states

- Light/Dark themes

IMPORTANT

- Build the website as a polished production-quality frontend foundation.

- Do not insert real tool functionality or detailed tool implementations yet.

- Use realistic placeholders where tool content will later be added.

- Keep every component modular and easy to extend.

- Prioritize usability, visual hierarchy, accessibility, responsiveness and performance.

- The final

result should feel like a serious, modern online tools platform — attractive enough to stand out, but clean enough to be trusted. SUPABASE DATABASE & BACKEND SETUP

Connect the entire ToolNami website with Supabase and automatically create the required database architecture.

Create the following tables:

1. contact_messages

Store all messages submitted through the Contact page.

Fields:

id (uuid, primary key)

name (text)

email (text)

message (text)

created_at (timestamp)

Requirements:

Contact form submissions must be saved automatically.

Show proper success and error states.

Allow future admin dashboard integration.

2. newsletter_subscribers

Fields:

id (uuid, primary key)

email (text, unique)

created_at (timestamp)

Requirements:

Ready for future newsletter subscription functionality.

3. tool_categories

Fields:

id (uuid, primary key)

name (text)

slug (text)

icon (text)

description (text)

created_at (timestamp)

Requirements:

Used for organizing tools.

4. tools

Fields:

id (uuid, primary key)

title (text)

slug (text)

description (text)

thumbnail_url (text)

category_id (uuid, foreign key)

featured (boolean)

views (integer)

status (text)

created_at (timestamp)

Requirements:

Fully connected to category system.

Search-ready architecture.

Pagination-ready architecture.

Designed to support hundreds or thousands of tools.

5. website_settings

Fields:

id (uuid, primary key)

site_name (text)

logo_url (text)

support_email (text)

theme_settings (jsonb)

created_at (timestamp)

Default Values:

site_name = ToolNami

support_email = support.neoluxetrust@gmail.com

6. page_content

Fields:

id (uuid, primary key)

page_name (text)

title (text)

content (text)

updated_at (timestamp)

Requirements:

Used to manage About, Privacy Policy and Terms pages dynamically.

Security

Enable Row Level Security (RLS) on all tables.

Visitors can submit contact forms.

Visitors can subscribe to newsletters.

Public users can only read approved tool data.

No public access to edit database records.

Follow Supabase security best practices.

Email Configuration

When a visitor submits the Contact Form:

Save the submission in the contact_messages table and prepare the architecture for future email notifications to:

aniketbhalerao065@gmail.com

support.neoluxetrust@gmail.com

Create the backend structure so Resend, SMTP, or Supabase Edge Functions can be connected later without redesign.

Future Scalability

Design the database and frontend architecture to support:

1,000+ tools

Tool categories

Search

Tool analytics

Admin dashboard

User accounts

Favorites/bookmarks

Blog system

Newsletter system

Advertisements

Premium features

Use clean, scalable, production-ready Supabase architecture and relationships. ANIKET BHALERAO

Creator & Founder of LuminaLM

Brand Name:

LuminaLM

Email:

aniketbhalerao05@gmail.com

YouTube:

https://youtube.com/@luminalm065

Instagram:

https://www.instagram.com/hey_aniket_065

X (Twitter):

https://x.com/Instgram136

Facebook:

https://www.facebook.com/share/19cdfcUFpw/

E-mail

support.neoluxetrust@gmail.com

aniketbhalerao065@gmail.com

Creator:

Aniket Bhalerao

Brand:

LuminaLM

Taglines:

Think Better. Build Better.

Stories, Strategy & Growth

Learn. Create. Improve.

Focus. Plan. Execute.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://toolnami.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/d76268c1-9300-4c06-9dff-57116fc294e1).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
