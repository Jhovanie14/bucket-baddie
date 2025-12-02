
export default function Menu() {
  return (
    <section id="menu" className="border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 py-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-display mb-2">
              Menu: Simple but Loaded
            </h2>
            <p className="text-sm text-white/70 max-w-xl">
              Just wings, tenders, fries, and stupid-good sauces. That’s it.
              Fewer choices, better food, faster lines.
            </p>
          </div>
          <div className="text-xs sm:text-sm text-white/60">
            🕋 All chicken is
            <span className="text-bbLime font-semibold">100% halal</span>. No
            pork. No shortcuts.
          </div>
        </div>

        {/* <!-- Bucket sizes --> */}
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 flex flex-col justify-between">
            <div>
              <div className="text-xs uppercase tracking-wide text-bbPink mb-1">
                For One
              </div>
              <h3 className="font-semibold text-lg mb-2">Solo Baddie</h3>
              <ul className="text-sm text-white/70 space-y-1">
                <li>• 6 wings or tenders</li>
                <li>• Regular fries</li>
                <li>• 2 sauces</li>
              </ul>
            </div>
            <p className="mt-4 text-xs text-white/50">
              Perfect for a late-night flex or solo car pic.
            </p>
          </div>

          <div className="rounded-2xl border border-bbPink/70 bg-bbPink/5 p-5 flex flex-col justify-between shadow-lg shadow-bbPink/20">
            <div>
              <div className="text-xs uppercase tracking-wide text-bbPink mb-1">
                Most Popular
              </div>
              <h3 className="font-semibold text-lg mb-2">Duo Drip</h3>
              <ul className="text-sm text-white/70 space-y-1">
                <li>• 12 wings or mix</li>
                <li>• Loaded fries (cheese, drizzle, toppings)</li>
                <li>• 3 sauces</li>
              </ul>
            </div>
            <p className="mt-4 text-xs text-white/50">
              Date night, bestie night, or “I’m hungry and I don’t share.”
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 flex flex-col justify-between">
            <div>
              <div className="text-xs uppercase tracking-wide text-bbBlue mb-1">
                For the Group
              </div>
              <h3 className="font-semibold text-lg mb-2">Squad Bucket</h3>
              <ul className="text-sm text-white/70 space-y-1">
                <li>• 24 wings / tenders mix</li>
                <li>• XL loaded fries</li>
                <li>• 5 sauces</li>
                <li>• Extra sauce dock &amp; napkin slot</li>
              </ul>
            </div>
            <p className="mt-4 text-xs text-white/50">
              Pull up with the whole crew or bring it to the watch party.
            </p>
          </div>
        </div>

        {/* <!-- Proteins & fries --> */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold mb-2">Protein Choices</h3>
            <ul className="text-sm text-white/70 space-y-1">
              <li>
                • <span className="font-semibold text-white">Wings</span> –
                classNameic bone-in, crispy outside, juicy inside
              </li>
              <li>
                • <span className="font-semibold text-white">Tenders</span> –
                thick-cut strips with extra crunch
              </li>
              <li>
                •
                <span className="font-semibold text-white">
                  Half &amp; Half
                </span>
                – can’t decide? Don’t.
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold mb-2">Fries &amp; Loaded Options</h3>
            <ul className="text-sm text-white/70 space-y-1">
              <li>• classNameic crispy fries</li>
              <li>• Optional curly / specialty fries (if available)</li>
              <li>
                •
                <span className="font-semibold text-white">
                  Loaded Baddie Fries
                </span>
                – cheese sauce, house drizzle, and crispy topping mix
              </li>
            </ul>
          </div>
        </div>

        {/* <!-- Sauces --> */}
        <div className="mt-10">
          <h3 className="font-semibold mb-3">Signature Drip Sauces</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 text-sm">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="font-semibold text-bbPink mb-1">
                Baddie Buffalo
              </div>
              <p className="text-white/70 text-sm">
                classNameic buffalo with a little extra attitude and kick.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="font-semibold text-bbBlue mb-1">
                Garlic Drip Parm
              </div>
              <p className="text-white/70 text-sm">
                Creamy, garlicky, and loaded with parmesan flavor.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="font-semibold text-bbLime mb-1">
                Sweet Heat Mango
              </div>
              <p className="text-white/70 text-sm">
                Tropical sweet with a spicy, sticky finish.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="font-semibold mb-1">Smoky BBQ Flex</div>
              <p className="text-white/70 text-sm">
                Deep, smoky BBQ with a hint of sweetness.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="font-semibold mb-1">Spicy Baddie Ranch</div>
              <p className="text-white/70 text-sm">
                House ranch with a chili kick – addictive level.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="font-semibold mb-1">Honey Fire</div>
              <p className="text-white/70 text-sm">
                Sticky honey, slow-building heat. Perfect on tenders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
