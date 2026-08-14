import Image from "next/image";

const products = [
  {
    brand: "Cutrin",
    category: "Hårpleie & styling",
    description:
      "Vi fører produkter fra Cutrin i salongen, blant annet Ainoa-serien. Spør oss gjerne om hvilke produkter som passer best til ditt hår og dine behov.",
    image: "/assets/cutrin.webp",
    alt: "Cutrin Ainoa hårpleieprodukter",
    href: "https://cutrin.no/",
  },
  {
    brand: "Moroccanoil",
    category: "Hårpleie",
    description:
      "Vi fører produkter fra Moroccanoil i salongen, blant annet shampoo og pleieprodukter. Spør oss gjerne om hva som passer best til ditt hår.",
    image: "/assets/moroccanoil.webp",
    alt: "Moroccanoil hårpleieprodukter",
    href: "https://eu.moroccanoil.com/collections/shampoo-conditioner",
  },
];

export default function ProductsSection() {
  return (
    <section
      aria-labelledby="products-heading"
      className="border-y border-stone-800 bg-stone-900 px-4 py-10 md:px-8 md:py-12"
    >
      <div className="mx-auto max-w-5xl">
        <header className="mb-7 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
            Hårpleie
          </p>

          <h2
            id="products-heading"
            className="font-serif text-3xl text-stone-200 md:text-4xl"
          >
            Produkter vi fører
          </h2>
        </header>

        <ul className="grid gap-5 md:grid-cols-2">
          {products.map((product) => (
            <li key={product.brand}>
              <a
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Les mer om ${product.brand}`}
                className="
                  group
                  block
                  overflow-hidden
                  rounded-3xl
                  border
                  border-stone-800
                  bg-stone-950/50
                  shadow-lg
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-stone-700
                  hover:shadow-xl
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-stone-400
                "
              >
                <figure className="relative h-52 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    className="
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-[1.03]
                    "
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </figure>

                <div className="px-6 py-6">
                  <p
                    className="
                      mb-2
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-stone-500
                      transition-colors
                      duration-300
                      group-hover:text-stone-400
                    "
                  >
                    {product.category}
                  </p>

                  <h3
                    className="
                      mb-3
                      font-serif
                      text-2xl
                      text-stone-200
                      transition-colors
                      duration-300
                      group-hover:text-white
                    "
                  >
                    {product.brand}
                  </h3>

                  <p className="text-base leading-relaxed text-neutral-400">
                    {product.description}
                  </p>

                  <span
                    className="
                      mt-5
                      inline-block
                      text-sm
                      font-medium
                      text-stone-500
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                      group-hover:text-stone-300
                    "
                  >
                    Les mer →
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}