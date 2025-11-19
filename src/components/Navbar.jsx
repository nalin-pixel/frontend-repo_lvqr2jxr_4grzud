import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "#projects", label: "Projects" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <a href="#" className="font-semibold tracking-tight text-zinc-900">m.</a>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-zinc-700">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-zinc-900 transition-colors">
              {item.label}
            </a>
          ))}
        </nav>
        <button
          className="sm:hidden p-2 rounded-md hover:bg-zinc-100"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <Menu size={20} />
        </button>
      </div>
      {open && (
        <div className="sm:hidden border-t border-zinc-200 bg-white/80 backdrop-blur">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2 text-sm">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="py-2 text-zinc-700 hover:text-zinc-900"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
