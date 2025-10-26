import React from "react";

export default function AapningPage() {
  return (
    <main className="flex flex-col items-center space-y-1 mt-10">
      <h2 className=" sm:text-4xl color">Våre Åpningstider:</h2>
      <ul className="flex  flex-col items-center space-y-1 mt-4">
        <span className="text-center font-bold mb-2 mt-2">Mandag: 09–17</span>
        <span className="text-center font-bold mb-2 mt-2">Tirsdag: 09–17</span>
        <span className="text-center font-bold mb-2 mt-2">Onsdag: 09–17</span>
        <span className="text-center font-bold mb-2 mt-2">Torsdag: 09–18</span>
        <span className="text-center font-bold mb-2 mt-2">Fredag: 09–16</span>
        <span className="text-center font-bold mb-2 mt-2">Lørdag: Stengt</span>
        <span className="text-center font-bold mb-2 mt-2">Søndag: Stengt</span>
      </ul>
      <h2 className="sm:text-2xl mb-4 mt-4">Velkommen Til Oss!✂️</h2>
    </main>
  );
}
