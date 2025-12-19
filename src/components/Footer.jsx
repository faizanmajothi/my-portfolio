export default function Footer() {
  return (
    <footer className="px-6 overflow-hidden md:px-20 py-8 border-t border-slate-800 text-gray-400">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} Faizan. All rights reserved.</p>

        <div className="flex gap-6">
          <a target="_blank" href="https://www.linkedin.com/in/faizan-majothee" className="hover:text-white">LinkedIn</a>
          <a target="_blank" href="https://github.com/faizanmajothi" className="hover:text-white">GitHub</a>
          <a target="_blank" href="mailto:fmajothi8@gmail.com" className="hover:text-white">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
