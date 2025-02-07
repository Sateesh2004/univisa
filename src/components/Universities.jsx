// components/StudyDestinations.jsx
export default function Universities() {
  const destinations = [
    {
      country: "The USA",
      image: "/countries/USA.png",
      flag: "🇺🇸", // Corrected flag
    },
    {
      country: "The UK",
      image: "/countries/UK.png",
      flag: "🇬🇧",
    },
    {
      country: "Canada", // Corrected spelling and capitalization
      image: "/countries/CANADA.png",
      flag: "🇨🇦", // Corrected flag
    },
    {
      country: "Australia",
      image: "/countries/AUS.png",
      flag: "🇦🇺",
    },
    {
      country: "Germany",
      image: "/countries/GER.png",
      flag: "🇩🇪", // Corrected flag
    },
    {
      country: "Singapore",
      image: "/countries/SINGA.png",
      flag: "🇸🇬", // Corrected flag
    },
    {
      country: "Ireland",
      image: "/countries/Ire.png", // Corrected image path
      flag: "🇮🇪",
    },
    {
      country: "Mauritius",
      image: "/countries/MAUR.png", // Corrected image path
      flag: "🇲🇺", // Corrected flag
    },
    {
      country: "France", // Corrected spelling and capitalization
      image: "/countries/FRA.png", // Corrected image path
      flag: "🇫🇷", // Corrected flag
    },
    {
      country: "Malta",
      image: "/countries/MAL.png", // Corrected image path
      flag: "🇲🇹", // Corrected flag
    },
    {
      country: "Latvia",
      image: "/countries/LAT.png", // Corrected image path
      flag: "🇱🇻", // Corrected flag
    },
    {
      country: "Denmark",
      image: "/countries/DEN.png", // Corrected image path
      flag: "🇩🇰", // Corrected flag
    },
    {
      country: "Finland",
      image: "/countries/FIN.png", // Corrected image path
      flag: "🇫🇮", // Corrected flag
    },
    {
      country: "Lithuania",
      image: "/countries/LUTH.png", // Corrected image path
      flag: "🇱🇹", // Corrected flag
    },
    {
      country: "Greece",
      image: "/countries/GRE.png", // Corrected image path
      flag: "🇬🇷", // Corrected flag
    },
    {
      country: "Hungary", // Corrected spelling
      image: "/countries/HUN.png", // Corrected image path
      flag: "🇭🇺", // Corrected flag
    },
  ];
  
    return (
      <section id="countries" className="py-12 bg-gray-50">
        <h2 className="text-2xl font-bold text-center mb-8">
          Choose Your Study Abroad Destination
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 px-8 max-w-7xl mx-auto">
          {destinations.map((destination,index) => (
            <div
              key={index}
              className="rounded-2xl shadow-md bg-white overflow-hidden hover:scale-105 transition-transform"
            >
              <img
                src={destination.image}
                alt={`Study in ${destination.country}`}
                className="h-44 w-full object-cover"
              />
              <div className="p-4">
                <div className="flex items-center gap-2">
                  {/* <span className="text-xl">{destination.flag}</span> */}
                  <h3 className="text-lg font-semibold">
                    Study In {destination.country}
                  </h3>
                </div>
                {/* <a
                  href="#"
                  className="text-blue-600 mt-2 block hover:underline flex items-center"
                >
                  Explore →
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </section>
      

    );
  }
  