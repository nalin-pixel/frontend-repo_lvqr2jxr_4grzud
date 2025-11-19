import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'Paperkit',
    description: 'Tiny CSS-only print templates for structured thinking.',
    href: '#',
  },
  {
    title: 'Microfolio',
    description: 'A bare-bones portfolio starter focused on clarity.',
    href: '#',
  },
  {
    title: 'Glyph Notes',
    description: 'Markdown-first notes with zero distractions.',
    href: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900">Projects</h2>
          <a href="#" className="text-sm text-zinc-600 hover:text-zinc-900">See all</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a key={p.title} href={p.href} className="group rounded-xl border border-zinc-200 p-5 hover:border-zinc-300 transition-colors">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-zinc-900">{p.title}</h3>
                <ArrowUpRight size={18} className="text-zinc-400 group-hover:text-zinc-900 transition-colors" />
              </div>
              <p className="mt-2 text-sm text-zinc-600">{p.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
