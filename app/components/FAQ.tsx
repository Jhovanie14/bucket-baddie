
export default function FAQ() {
  return (
    <section id="faq" className="border-t border-white/5 bg-black/40">
      <div className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-2xl sm:text-3xl font-display mb-6">FAQ</h2>
        <div className="grid gap-4 md:grid-cols-2 text-sm text-white/80">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <h3 className="font-semibold mb-1 text-sm">Is everything halal?</h3>
            <p className="text-sm text-white/70">
              Yes. All chicken is 100% halal from certified suppliers. No pork
              or pork by-products in the kitchen.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <h3 className="font-semibold mb-1 text-sm">Do you cater events?</h3>
            <p className="text-sm text-white/70">
              We do parties, corporate events, car meets, and more. Use the
              waitlist form or email us to set up a custom Bucket Baddie spread.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <h3 className="font-semibold mb-1 text-sm">Do you deliver?</h3>
            <p className="text-sm text-white/70">
              On select days we’ll be live on delivery apps or pickup-only
              depending on the spot. Check our IG or this site for the latest.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <h3 className="font-semibold mb-1 text-sm">
              Can I collab as an influencer?
            </h3>
            <p className="text-sm text-white/70">
              Absolutely. We love creators. DM us on Instagram or email us with
              your handles and we’ll see what kind of Bucket Baddie moment we
              can build.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
