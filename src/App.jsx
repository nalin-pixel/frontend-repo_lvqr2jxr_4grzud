import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Posts from './components/Posts'

function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Posts />

        <section id="contact" className="py-24 border-t border-zinc-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-xl">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Get in touch</h2>
              <p className="mt-3 text-zinc-600">Say hello or ask about a project. I read every message.</p>
            </div>
            <form className="mt-8 grid sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Name" className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900" />
              <input type="email" placeholder="Email" className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900" />
              <textarea placeholder="Message" rows="4" className="sm:col-span-2 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900" />
              <button type="button" className="sm:col-span-2 inline-flex items-center justify-center rounded-md bg-zinc-900 text-white px-4 py-2 text-sm hover:bg-zinc-800 transition-colors">Send</button>
            </form>
          </div>
        </section>

        <footer className="py-10 text-center text-sm text-zinc-500 border-t border-zinc-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <p>© {new Date().getFullYear()} — Built with calm simplicity.</p>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
