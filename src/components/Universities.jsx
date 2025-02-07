export default function Universities() {
  const destinations = [
    { country: "The USA", image: "/countries/USA.png", flag: "🇺🇸" },
    { country: "The UK", image: "/countries/UK.png", flag: "🇬🇧" },
    { country: "Canada", image: "/countries/CANADA.png", flag: "🇨🇦" },
    { country: "Australia", image: "/countries/AUS.png", flag: "🇦🇺" },
    { country: "Germany", image: "/countries/GER.png", flag: "🇩🇪" },
    { country: "Singapore", image: "/countries/SINGA.png", flag: "🇸🇬" },
    { country: "Ireland", image: "/countries/Ire.png", flag: "🇮🇪" },
    { country: "Mauritius", image: "/countries/MAUR.png", flag: "🇲🇺" },
    { country: "France", image: "/countries/FRA.png", flag: "🇫🇷" },
    { country: "Malta", image: "/countries/MAL.png", flag: "🇲🇹" },
    { country: "Latvia", image: "/countries/LAT.png", flag: "🇱🇻" },
    { country: "Denmark", image: "/countries/DEN.png", flag: "🇩🇰" },
    { country: "Finland", image: "/countries/FIN.png", flag: "🇫🇮" },
    { country: "Lithuania", image: "/countries/LUTH.png", flag: "🇱🇹" },
    { country: "Greece", image: "/countries/GRE.png", flag: "🇬🇷" },
    { country: "Hungary", image: "/countries/HUN.png", flag: "🇭🇺" },
  ];

  return (
    <section id="countries" className="py-12 bg-gray-50">
      <h2 className="text-2xl font-bold text-center mb-8">
        Choose Your Study Abroad Destination
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 px-8 max-w-7xl mx-auto">
        {destinations.map((destination, index) => (
          <div
            key={index}
            className="rounded-2xl shadow-md bg-white overflow-hidden hover:scale-105 transition-transform"
          >
            <div className="relative pt-[75%] w-full">
              <img
                src={destination.image}
                alt={`Study in ${destination.country}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">
                Study In {destination.country} 
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}