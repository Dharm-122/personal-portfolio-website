export type Service = {
  slug: string;
  title: string;
  icon: string;
  description: string;
  longDescription: string;
  benefits: string[];
  features: string[];
  faqs: { question: string; answer: string }[];
  category: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readingTime: string;
  author: string;
  image: string;
  featured?: boolean;
  content: string[];
};

export type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
};

export type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
};
