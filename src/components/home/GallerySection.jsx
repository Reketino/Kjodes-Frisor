import React from "react";
import Image from "next/image";

export default function GallerySection() {
    const galleryImages = [
        {
            src: "/glimt/glimt1.jpg",
            alt: "Behandling av vipper"
        },
           {
            src: "/glimt/glimt2.jpg",
            alt: "Herrefrisyre"
        },
           {
            src: "/glimt/glimt3.jpg",
            alt: "Kvinnefrisyre"
        },
    ];

    return (
         <section 
         className="py-20 bg-stone-200 text-neutral-800 mt-6"
         aria-labelledby="gallery-heading"
         >
        <header>
        <h2 
        id="gallery-heading"
        className="text-3xl text-center font-serif font-semibold mb-8"
        >
          Et glimt fra salongen
        </h2>
        </header>

        <ul className="group relative max-w-5xl mx-auto grid sm:grid-cols-3 gap-4 px-6">
            {galleryImages.map((image) => (
                <li key={image.src}>
                    <figure>
                        <Image
                        src={image.src}
                        alt={image.alt}
                        width={600}
                        height={400}
                        className="
                        rounded-2xl 
                        object-cover 
                        h-64 w-full 
                        transition-all 
                        duration-300
                        group-hover:scale-101 
                        group-hover:shadow-2xl
                        "
                        />
                    </figure>
                </li>
            ))}
        </ul>
      </section>
    )
}