# M & A Tours and Travels

Professional tour and transport website for Sri Lanka, focused on quick booking via WhatsApp, mobile-first usability, and strong search visibility.

Live site:
https://gayashvihangana.github.io/M-A-Tours/

## Features

- Responsive multi-page website: home, booking, gallery
- Mobile navigation with sticky action bar on homepage
- Interactive image lightbox for gallery and destination images
- Customer testimonials section
- FAQ accordion (single-open, keyboard accessible, answers stay in the DOM for crawlers)
- Booking form with:
    - real-time validation
    - vehicle capacity checks
    - smart vehicle suggestion based on passenger count
    - draft autosave and restore
    - booking reference generation
    - direct WhatsApp submission flow
- Scroll-to-top button and smooth-scroll behavior

## SEO and Indexing Setup

- Per-page metadata (description, keywords, robots, canonical)
- Open Graph and Twitter cards
- Structured data (JSON-LD)
    - `TravelAgency` on homepage
    - `FAQPage` on homepage (8 questions, eligible for FAQ rich results)
    - `WebPage` on booking page
    - `CollectionPage` on gallery page
- `robots.txt` configured for crawling
- `sitemap.xml` configured with live GitHub Pages URLs

## Project Structure

```text
M-A-Tours/
|-- index.html
|-- booking.html
|-- gallery.html
|-- styles.css
|-- script.js
|-- robots.txt
|-- sitemap.xml
|-- README.md
`-- assets/
        `-- images/
```

## Local Usage

1. Clone or download the repository.
2. Open `index.html` in a browser.
3. Edit HTML/CSS/JS files and refresh.

No build process is required.

## Content To Review Before Publishing

Some of the new content needs the owner's confirmation:

- **Testimonials** (`index.html`, `#testimonials`) are placeholders marked
    "Placeholder Name". Replace them with real customer feedback (with
    permission). Review / AggregateRating structured data was deliberately left
    out until the reviews are genuine — marking up invented reviews breaks
    Google's review snippet policy.
- **FAQ answers** on payment methods and advance-booking time reflect common
    practice — adjust them to your actual policy. Any edit must also be made in
    the matching `FAQPage` JSON-LD block in `<head>`, since Google requires the
    structured data to match the visible text.

## Google Search Console Steps

1. Open Google Search Console and add this property:
     - https://gayashvihangana.github.io/M-A-Tours/
2. Submit sitemap:
     - https://gayashvihangana.github.io/M-A-Tours/sitemap.xml
3. Request indexing for:
     - https://gayashvihangana.github.io/M-A-Tours/
     - https://gayashvihangana.github.io/M-A-Tours/index.html
     - https://gayashvihangana.github.io/M-A-Tours/booking.html
     - https://gayashvihangana.github.io/M-A-Tours/gallery.html

Note: Indexing can take several days or longer depending on crawl frequency.

## Contact

- Business: M & A Tours and Travels
- Location: Hiriketiya, Dikwella, Sri Lanka
- Phone: +94 72 478 6262
- WhatsApp: +94 76 078 1959

## License

Copyright (c) 2026 M & A Tours and Travels. All rights reserved.
