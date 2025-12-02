import React from "react";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-white/5 bg-black/40">
      <div className="max-w-6xl mx-auto px-4 py-14">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-display mb-2">
              How the Bucket Works
            </h2>
            <p className="text-sm text-white/70 max-w-xl">
              We built the bucket around how people actually eat – and how they
              film it. Every detail is there for a reason.
            </p>
          </div>
          <p className="text-xs sm:text-sm text-white/50 max-w-sm">
            Simple 3-step flow from order to content. Perfect for foodies,
            creators, and late-night cravings.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-xs uppercase tracking-wide text-bbPink mb-1">
              Step 1
            </div>
            <h3 className="font-semibold mb-2">Pick Your Bucket</h3>
            <p className="text-sm text-white/70">
              Choose wings, tenders, or a mix, plus your fry style and bucket
              size: Solo, Duo, or Squad.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-xs uppercase tracking-wide text-bbBlue mb-1">
              Step 2
            </div>
            <h3 className="font-semibold mb-2">Load the Sauces</h3>
            <p className="text-sm text-white/70">
              Clip on your sauce rack, pack it with your favorite flavors, and
              stash your napkins &amp; utensils.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-xs uppercase tracking-wide text-bbLime mb-1">
              Step 3
            </div>
            <h3 className="font-semibold mb-2">Snap, Drip, Eat</h3>
            <p className="text-sm text-white/70">
              Slide your phone into the holder, hit record, and let the bucket
              and the drip do the talking.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-dashed border-bbPink/40 bg-bbBlack/60 p-5 flex flex-col md:flex-row gap-5 items-center">
          <div className="flex-1">
            <h4 className="font-semibold text-sm mb-2">Designed Details</h4>
            <ul className="text-xs sm:text-sm text-white/70 space-y-1.5">
              <li>
                • Integrated
                <span className="text-bbPink font-medium">
                  phone holder
                </span>{" "}
                for hands-free filming
              </li>
              <li>
                • Detachable
                <span className="text-bbBlue font-medium">sauce dock</span> so
                dips don’t slide around
              </li>
              <li>
                • Side slot for
                <span className="text-bbLime font-medium">
                  napkins &amp; utensils
                </span>
              </li>
              <li>
                • Subtle
                <span className="text-bbPink font-medium">“drip line”</span> to
                keep the visuals overflowing but not messy
              </li>
            </ul>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-40 h-40 rounded-full border border-bbPink/40 flex items-center justify-center text-[10px] text-center text-white/70">
              Bucket diagram placeholder
              <br />
              Replace with a labelled illustration for production.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
