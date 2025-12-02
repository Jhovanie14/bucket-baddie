
export default function Locations() {
  const mapAddress = "10410 S Main St, Houston, TX 77025";
  const mapEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(
    mapAddress
  )}&zoom=15`;
  return (
    <section id="locations" className="border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 py-14">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-display mb-2">
              Find the Baddie Bucket
            </h2>
            <p className="text-sm text-white/70 max-w-xl">
              We’re rolling through Houston with pop-ups, car meets, and
              collabs. Here’s where to catch us next.
            </p>
          </div>
          <p className="text-xs sm:text-sm text-white/60">
            Schedule changes happen – follow
            <span className="font-semibold">@bucketbaddie</span> for live
            updates.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
          {/* <!-- Schedule --> */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center justify-between gap-2 mb-1">
                <h3 className="font-semibold text-sm sm:text-base">
                  Fridays – The Launch Pad Wash
                </h3>
                <span className="text-[11px] text-white/60">Houston, TX</span>
              </div>
              <p className="text-xs sm:text-sm text-white/70">
                6:00 PM – 11:00 PM
              </p>
              <p className="mt-2 text-xs text-white/60">
                Pull up for a wash, stay for a bucket. Perfect car meet content.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center justify-between gap-2 mb-1">
                <h3 className="font-semibold text-sm sm:text-base">
                  Saturdays – Pop-up / Event Collabs
                </h3>
                <span className="text-[11px] text-white/60">Houston Area</span>
              </div>
              <p className="text-xs sm:text-sm text-white/70">Times vary</p>
              <p className="mt-2 text-xs text-white/60">
                Festivals, markets, and special events. Want us at yours? Hit
                the collab form below.
              </p>
            </div>

            <div className="rounded-2xl border border-dashed border-bbPink/50 bg-bbBlack/60 p-5">
              <h3 className="font-semibold text-sm sm:text-base mb-1">
                Cloud Kitchen / Storefront
              </h3>
              <p className="text-xs sm:text-sm text-white/70">
                We’re scouting locations in Houston for a permanent Bucket
                Baddie base. Join the list to be first in line when we
                soft-open.
              </p>
            </div>
          </div>

          {/* <!-- Map Placeholder --> */}
          <div className="rounded-2xl border border-white/10 bg-black/60 p-4 flex flex-col gap-3 h-full min-h-[400px]">
            <div className="flex items-center justify-between text-xs">
              <span className="text-white/70">📍 Bucket Baddie Location</span>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                  mapAddress
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-bbBlue hover:text-bbPink transition-colors"
              >
                Get Directions →
              </a>
            </div>
            <div className="flex-1 rounded-xl overflow-hidden border border-white/20 bg-black/40">
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "350px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Launch Pad Wash - Bucket Baddie Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
