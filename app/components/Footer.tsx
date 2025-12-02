import React from 'react'

export default function Footer() {
  return (
     <footer className="border-t border-white/10 bg-black">
      <div
        className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60"
      >
        <div className="flex items-center gap-2">
          <div
            className="h-7 w-7 rounded-xl bg-linaer-to-tr from-bbPink via-bbBlue to-bbLime flex items-center justify-center"
          >
            <div
              className="w-4 h-4 border-b-2 border-t border-x border-bbBlack rounded-b-md"
            ></div>
          </div>
          <div>
            <div className="font-semibold text-white text-sm">Bucket Baddie</div>
            <div className="text-[11px]">Buckets · Drip · Vibes · Houston, TX</div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <div className="flex gap-3">
            <a href="#" className="hover:text-bbPink">Instagram</a>
            <a href="#" className="hover:text-bbPink">TikTok</a>
            <a href="#" className="hover:text-bbPink">Facebook</a>
          </div>
          <div className="text-[11px] text-white/50">
            © <span id="year"></span> Bucket Baddie. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
