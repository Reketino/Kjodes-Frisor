export const closedPeriods = [
  {
    name: "Sommerferie",
    start: new Date("2026-07-15"),
    end: new Date("2026-08-10"),
    icon: "🌴",
    message: "Kjødes Frisørsalong holder stengt fra 15. juli til 10. august.",
    greeting: "Vi ønsker alle våre kunder en riktig god sommer!",
    theme: {
      notice: "border-amber-400 bg-amber-500/15",
      heading: "text-amber-300",
      card: "bg-amber-500/10 border-amber-400",
      time: "text-amber-300",
      badge: "bg-amber-500/90",
    },
  },

  {
    name: "Juleferie",
    start: new Date("2026-12-24"),
    end: new Date("2026-12-28"),
    icon: "🎄",
    message: "Kjødes Frisørsalong holder stengt i julen.",
    greeting: "Vi ønsker alle våre kunder en riktig god jul!",
    theme: {
      notice: "border-red-400 bg-red-500/15",
      heading: "text-red-300",
      card: "bg-red-500/10 border-red-400",
      time: "text-red-300",
      badge: "bg-red-500/90",
    },
  },

  {
    name: "Påskeferie",
    start: new Date("2027-03-29"),
    end: new Date("2027-04-05"),
    icon: "🐣",
    message: "Kjødes Frisørsalong holder stengt i påsken.",
    greeting: "Vi ønsker alle våre kunder en riktig god påske!",
    theme: {
      notice: "border-yellow-400 bg-yellow-500/15",
      heading: "text-yellow-300",
      card: "bg-yellow-500/10 border-yellow-400",
      time: "text-yellow-300",
      badge: "bg-yellow-500/90",
    },
  },
];
