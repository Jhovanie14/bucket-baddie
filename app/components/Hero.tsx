export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-32 h-80 w-80 rounded-full bg-bbPink/30 blur-3xl"></div>
        <div className="absolute -bottom-40 -right-32 h-80 w-80 rounded-full bg-bbBlue/30 blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 pt-12 pb-20 lg:flex lg:items-center lg:gap-10">
        {/* Text */}
        <div className="lg:w-1/2 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            <span className="h-2 w-2 rounded-full bg-bbLime animate-pulse"></span>
            <span>100% Halal · Houston, TX</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display tracking-tight">
            Buckets Built to <span className="text-bbPink">Go Viral</span>.
            <br className="hidden sm:block" />
            Wings Built to <span className="text-bbBlue">Disappear</span>.
          </h1>

          <p className="text-sm sm:text-base text-white/70 max-w-xl">
            Halal wings, tenders, and loaded fries stacked in a custom neon
            bucket with built-in sauce & phone holder. Pull up, hit record, and
            let the Baddie bucket do the flexing.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#order"
              className="inline-flex items-center rounded-full bg-bbPink px-6 py-2.5 text-sm font-semibold text-bbBlack shadow-lg shadow-bbPink/40 hover:bg-white transition-colors"
            >
              Order Pickup / Delivery
            </a>
            <a
              href="#locations"
              className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
            >
              Find the Truck
            </a>
          </div>

          <div className="flex flex-wrap gap-4 text-[11px] sm:text-xs text-white/60 mt-4">
            <div className="flex items-center gap-2">
              <span className="h-5 w-5 rounded-full bg-bbLime/20 flex items-center justify-center text-[11px]">
                ✅
              </span>
              100% Halal Chicken
            </div>
            <div className="flex items-center gap-2">
              <span className="h-5 w-5 rounded-full bg-bbBlue/20 flex items-center justify-center text-[11px]">
                🔥
              </span>
              Simple menu, fresh & fast
            </div>
            <div className="flex items-center gap-2">
              <span className="h-5 w-5 rounded-full bg-bbPink/20 flex items-center justify-center text-[11px]">
                🎥
              </span>
              Built for TikTok & IG
            </div>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="mt-10 lg:mt-0 lg:w-1/2 flex justify-center">
          <div className="relative h-80 w-full max-w-md rounded-3xl border border-white/10 bg-linear-to-br from-bbPink/30 via-bbBlack to-bbBlue/40 p-4 shadow-2xl">
            <div className="absolute inset-4 rounded-2xl bg-bbBlack/60 border border-white/10 flex flex-col items-center justify-center gap-3">
              <div className="w-32 h-24 bg-linear-to-t from-bbPink to-bbBlue rounded-b-[2.5rem] rounded-t-xl border-2 border-white/60 relative">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex gap-1">
                  <div className="w-4 h-6 rounded-full bg-yellow-300/90 shadow-md"></div>
                  <div className="w-4 h-6 rounded-full bg-orange-400/90 shadow-md"></div>
                  <div className="w-4 h-6 rounded-full bg-red-400/90 shadow-md"></div>
                </div>
                <div className="absolute -right-6 top-4 w-14 h-6 rounded-full bg-bbBlack border border-white/40 flex items-center justify-center text-[9px]">
                  Sauce Dock
                </div>
                <div className="absolute -left-6 bottom-3 w-10 h-10 rounded-xl bg-bbBlack border border-white/40 flex items-center justify-center text-[9px] text-center px-1">
                  Phone Holder
                </div>
              </div>
              <p className="text-xs text-center text-white/70 max-w-xs">
                Hero render placeholder. Replace with real 3D/photography of the
                Bucket Baddie loaded with wings, tenders, and fries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
