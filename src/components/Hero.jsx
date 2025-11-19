import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] sm:min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-28 sm:pt-36 pb-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-6xl font-semibold leading-[1.1] tracking-tight text-zinc-900">
            Minimal notes on building, design, and code
          </h1>
          <p className="mt-5 text-zinc-700 text-base sm:text-lg">
            A calm space for writing, experiments, and projects. Clean, fast, and focused.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#projects" className="inline-flex items-center rounded-md bg-zinc-900 text-white px-4 py-2 text-sm hover:bg-zinc-800 transition-colors">
              View Projects
            </a>
            <a href="#blog" className="inline-flex items-center rounded-md border border-zinc-300 text-zinc-900 px-4 py-2 text-sm hover:bg-zinc-50 transition-colors">
              Read the Blog
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent" />
    </section>
  );
}
