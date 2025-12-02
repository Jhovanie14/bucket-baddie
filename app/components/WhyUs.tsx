import React from "react";

export default function WhyUs() {
  return (
    <section id="why" className="border-t border-white/5 bg-black/40">
      <div className="max-w-6xl mx-auto px-4 py-14 grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="text-2xl sm:text-3xl font-display mb-3">
            Not Just Another Wing Spot.
          </h2>
          <p className="text-sm text-white/70 mb-5">
            Bucket Baddie was built to be stupid simple in the kitchen and
            stupid loud on social. We care about three things: flavor, visuals,
            and vibes.
          </p>
          <ul className="space-y-3 text-sm text-white/80">
            <li>
              <span className="text-bbPink font-semibold">
                Built for Content
              </span>
              – Buckets designed to look crazy on camera, with clean lines and
              bold color.
            </li>
            <li>
              <span className="text-bbBlue font-semibold">
                Halal &amp; High Quality
              </span>
              – A focused menu means faster orders, fresher food, and consistent
              quality.
            </li>
            <li>
              <span className="text-bbLime font-semibold">Shareable AF</span> –
              Designed for friend groups, car meets, and late-night hangs.
            </li>
            <li>
              <span className="font-semibold">Innovative Bucket Design</span> –
              Integrated sauce, phone, and utensil spots so everything stays
              where it should.
            </li>
          </ul>

          <div className="mt-6 text-xs sm:text-sm text-white/60 border-l-2 border-bbPink pl-3">
            “Honestly the most extra bucket of food I’ve ever seen… in a good
            way.” – <span className="text-white">Random Houston Foodie</span>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-md rounded-3xl border border-white/10 bg-linear-to-tr from-bbBlue/20 via-bbBlack to-bbPink/25 p-4">
            <div className="aspect-4/3 rounded-2xl bg-black/40 border border-dashed border-white/20 flex items-center justify-center text-xs text-white/60 text-center px-4">
              UGC / lifestyle photo placeholder
              <br />
              Swap this with real shots of the bucket on car hoods, at The
              Launch Pad, or with friends sharing a Squad Bucket.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
