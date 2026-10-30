const Footer = () => {
  return (
    <footer className="relative bg-[#050505] text-[#9CA3AF] pt-28 pb-4 overflow-hidden font-sans rounded-t-[32px] md:rounded-t-[40px] mt-20">
      {/* 1. Background Blur Gradient (Blue - 75% Tinggi) */}
      <div className="absolute bottom-0 left-0 w-full h-[75%] pointer-events-none z-0">
        <div className="w-full h-full bg-gradient-to-t from-blue-700/80 via-blue-800/35 to-transparent blur-[90px]" />
      </div>

      <div className="w-full mx-auto px-6 md:px-8 relative z-10 flex flex-col justify-between min-h-[380px]">
        {/* 2. Top Section: Grid 3 Kolom */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 w-full text-center md:text-left">
          {/* Kolom Kiri: Navigasi */}
          <div className="flex flex-col items-center md:items-start justify-between h-full space-y-6 md:space-y-0">
            <nav className="flex flex-col gap-3 items-center md:items-start">
              <a href="#" className="hover:text-white transition-colors text-lg text-white font-medium">
                Home
              </a>
              <a href="#" className="hover:text-white transition-colors text-lg">
                About us
              </a>
              <a href="#" className="hover:text-white transition-colors text-lg">
                Partnership
              </a>
            </nav>
            <div className="hidden md:block mt-16 text-sm text-[#6B7280]">
              <p>©2025 Beellionaire</p>
              <p>All rights reserved</p>
            </div>
          </div>

          {/* Kolom Tengah: Alamat & Sosial Media */}
          <div className="flex flex-col items-center justify-between h-full text-center space-y-6 md:space-y-0">
            <div className="flex flex-col items-center">
              <p className="text-sm mb-2 text-[#6B7280]">Address:</p>
              <p className="text-sm max-w-[280px] leading-relaxed text-gray-300">
                Beellionaire Limited 1158, suite 3, Old
                <br />
                Mint Street, Valletta, VLT 1515, Malta
              </p>

              <div className="flex justify-center gap-4 mt-6">
                <a href="#" className="w-11 h-11 rounded-lg border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <span className="text-xs font-semibold text-white">FB</span>
                </a>
                <a href="#" className="w-11 h-11 rounded-lg border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <span className="text-xs font-semibold text-white">IN</span>
                </a>
              </div>
            </div>

            <a href="#" className="hidden md:block mt-16 text-sm hover:text-white transition-colors text-[#6B7280]">
              Privacy Policy
            </a>
          </div>

          {/* Kolom Kanan: Badge Google Partner */}
          <div className="flex flex-col items-center md:items-end justify-between h-full text-center md:text-right space-y-6 md:space-y-0">
            <div className="flex flex-col items-center md:items-end">
              <p className="text-sm mb-3 text-gray-300">
                Lead Google
                <br />
                Partner in 2025
              </p>
              <div className="flex flex-col items-center justify-center w-28 h-28 border border-white/10 rounded-2xl bg-black/40 backdrop-blur-md shadow-lg">
                <div className="w-8 h-8 rounded-full border-4 border-t-red-500 border-r-yellow-500 border-b-green-500 border-l-blue-500 mb-2" />
                <p className="text-[10px] font-bold text-white tracking-wide">Google Partner</p>
                <p className="text-[8px] text-[#9CA3AF] tracking-wider">PREMIER 2025</p>
              </div>
            </div>

            <p className="hidden md:block mt-16 text-sm text-[#6B7280]">Website by hx6n</p>
          </div>
        </div>

        {/* 3. Link Tambahan Khusus Mobile */}
        <div className="flex flex-col items-center text-center md:hidden gap-4 mt-12 border-t border-white/10 pt-8 text-sm">
          <a href="#" className="hover:text-white transition-colors text-gray-300">
            Privacy Policy
          </a>
          <div className="text-[#6B7280]">
            <p>©2025 Beellionaire. All rights reserved.</p>
          </div>
          <p className="text-xs text-[#6B7280]">Website by hx6n</p>
        </div>
      </div>

      {/* 4. Full-Width Edge-to-Edge Typography (Menggunakan SVG Text) */}
      <div className="mt-12 md:mt-16 w-full relative z-10 overflow-hidden leading-none select-none">
        <svg className="w-full h-auto block" viewBox="0 0 1000 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="500" y="95" textAnchor="middle" fill="white" fontSize="125" fontWeight="900" lengthAdjust="spacingAndGlyphs" textLength="1000" style={{ fontFamily: "Inter, sans-serif" }}>
            BEELLIONAIRE
          </text>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
