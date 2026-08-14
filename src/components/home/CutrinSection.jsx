import Image from "next/image";

export default function CutrinProducts() {
    return(
        <section 
        aria-labelledby="cutrin-heading"
        className="mx-auto max-w-6xl"
        >
            <div className="grid items-center gap-10 md:grid-cols-2">
                <div>
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
                        Hårpleie & styling
                    </p>

                    <h2
                    id="cutrin-heading"
                    className="mb-6 text-4xl font-serif text-neutral-500 md:text-5xl"
                    >
                        Cutrin
                    </h2>

                    <p className="max-w-xl text-lg leading-relaxed text-neutral-400">
                    Vi fører produkter fra Cutrin i salongen. Spør oss gjerne om
                    hvilke produkter som passer best til ditt hår og din styling.
                    </p> 
                </div>

                <figure className="flex justify-center">
                    <Image
                    src="/assets/cutrin.webp"
                    alt="Cutrin hårpleieprodukter"
                    width={1200}
                    height={800}
                    className="w-full max-w-xl rounded-4xl object-cover shadow-lg"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </figure> 
            </div>
        </section>
    )
}