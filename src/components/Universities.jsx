// components/StudyDestinations.jsx
export default function Universities() {
    const destinations = [
      {
        country: "USA",
        image: "/countries/USA.png",
        flag: "🇨🇦",
      },
      {
        country: "UK",
        image: "/u2.png",
        flag: "🇬🇧",
      },
      {
        country: "US",
        image: "/u3.png",
        flag: "🇺🇸",
      },
      {
        country: "Australia",
        image: "/u4.png",
        flag: "🇦🇺",
      },
      {
        country: "Ireland",
        image: "/u5.png",
        flag: "🇮🇪",
      },
      {
        country: "Ireland",
        image: "/u5.png",
        flag: "🇮🇪",
      },
      {
        country: "Ireland",
        image: "/u5.png",
        flag: "🇮🇪",
      },
      {
        country: "Ireland",
        image: "/u5.png",
        flag: "🇮🇪",
      },
      {
        country: "Ireland",
        image: "/u5.png",
        flag: "🇮🇪",
      },
      {
        country: "Ireland",
        image: "/u5.png",
        flag: "🇮🇪",
      },
      {
        country: "Ireland",
        image: "/u5.png",
        flag: "🇮🇪",
      },
      {
        country: "Ireland",
        image: "/u5.png",
        flag: "🇮🇪",
      },
      {
        country: "Ireland",
        image: "/u5.png",
        flag: "🇮🇪",
      },
      {
        country: "Ireland",
        image: "/u5.png",
        flag: "🇮🇪",
      },
      {
        country: "Ireland",
        image: "/u5.png",
        flag: "🇮🇪",
      },
      {
        country: "Ireland",
        image: "/u5.png",
        flag: "🇮🇪",
      },
    ];
  
    return (
      <section className="py-12 bg-gray-50">
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
  