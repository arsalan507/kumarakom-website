import Image from "next/image";
import { Reveal } from "./Reveal";
import { KeralaMap } from "./KeralaMap";
import { MaskHeading } from "./MaskHeading";

const PILLS = [
  "Vembanad Backwaters",
  "Bird Sanctuary",
  "Ayurveda",
  "Houseboat Culture",
  "Kathakali",
  "Nehru Trophy",
  "Pathiramanal Island",
  "Ecotourism",
];

const STATS = [
  { label: "Foreign Tourist Arrivals", value: "10.96 Lakh" },
  { label: "Domestic Tourist Arrivals", value: "1.56 Crore" },
  { label: "Total Tourism Revenue", value: "₹36,258 Cr" },
  { label: "YoY Revenue Growth", value: "+8.61%" },
  { label: "Ayurveda Tourist Growth (annual)", value: "20–25%" },
];

const SUBTOPICS = [
  {
    numeral: "I",
    title: "Ancient Mythological Origin",
    image: "/gallery-aerial.jpeg",
    imageAlt: "Aerial view of Vembanad backwaters — the sacred waters of Kumarakom",
    body: "Kumarakom — the land where the ten rivers rush to converge and finally find peace in the heart of the Vembanad. The name itself is a devotion: Kumara, another name for Subramaniam, son of Lord Shiva — god of war, victory, wisdom, and youth — and Kom, simply, home. Literally the abode of the gods. Over eighteen hundred years ago, the Vadakkumkore king received a divine vision here and raised a Subramania temple — a pavilion carved from a single stone. The village inherited the name of the god himself. Destination and deity became one word.",
  },
  {
    numeral: "II",
    title: "The Colonial Tryst",
    image: "/colonial-baker-heritage.png",
    imageAlt: "Alfred George Baker and the Victorian History House on the Vembanad",
    body: "In 1847, Alfred George Baker arrived and reclaimed 500 acres of Vembanad Lake, converting it into fertile garden land. In 1881, he constructed the Victorian History House — the Baker family's residence for four generations. The locals called him Kari Saipu: a man who had gone so native he spoke Malayalam and wore the mundu. Sixteen kilometres from Kottayam, cradled by the legendary Vembanad Lake — the largest backwater system in Kerala — Kumarakom became the crown jewel of Kerala's backwater circuit.",
  },
  {
    numeral: "III",
    title: "Moods & Ayurveda Soul",
    image: "/ayurveda-backwater.png",
    imageAlt: "Ayurveda treatment on the Vembanad backwaters — Kerala's living wellness tradition",
    body: "Ayurvedic healing traditions, rooted in over three thousand years of practice, find their most natural expression in Kumarakom — where the warm tropical air, healing waters, and abundance of medicinal herbs create the very conditions that classical Ayurveda prescribes for restoration. Kathakali and Kalaripayattu — one of the world's oldest martial arts — complete an experience unlike any other. Here, Ayurveda is not a wellness amenity. It is a living tradition.",
  },
  {
    numeral: "IV",
    title: "Nature & The Vembanad",
    image: "/kumarakom-bird-sanctuary.png",
    imageAlt: "White egrets at the Kumarakom Bird Sanctuary on Vembanad Lake",
    body: "The Kumarakom Bird Sanctuary — 14 acres on the banks of Vembanad — shelters over 180 species of resident and migratory birds, directly adjacent to the property. Siberian cranes, painted storks, and rare herons arrive each August, transforming the lake into a sanctuary. Pathiramanal Island rises from the water, accessible only by boat. The legendary snake boat races and traditional kettuvallam houseboats animate a backwater world unchanged for centuries.",
  },
];

export function Destination() {
  return (
    <section id="destination" className="tone-ink relative">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10 py-28 lg:py-40">

        {/* Section header */}
        <div className="mb-20 lg:mb-28">
          <Reveal>
            <span className="eyebrow">The Destination</span>
          </Reveal>
          <h2 className="h-display text-[clamp(2.2rem,4.5vw,3.6rem)] mt-8">
            <MaskHeading as="span" className="block">
              Where Serene Backwaters
            </MaskHeading>
            <MaskHeading as="span" delay={1} className="block">
              Meet <em>Tranquil Luxury</em>
            </MaskHeading>
          </h2>
        </div>

        {/* 4 Sub-topics */}
        <div className="space-y-24 lg:space-y-32 mb-24">
          {SUBTOPICS.map((topic, i) => (
            <Reveal key={topic.numeral} delay={i * 80}>
              <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${i % 2 === 1 ? "lg:[direction:rtl]" : ""}`}>
                {/* Image */}
                <div className={`relative aspect-[4/3] overflow-hidden ${i % 2 === 1 ? "lg:[direction:ltr]" : ""}`}>
                  <div className={`absolute inset-0 ${i % 2 === 0 ? "img-pan-right" : "img-pan-left"}`}>
                    <Image
                      src={topic.image}
                      alt={topic.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                      style={{ filter: "saturate(0.88)" }}
                    />
                  </div>
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: "linear-gradient(135deg, rgba(14,26,20,0.3) 0%, transparent 60%)" }}
                  />
                  <span
                    className="absolute top-5 left-6 font-display italic text-gold/60 text-[2.5rem] leading-none select-none"
                    aria-hidden
                  >
                    {topic.numeral}
                  </span>
                </div>

                {/* Text */}
                <div className={i % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                  <p className="font-sans text-[0.68rem] tracking-[0.24em] uppercase text-brass mb-4">
                    {topic.numeral} / IV
                  </p>
                  <h3 className="h-display-sm text-[clamp(1.5rem,2.5vw,2rem)] mb-6">
                    {topic.title}
                  </h3>
                  <span className="rule-gold mb-6 block" />
                  <p className="body-text text-[0.95rem] leading-relaxed">
                    {topic.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ── Kerala Houseboats ── */}
        <Reveal>
          <div className="border-t border-[var(--rule)] pt-20 lg:pt-28 mb-20 lg:mb-28">
            <span className="eyebrow mb-6 block">Kerala Houseboats</span>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute inset-0 img-pan-right">
                  <Image
                    src="/kettuvallam-houseboat.png"
                    alt="A traditional Kerala kettuvallam houseboat on Vembanad Lake"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    style={{ filter: "saturate(0.88)" }}
                  />
                </div>
              </div>
              <div>
                <h3 className="h-display-sm text-[clamp(1.5rem,2.5vw,2rem)] mb-6">
                  Kettuvallam — <em>Floating Heritage</em>
                </h3>
                <span className="rule-gold mb-6 block" />
                <p className="body-text text-[0.95rem] leading-relaxed">
                  Kerala&rsquo;s iconic houseboats, or Kettuvallams, are among the state&rsquo;s most distinctive tourism
                  experiences. Originally used to transport rice and spices through the backwaters, these traditional
                  vessels have been transformed into luxurious floating retreats that offer an intimate way to experience
                  Kerala&rsquo;s serene waterways. Kumarakom is one of the premier destinations for houseboat tourism,
                  offering visitors breathtaking views of Vembanad Lake, lush landscapes, vibrant birdlife, and authentic
                  village life along the backwaters.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ── Immersive Culture ── */}
        <Reveal>
          <div className="border-t border-[var(--rule)] pt-20 lg:pt-28 mb-20 lg:mb-28">
            <span className="eyebrow mb-6 block">Immersive Culture</span>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left — text + bullet list */}
              <div>
                <h3 className="h-display-sm text-[clamp(1.8rem,3vw,2.6rem)] mb-6">
                  The <em>Living Arts</em> of Kerala
                </h3>
                <span className="rule-gold mb-8 block" />
                <p className="body-text text-[0.95rem] leading-relaxed mb-10">
                  Experience the soul of Kerala through captivating live cultural performances during your stay at
                  The Backwater Estate — where every evening becomes a celebration of tradition, storytelling, and local craftsmanship.
                </p>
                <ul className="space-y-4">
                  {["Kalaripayattu", "Kathakali", "Mohiniyattam", "Pulikali"].map((art) => (
                    <li key={art} className="flex items-center gap-4">
                      <span className="text-brass text-[0.55rem] shrink-0">◆</span>
                      <span className="font-display text-ivory text-[1.15rem]">{art}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Right — collage image, exact 2400×1792 ratio, no crop */}
              <div className="relative overflow-hidden" style={{ aspectRatio: "2400 / 1792" }}>
                <Image
                  src="/kerala-arts-collage.png"
                  alt="Kerala living arts — Kalaripayattu, Kathakali, Mohiniyattam, Pulikali"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </Reveal>

        {/* ── Nehru Trophy Boat Race ── */}
        <Reveal>
          <div className="border-t border-[var(--rule)] pt-20 lg:pt-28 mb-20 lg:mb-28">
            <span className="eyebrow mb-6 block">Nehru Trophy Boat Race</span>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <h3 className="h-display-sm text-[clamp(1.5rem,2.5vw,2rem)] mb-6">
                  Chundan Vallams — <em>A Spectacle of Tradition</em>
                </h3>
                <span className="rule-gold mb-6 block" />
                <p className="body-text text-[0.95rem] leading-relaxed">
                  The Nehru Trophy Boat Race is one of Kerala&rsquo;s most iconic cultural and sporting events, held
                  annually on the picturesque Punnamada Lake near Kumarakom and Alappuzha. Featuring magnificent
                  Chundan Vallams (snake boats) powered by synchronised teams of over 100 rowers, the event attracts
                  thousands of spectators and visitors from around the world. Its close proximity to Kumarakom makes
                  it one of the region&rsquo;s biggest tourism attractions, offering guests an opportunity to witness
                  Kerala&rsquo;s vibrant traditions, community spirit, and world-famous backwater culture.
                </p>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute inset-0 img-pan-left">
                  <Image
                    src="/nehru-trophy-boat-race.png"
                    alt="Chundan Vallam snake boat — Nehru Trophy Boat Race, Kerala"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    style={{ objectPosition: "center 30%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Pills */}
        <Reveal>
          <div className="flex flex-wrap gap-2.5 mb-20">
            {PILLS.map((p) => (
              <span key={p} className="pill">
                {p}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Map + stats — mobile only */}
        <div className="grid lg:grid-cols-2 gap-8 lg:hidden">
          <Reveal delay={120}>
            <div
              className="border p-6 lg:p-8"
              style={{
                borderColor: "var(--rule-strong)",
                background: "var(--bg-card-deep)",
              }}
            >
              <p
                className="text-[0.7rem] tracking-[0.24em] uppercase text-center mb-4"
                style={{ color: "var(--on-bg-soft)" }}
              >
                Kerala
              </p>
              <KeralaMap />
            </div>
          </Reveal>

          <Reveal delay={240}>
            <div
              className="border p-7 lg:p-8"
              style={{
                borderColor: "var(--rule-strong)",
                background: "var(--bg-card-deep)",
              }}
            >
              <p className="text-[0.72rem] tracking-[0.22em] uppercase text-brass mb-6">
                Tourism at a Glance — Kerala
              </p>
              <ul className="divide-y divide-[var(--rule)]">
                {STATS.map((s) => (
                  <li
                    key={s.label}
                    className="flex justify-between items-baseline py-3.5"
                  >
                    <span
                      className="text-[0.92rem]"
                      style={{ color: "var(--on-bg)" }}
                    >
                      {s.label}
                    </span>
                    <span className="font-display text-brass text-[1.15rem]">
                      {s.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
