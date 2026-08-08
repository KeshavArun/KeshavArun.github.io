CLAUDE.md — Portfolio Website Project
Project

This is the personal portfolio website of Keshav Arun, an AI Agent Builder.

Goal: Win clients who need AI agents and workflow automation. The site must 
show what I build and get visitors to message me on WhatsApp or book a call.

Primary audience: Business decision-makers across industries  

The one message a visitor must leave with: "This person builds prodiuction grade
 AI agents
 that take work off my team, and they work."

The one action: Message me on WhatsApp. Secondary action: book a call. 
WhatsApp is always the more prominent of the two.

Current Status

Rebuilt as CoAI (2026-08-07). The site is now branded as the agency CoAI,
with Keshav Arun as the byline. Blue/violet gradient replaces red, spacing
is tighter throughout, the hero photo is now a small avatar rather than a
large portrait, and GitHub has been removed entirely. Animation added:
hero typewriter, scroll reveals, drifting background glows, tech marquee,
animated agent console. Verified settled at 1440px and 390px widths.

Still to supply: real booking URL (#book-a-call, 3 places), hero photo
(avatar in the byline), all three project cards. Every one is marked with
a >>> comment in index.html.

Earlier: first build 2026-08-05, red/portfolio direction, now superseded.

Reference-file note: this file names background.png / hero.png /
aboutme.png / projects.png / contact.png, but /references actually
contains 1st.jpg-7th.jpg. Mapping used for the build:
  background + hero -> 5th.jpg   typography -> 2nd.jpg
  about  -> 2nd.jpg (middle band) projects -> 7th.jpg (featured work)
  contact -> 3rd.jpg + 4th.jpg
Either rename the files to match, or update the table below.

Update this section at the end of every working session.
Site Structure (single page, in this order)
Navigation bar (fixed at top)
Hero
About
Skills / What I Do
Projects
Contact / CTA
Footer
Content

Use this content exactly. Do not invent, or add facts, numbers, 
projects, results or client names that are not written here.

1. Hero

Job: say what I do  Must work without scrolling.

Name: Keshav Arun
Title: AI Agent Builder
Value statement: I build production-grade AI agents that take repetitive work
off your team and run on their own, with little to no supervision.
One primary button: WhatsApp me with redirection link to my whatsapp:
+353870310620

Secondary link (smaller, clearly less prominent): Book a call → placeholder 
#book-a-call. I will supply the real booking URL later — mark it clearly in 
the code.

Image: leave a clearly marked placeholder for a photo, positioned as in the 
hero reference.
2. About

Job: turn "what I do" into "why it's worth money."

Use this text. You may split it across sentences or lines for readability, 
but do not add new claims:

"I build agentic AI workflows that automate the repetitive, manual work quietly
 eating hours of your team's week. They cut costs, lift revenue, and free people up for work that matters. I've built across a range of industries and use cases."

If more content is needed to fill the layout, ask me — do not write it yourself.


3. Skills / What I Do

Two parts.

Part 1 — Capabilities (these lead, and are the larger visual element). Five 
items, each with its heading and description:

Conversational agents — WhatsApp, web chat, Slack. Enquiries, bookings, lead 
qualification.
Workflow automation & integrations — connecting CRMs, sheets, email, calendars.

Research & enrichment agents — pulling data from the web and APIs, structuring 
it, delivering it on a schedule.
Document & knowledge systems — RAG over company documents, contract and invoice
 parsing, internal Q&A assistants.
Custom internal tools — dashboards and apps built around the agent.

Part 2 — Tech (secondary, smaller — a tag list or single strip beneath): 
Python/FastAPI, React, PostgreSQL, APIs, Claude Code, Codex, Cursor, 
Antigravity, Hermes Agent, n8n, MCP, Railway, Vercel

4. Projects

Job: proof. This is where the visitor decides I'm real. This is the most 
important section on the page.

Three project cards. Each card contains:

Project name
One-line description
The problem it solved
Tech Stack I used
Link of the project

I have not yet supplied real project content. Build all three cards with 
clearly marked placeholder text in the correct structure, designed so I can 
replace the text and images easily and add more cards later without redesigning.
 Do not invent project names, outcomes or client names.

5. Contact / CTA

Job: convert interest into contact. One primary action only.

WhatsApp me with redirection link /353870310620 — the single primary action, 
visually 
dominant Book a call → placeholder #book-a-call
Email: k7arunias@gmail.com
Social links: clearly marked placeholders for LinkedIn and GitHub
                instagram :https://www.instagram.com/keshavarun_/
                linkedin: https://www.linkedin.com/in/keshav-arun-624a38274/
6. Footer

Name, current year, social link placeholders. Minimal.

Design Rules
Reference screenshots — these are binding

All references are in the /references folder. Follow each instruction exactly 
and ignore anything outside the specified area.

File	Governs	Instruction
background.png	Site-wide colour	Use this exact background colour across the
 whole site. Sample it directly from the image.
hero.png	Hero section	Match the layout, composition and typography. Match the 
font style as closely as possible. Include an image placeholder positioned as
 in the reference.
aboutme.png	About section	Use the style of the middle section only. Ignore 
everything above and below it.
projects.png	Projects section	Use the design and style of the middle reference in the image only. Ignore the other parts.
contact.png	Contact section	Replicate this as closely as possible, exactly as
 shown.

Before building any section, open and look at its reference file.

Global visual direction

SUPERSEDED 2026-08-07 — the site is now branded as the agency CoAI and the
palette comes from the CoAI logo, not background.png. The red direction
below is kept only as a record of the original brief.

Current direction:
Theme: dark. Deep blue-black background (#0b0e18), sampled from the CoAI logo.
Accent colour: the CoAI blue-to-violet gradient (#5b8cff -> #7c6bf8 ->
#a855f7). Used on the wordmark, buttons, small labels and one highlight per
section. Never large blocks of it.
Typography: Poppins for headings and body; JetBrains Mono for the small
labels, tech tags and the tagline, matching the logo lockup.
Motion: allowed and wanted. Hero typewriter, scroll reveals, drifting
background glows, tech marquee, animated agent console. All of it is
switched off under prefers-reduced-motion, and the page still reads fully
if JavaScript never runs.

--- superseded ---
Theme: dark. Black background with a subtle red hue, taken from background.png.

Accent colour: red, used sparingly — buttons, small labels, one highlighted 
element per section. Never large blocks of red.
Typography: follow 2nd.jpg. Use the same typeface across the whole site unless 
a reference clearly shows otherwise.
Layout: generous spacing. One idea per section. Never crowded.
Must look excellent on mobile — assume a large share of visitors arrive on 
phones from a WhatsApp or LinkedIn link.
Sections with no reference

The navigation bar, Skills section and Footer have no reference screenshot. 
Derive their styling from background.png and hero.png so they stay consistent 
with the rest of the site. Keep them simple. Do not introduce a new visual 
style — show me your proposed approach before building them.

Technical Constraints
Simple static site: HTML, CSS and minimal JavaScript only.
No frameworks, no build tools, no databases. It must work by opening index.html
 in a browser.
Will be deployed on GitHub Pages: everything static, all file paths relative 
and lowercase.
Keep the code organised and commented so future changes are easy.
All placeholders (booking link, project content, photo, social links) must be 
clearly marked in the code so they are trivial to find and replace.
Working Style
Before any significant change, state your plan in one or two sentences and wait 
for my go-ahead.
Build one section at a time so I can review each result before moving on.
After each change, tell me in plain, non-technical language what you did.
If an instruction is ambiguous, ask one clarifying question instead of guessing.

Never invent content, claims, numbers or client names. Missing content means a 
marked placeholder or a question to me — never a fabrication.
After any set of changes that leaves the site in a good working state, offer to
 create a git snapshot before we continue.
Out of Scope for v1
No blog, no multiple pages, no contact form (WhatsApp, email and booking link 
only)
No animations beyond subtle hover effects  [SUPERSEDED 2026-08-07 — see
  Motion under Global visual direction. Animation is now wanted.]
No analytics, no cookie banners, no newsletter signup
Do not add any section that is not in the Site Structure list above