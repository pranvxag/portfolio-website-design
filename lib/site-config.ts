export const siteConfig = {
  name: 'Pranav Agale',
  logo: 'pranav',
  role: 'CS Student & Developer',
  location: 'Pune, Maharashtra, India',
  email: 'pranvxag@gmail.com',
  resumeUrl: 'https://drive.google.com/file/d/1R1y85AfW98xLHqJtW_Gx84moxpKc0tjH/view?usp=drive_link',
  socials: {
    github: 'https://github.com/pranvxag',
    linkedin: 'https://linkedin.com/in/pranvxag',
    email: 'mailto:pranvxag@gmail.com',
    whatsapp: 'https://wa.me/91XXXXXXXXXX',
  },
  hero: {
    greeting: "Hey there!, I'm-",
    tagline: 'CS Student & Developer',
    description:
      'a Computer Science Engineering student who loves building full-stack, mobile, and AI-driven applications.',
    status: [
      'Open to internships and collaborations.',
      'Currently exploring Full-Stack & AI development.',
    ],
  },
  about: {
    paragraphs: [
      "Hey! I'm Pranav Agale, a B.Tech Computer Science Engineering student at Vishwakarma University, Pune. I've been fascinated by technology for as long as I can remember, and turning ideas into working software is what keeps me hooked.",
      'I build across the stack — from React and Next.js on the web to React Native for mobile — and I especially enjoy weaving in AI using tools like the Groq and Gemini APIs. I also contribute to open source through GirlScript Summer of Code.',
      "When I'm not coding, I'm running operations for the WASD Game Development Club, where I helped coordinate a GameJam with over 1000 participants.",
    ],
  },
} as const

export type SkillCategory = {
  title: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    skills: ['Python', 'JavaScript', 'TypeScript', 'C/C++', 'SQL'],
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      'React',
      'Next.js',
      'React Native (Expo)',
      'FastAPI',
      'Streamlit',
      'Tailwind CSS',
    ],
  },
  {
    title: 'AI & Data',
    skills: ['Groq API', 'Gemini API', 'LLaMA', 'Pandas', 'NumPy', 'Matplotlib'],
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      'Git',
      'GitHub',
      'VS Code',
      'Vitest',
      'Google Cloud Run',
      'Firebase',
    ],
  },
]

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]
