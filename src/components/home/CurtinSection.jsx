import Image from "next/image";

export default function CurtinProducts() {
    return(
        <section 
        aria-labelledby="curtin-heading"
        className="mx-auto max-w-6xl"
        >
            <div className="grid items-center gap-10 md:grid-cols-2">
                <div>
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
                        Hårpleie & styling
                    </p>
                </div>
            </div>
            
        </section>
    )
}