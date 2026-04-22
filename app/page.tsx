import Image from "next/image";

const services = [
  "Raccoons",
  "Squirrels",
  "Rats & Mice",
  "Skunks",
  "Exclusion & Prevention",
];

const promises = [
  "Humane Removal",
  "Thorough Inspection",
  "Exclusion & Repair",
  "Honest & Reliable",
];

const highlights = [
  "Same Day Service",
  "Fully Insured & Licensed",
  "Proudly Serving the 530 Area",
  "5-Star Service You Can Trust",
];

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-lime-400/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(181,214,35,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(181,214,35,0.08),transparent_30%)]" />
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 md:px-6 lg:grid-cols-2 lg:items-center lg:py-16">
          {/* LEFT */}
          <div className="relative z-10">
            <div className="mb-6">
              <Image
                src="/trappro-logo.png"
                alt="TrapPro Wildlife & Pest Control logo"
                width={520}
                height={180}
                className="h-auto w-full max-w-[520px]"
                priority
              />
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl font-black uppercase leading-none sm:text-5xl md:text-6xl">
                Wildlife Problems?
                <span className="mt-2 block text-[#b7d61a]">We Solve Them.</span>
              </h1>

              <p className="text-lg font-bold uppercase tracking-wide text-white/90 sm:text-xl">
                Fast. Humane. Effective.
              </p>

              <div className="inline-block rounded-2xl border-4 border-[#b7d61a] bg-[#b7d61a] px-5 py-4 text-center text-black shadow-[0_0_40px_rgba(181,214,35,0.2)]">
                <div className="text-3xl font-black sm:text-5xl">775-501-7414</div>
                <div className="mt-1 text-sm font-extrabold uppercase sm:text-base">
                  Call or Text • Same Day Service
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="tel:7755017414"
                  className="rounded-xl bg-[#b7d61a] px-6 py-3 text-sm font-black uppercase tracking-wide text-black transition hover:scale-[1.02]"
                >
                  Call Now
                </a>
                <a
                  href="sms:7755017414"
                  className="rounded-xl border border-[#b7d61a] px-6 py-3 text-sm font-black uppercase tracking-wide text-[#b7d61a] transition hover:bg-[#b7d61a] hover:text-black"
                >
                  Text Us
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative z-10">
            <div className="relative overflow-hidden rounded-3xl border-2 border-[#b7d61a]/60 bg-neutral-950 shadow-[0_0_50px_rgba(181,214,35,0.12)]">
              <div className="absolute right-4 top-4 z-10 rotate-[-6deg] rounded-md bg-[#b7d61a] px-4 py-3 text-center text-black shadow-lg">
                <div className="text-lg font-black uppercase leading-none">Local</div>
                <div className="mt-1 text-xs font-extrabold uppercase sm:text-sm">
                  & Trusted
                  <br />
                  In The 530 Area
                </div>
              </div>

              <Image
                src="/raccoon-hero.png"
                alt="Raccoon at TrapPro service location"
                width={900}
                height={700}
                className="h-[320px] w-full object-cover sm:h-[420px]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES + PROMISE */}
      <section className="mx-auto max-w-7xl px-4 py-10 md:px-6 lg:py-14">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* WE HANDLE */}
          <div className="rounded-3xl border border-white/10 bg-neutral-950 p-6 shadow-xl">
            <div className="mb-6 inline-block rounded-full bg-[#b7d61a] px-5 py-2 text-lg font-black uppercase text-black">
              We Handle:
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service}
                  className="rounded-2xl border border-white/10 bg-black/60 px-4 py-4 text-lg font-extrabold uppercase tracking-wide"
                >
                  <span className="text-[#b7d61a]">●</span>{" "}
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* PROMISE */}
          <div className="rounded-3xl border border-[#b7d61a]/30 bg-neutral-950 p-6 shadow-xl">
            <div className="mb-5 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-[#b7d61a] text-3xl text-[#b7d61a]">
                ✓
              </div>
              <div>
                <h2 className="text-2xl font-black uppercase text-[#b7d61a]">
                  Our Promise
                </h2>
                <p className="text-sm uppercase tracking-wider text-white/60">
                  Local. Reliable. Professional.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {promises.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/50 px-4 py-4"
                >
                  <span className="text-xl font-black text-[#b7d61a]">✓</span>
                  <span className="text-lg font-bold">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-[#b7d61a]/40 bg-black p-5 text-center">
              <div className="mb-2 text-xl font-black uppercase tracking-wide">
                Protecting Your Home
              </div>
              <div className="text-lg font-extrabold uppercase text-[#b7d61a]">
                And Your Peace Of Mind.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY / FLYER STYLE GRID */}
      <section className="mx-auto max-w-7xl px-4 pb-10 md:px-6 lg:pb-14">
        <div className="mb-5 flex items-center justify-between gap-4">
          <h2 className="text-2xl font-black uppercase sm:text-3xl">
            Local. Reliable. <span className="text-[#b7d61a]">Professional.</span>
          </h2>
          <div className="hidden text-sm font-bold uppercase tracking-wider text-white/50 sm:block">
            Fast response • Honest service
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="overflow-hidden rounded-3xl border border-[#b7d61a]/30 bg-neutral-950">
            <Image
              src="/rat.jpg"
              alt="Rat closeup"
              width={700}
              height={700}
              className="h-60 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-black uppercase">Rodent Control</h3>
              <p className="mt-2 text-sm text-white/70">
                Thorough inspection, problem solving, and prevention that actually sticks.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-[#b7d61a]/30 bg-neutral-950">
            <Image
              src="/skunk.jpg"
              alt="Skunk on grass"
              width={700}
              height={700}
              className="h-60 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-black uppercase">Skunk Removal</h3>
              <p className="mt-2 text-sm text-white/70">
                Humane service with quick action when wildlife gets too close for comfort.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-[#b7d61a]/30 bg-neutral-950 md:col-span-2">
            <Image
              src="/trap.jpg"
              alt="Humane wildlife trap"
              width={1200}
              height={700}
              className="h-60 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-black uppercase">Humane Trapping & Exclusion</h3>
              <p className="mt-2 max-w-3xl text-sm text-white/70">
                We do not just remove the problem. We help stop it from coming back with
                smart exclusion work and real-world prevention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="border-y border-[#b7d61a]/30 bg-[#b7d61a] text-black">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-8 text-center md:flex-row md:px-6 md:text-left">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em]">
              Need help now?
            </p>
            <h2 className="mt-1 text-3xl font-black uppercase sm:text-4xl">
              775-501-7414
            </h2>
            <p className="mt-2 text-sm font-bold uppercase">
              Call or text for same day service
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 md:justify-end">
            <a
              href="tel:7755017414"
              className="rounded-xl bg-black px-6 py-3 text-sm font-black uppercase tracking-wide text-white transition hover:scale-[1.02]"
            >
              Call Now
            </a>
            <a
              href="sms:7755017414"
              className="rounded-xl border-2 border-black px-6 py-3 text-sm font-black uppercase tracking-wide text-black transition hover:bg-black hover:text-white"
            >
              Text Us
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <div className="grid gap-6 rounded-3xl border border-white/10 bg-neutral-950 p-6 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-white/50">
              CALL US NOW
            </p>
            <a
              href="7755017414"
          
              className="mt-2 block text-3xl font-black uppercase text-[#b7d61a] hover:text-white"
            >
              "775-501-7414"
            </a>
          </div>

          <div className="hidden h-16 w-px bg-[#b7d61a]/30 lg:block" />

          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-white/50">
              Email Us
            </p>
            <a
              href="mailto:sales@trappro530.com"
              className="mt-2 block text-2xl font-black uppercase text-[#b7d61a] hover:text-white sm:text-3xl"
            >
              sales@trappro530.com
            </a>
          </div>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-black px-4 py-4 text-center text-sm font-black uppercase tracking-wide text-white/90"
            >
              {item}
            </div>
          ))}
        </div>
      </footer>
    </main>
  );
}
