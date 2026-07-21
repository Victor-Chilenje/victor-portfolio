import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#documents", label: "Resources" },
  { href: "#contact", label: "Contact" },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <h1 className="text-xl font-bold text-white">
            Victor<span className="text-blue-500">Dev</span>
          </h1>

          <ul className="hidden md:flex gap-8 text-slate-300">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-blue-500">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 text-slate-300 transition hover:border-blue-500 hover:text-blue-500 md:hidden"
            aria-label="Open navigation menu"
            onClick={() => setMobileOpen(true)}
          >
            <FaBars size={20} />
          </button>
        </div>
      </nav>

      {mobileOpen ? (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />

          <aside className="absolute right-0 top-0 h-full w-72 bg-slate-950 shadow-2xl shadow-slate-950/40 px-6 py-6 ring-1 ring-white/10">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-white">Menu</h2>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 text-slate-300 transition hover:border-blue-500 hover:text-blue-500"
                aria-label="Close navigation menu"
                onClick={() => setMobileOpen(false)}
              >
                <FaTimes size={18} />
              </button>
            </div>

            <nav className="mt-10 space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block rounded-2xl px-4 py-3 text-lg font-medium text-slate-200 transition hover:bg-slate-900 hover:text-blue-400"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </aside>
        </div>
      ) : null}
    </>
  );
}

export default Navbar;