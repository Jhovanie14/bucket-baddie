
export default function OrderForm() {
  return (
    <section
      id="order"
      className="border-t border-white/5 bg-linear-to-r from-bbPink/20 via-bbBlack to-bbBlue/25"
    >
      <div className="max-w-6xl mx-auto px-4 py-14 grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="text-2xl sm:text-3xl font-display mb-2">
            Be a Day-One Baddie.
          </h2>
          <p className="text-sm text-white/80 mb-4 max-w-lg">
            Get first dibs on opening-day drops, new sauces, secret menu items,
            and collab nights. We don’t spam – only sauce.
          </p>

          <form className="space-y-3 max-w-md">
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-medium text-white/70 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-bbPink"
                placeholder="Bucket Baddie Fan"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-medium text-white/70 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-bbPink"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-xs font-medium text-white/70 mb-1"
              >
                Phone (optional for SMS drops)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-bbPink"
                placeholder="(555) 123-4567"
              />
            </div>
            <div>
              <label
                htmlFor="preference"
                className="block text-xs font-medium text-white/70 mb-1"
              >
                I’m mostly into
              </label>
              <select
                id="preference"
                name="preference"
                className="w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-bbPink"
              >
                <option value="">Select an option</option>
                <option value="wings">Wings</option>
                <option value="tenders">Tenders</option>
                <option value="fries">Fries</option>
                <option value="all">All of the above</option>
              </select>
            </div>
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-bbPink px-6 py-2.5 text-sm font-semibold text-bbBlack shadow-lg shadow-bbPink/40 hover:bg-white transition-colors"
            >
              Join the Bucket List
            </button>
            <p className="text-[10px] text-white/50">
              By submitting, you agree to receive occasional emails and/or SMS
              from Bucket Baddie. No spam, only sauce. Message &amp; data rates
              may apply.
            </p>
          </form>
        </div>

        <div className="rounded-3xl border border-white/10 bg-black/50 p-5 flex flex-col gap-4 text-sm text-white/70">
          <h3 className="font-semibold text-base mb-1">Ordering Info</h3>
          <ul className="space-y-2 text-sm">
            <li>
              • Live ordering will run through our delivery partners &amp;
              onsite pickup.
            </li>
            <li>
              • Check DoorDash / Uber Eats (coming soon) or our IG story for
              live links.
            </li>
            <li>
              • For catering, events, or collabs, reach out via email or DM.
            </li>
          </ul>
          <div className="mt-3 text-xs text-white/60">
            Want a collab, influencer night, or bucket drop at your event?
            <br />
            Email:
            <span className="text-bbBlue">collab@bucketbaddie.com</span>
            (placeholder)
          </div>
        </div>
      </div>
    </section>
  );
}
