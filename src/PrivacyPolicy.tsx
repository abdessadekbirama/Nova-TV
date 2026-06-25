export default function PrivacyPolicy() {
  const lastUpdated = "June 25, 2026";

  return (
    <div className="min-h-screen bg-[#0c0c0f] text-[#e8e6e1] font-sans">

      {/* Film-strip top border */}
      <div className="h-3 w-full bg-[#1a1a22] flex items-center overflow-hidden">
        <div className="flex gap-2 px-2 opacity-30">
          {Array.from({ length: 80 }).map((_, i) => (
            <div key={i} className="w-4 h-2 bg-[#e8e6e1] rounded-[1px] shrink-0" />
          ))}
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-16">

        {/* Header */}
        <header className="mb-14">
          <p className="text-[#f5c518] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Legal · Privacy
          </p>
          <h1 className="text-5xl font-bold tracking-tight text-white leading-tight mb-6">
            Privacy Policy
          </h1>
          <div className="flex items-center gap-3 mt-8">
            <div className="h-px flex-1 bg-[#2a2a35]" />
            <span className="text-[#4a4a58] text-xs tracking-widest uppercase">
              Last updated {lastUpdated}
            </span>
            <div className="h-px flex-1 bg-[#2a2a35]" />
          </div>
        </header>

        {/* Main card */}
        <div className="rounded-2xl border border-[#1e1e28] bg-[#111116] p-8 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-[#f5c518]/10 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-[#f5c518]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h2 className="text-white text-xl font-semibold">We collect nothing</h2>
          </div>
          <p className="text-[#6e6e7e] text-sm leading-relaxed mb-5">
            This app does not collect, store, or share any personal information. There is no account system, no analytics, and no tracking of any kind.
          </p>
          <p className="text-[#6e6e7e] text-sm leading-relaxed">
            Movie data is fetched directly from the{" "}
            <span className="text-[#e8e6e1] font-medium">TMDB API</span>{" "}
            and displayed to you. None of your searches, clicks, or preferences are recorded by us.
          </p>
        </div>

        {/* TMDB note */}
        <div className="rounded-xl border border-[#f5c518]/15 bg-[#f5c518]/5 p-5 flex gap-4 items-start mb-6">
          <div className="mt-0.5 shrink-0 w-7 h-7 rounded-full bg-[#f5c518]/15 flex items-center justify-center">
            <svg className="w-3.5 h-3.5 text-[#f5c518]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <p className="text-[#f5c518] text-sm font-semibold mb-1">Note about TMDB</p>
            <p className="text-[#6e6e7e] text-sm leading-relaxed">
              This product uses the TMDB API but is not endorsed or certified by TMDB.
              TMDB may have its own data practices when their API is called —
              see{" "}
              <a href="https://www.themoviedb.org/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#f5c518]/80 hover:text-[#f5c518] underline underline-offset-2 transition-colors">
                their privacy policy
              </a>{" "}
              for details.
            </p>
          </div>
        </div>

        {/* Contact */}
        <div className="rounded-xl bg-[#111116] border border-[#2a2a38] p-6">
          <h2 className="text-white text-base font-semibold mb-1.5">Questions?</h2>
          <p className="text-[#6e6e7e] text-sm leading-relaxed mb-4">
            If anything here is unclear, feel free to reach out.
          </p>
          <a
            href="mailto:abdessadekbirama1@gmail.com"
            className="inline-flex items-center gap-2 bg-[#f5c518] hover:bg-[#f5c518]/90 text-[#0c0c0f] text-sm font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            abdessadekbirama1@gmail.com
          </a>
        </div>

        <footer className="mt-14 text-center">
          <p className="text-[#3a3a48] text-xs">
            © {new Date().getFullYear()} Nova TV · All rights reserved
          </p>
        </footer>
      </div>

      {/* Film-strip bottom border */}
      <div className="h-3 w-full bg-[#1a1a22] flex items-center overflow-hidden">
        <div className="flex gap-2 px-2 opacity-30">
          {Array.from({ length: 80 }).map((_, i) => (
            <div key={i} className="w-4 h-2 bg-[#e8e6e1] rounded-[1px] shrink-0" />
          ))}
        </div>
      </div>
    </div>
  );
}