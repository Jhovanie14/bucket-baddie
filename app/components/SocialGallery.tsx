
export default function SocialGallery() {
  return (
    <section className="border-t border-white/5 bg-black/40">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <div
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8"
          >
            <div>
              <h2 className="text-2xl sm:text-3xl font-display mb-2">
                Made to Be Posted.
              </h2>
              <p className="text-sm text-white/70 max-w-xl">
                We want to see the drip. Tag
                <span className="font-semibold">@bucketbaddie</span> and use
                <span className="font-semibold">#BucketBaddie</span> for features,
                giveaways, and secret drops.
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {/* <!-- 6 placeholder tiles --> */}
            <div
              className="aspect-square rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xs text-white/60 text-center px-3"
            >
              Creator shot placeholder<br />Bucket on car hood at night.
            </div>
            <div
              className="aspect-square rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xs text-white/60 text-center px-3"
            >
              Close-up of dripping wings over bucket.
            </div>
            <div
              className="aspect-square rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xs text-white/60 text-center px-3"
            >
              Friends sharing a Squad Bucket.
            </div>
            <div
              className="aspect-square rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xs text-white/60 text-center px-3"
            >
              TikTok screenshot with views count.
            </div>
            <div
              className="aspect-square rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xs text-white/60 text-center px-3"
            >
              Behind-the-scenes bucket assembly.
            </div>
            <div
              className="aspect-square rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xs text-white/60 text-center px-3"
            >
              Launch Pad x Bucket Baddie collab shot.
            </div>
          </div>
        </div>
      </section>
  )
}
