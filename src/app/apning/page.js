import React from "react";

export default function AapningPage() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen w-full bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('/kalender.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/70 z-0 pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-4xl py-10 text-center px-4">
      <h2 className=" text-6xl mb-8 font-semibold text-stone-500">Åpningstider</h2>
      <ul className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-8">
      {[
        {day: "Mandag",
         time: "09-17",
        },
        {day: "Tirsdag",
         time: "09-17",
        },
        {day: "Onsdag",
         time: "09-17",
        },
        {day: "Torsdag",
         time: "09-18",
        },
        {day: "Fredag",
         time: "09-16",
        },
        {day: "Lørdag",
         time: "Stengt",
        },
        {day: "Søndag",
         time: "Stengt",
        },
        ].map((service) => {
          const isHelg =["Lørdag", "Søndag"]. includes(service.day);

          return (
          <div
          key={service.day}
          className={`group p-6 rounded-4xl bg-white/10 backdrop-blur-md shadow-md transition-all duration-300
           hover:bg-neutral-900  hover:-translate-y-1
           ${
            isHelg
            ? "hover:shadow-red-500/30"
            : "hover:shadow-green-500/30"
           }`}
          >
          <h3 className=" text-4xl font-semibold mb-2 text-stone-400">{service.day}</h3>
          <p className={`text-2xl leading-relaxed transition-colors duration-300  
          ${  
            isHelg
            ? "text-stone-200 group-hover:text-red-600"
            :"text-stone-200 group-hover:text-green-500"
          }`}
          >
            {service.time}
          </p>
          </div>
          );
        })} 
        </ul>
      
      </div>
    </main>
  );
}
