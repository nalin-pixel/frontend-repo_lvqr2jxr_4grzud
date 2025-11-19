const posts = [
  {
    title: 'Why I prefer boring technology',
    excerpt: 'Notes on choosing tools that age well and reduce cognitive load.',
    date: 'Oct 2025',
    href: '#',
  },
  {
    title: 'Interfaces that breathe',
    excerpt: 'Small interaction details that make products feel calm.',
    date: 'Sep 2025',
    href: '#',
  },
  {
    title: 'Writing as a design tool',
    excerpt: 'How constraints and words shape better systems.',
    date: 'Aug 2025',
    href: '#',
  },
]

export default function Posts() {
  return (
    <section id="blog" className="py-20 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900">Latest writing</h2>
          <a href="#" className="text-sm text-zinc-600 hover:text-zinc-900">All posts</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <a key={post.title} href={post.href} className="group rounded-xl border border-zinc-200 p-5 hover:border-zinc-300 transition-colors">
              <time className="text-xs text-zinc-500">{post.date}</time>
              <h3 className="mt-2 text-lg font-medium text-zinc-900 group-hover:underline underline-offset-4">{post.title}</h3>
              <p className="mt-2 text-sm text-zinc-600">{post.excerpt}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
