// ⚠️  TODO — REPLACE WITH REAL TESTIMONIALS
// Ask colleagues, mentors, or clients if they'd write a short quote about working with you.

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
  linkedinUrl?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Chen",
    role: "CTO",
    company: "Veritas Labs",
    avatar: "/images/testimonials/sarah.jpg",
    quote:
      "Xola is the rare engineer who can move seamlessly between deep technical architecture and product thinking. He built our AI platform from scratch, made smart decisions under ambiguity, and mentored the team along the way. If you get the chance to work with him, take it.",
    rating: 5,
    linkedinUrl: "https://linkedin.com",
  },
  {
    id: "2",
    name: "Marcus Webb",
    role: "VP of Engineering",
    company: "Meridian Technologies",
    avatar: "/images/testimonials/marcus.jpg",
    quote:
      "Xola delivered results that genuinely moved the needle for our business. His WebSocket trading dashboard handled 10k concurrent users without a hiccup at launch. Beyond the technical excellence, he communicates clearly with stakeholders and brings junior engineers up with him.",
    rating: 5,
    linkedinUrl: "https://linkedin.com",
  },
  {
    id: "3",
    name: "Priya Nair",
    role: "Founder & CEO",
    company: "PulseHR",
    avatar: "/images/testimonials/priya.jpg",
    quote:
      "We hired Xola as a fractional CTO to help us pick the right stack and get our MVP off the ground. He delivered a production-quality product in 8 weeks, with clean code and thorough documentation. Three months later, we raised our seed round partly on the strength of the technical product he built.",
    rating: 5,
    linkedinUrl: "https://linkedin.com",
  },
  {
    id: "4",
    name: "Daniel Torres",
    role: "Lead Designer",
    company: "Pixel & Pine Studio",
    avatar: "/images/testimonials/daniel.jpg",
    quote:
      "As a designer, I've worked with many developers who treat design as a suggestion. Xola is the opposite — he cares deeply about the pixel-level details and always asks 'how should this feel?' before he builds. The animation work he did on our client campaigns was honestly better than what I'd imagined.",
    rating: 5,
    linkedinUrl: "https://linkedin.com",
  },
];
