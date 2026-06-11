import { FaScissors } from "react-icons/fa6";

export default function BookingLoader() {
  return (
    <aside
    role="status"
      aria-live="polite"
      aria-busy="true"
      className=" 
        absolute inset-0 z-10
        flex items-center justify-center
        bg-background
        "
    >
      <section
        className="
          flex flex-col
          items-center gap-8
          text-center
          "
      >
        <figure>
          <FaScissors
            aria-hidden="true"
            className="
              text-6xl
              -rotate-20
              animate-bounce
              "
          />
        </figure>
        <header className="space-y-2">
          <h2 className="text-3xl font-serif">Åpner booking</h2>

          <p className="text-neutral-400">Gjør saksen klar...</p>
        </header>
      </section>
    </aside>
  );
}
