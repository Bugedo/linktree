import Image from 'next/image';

export default function Home() {
  const links = [
    {
      title: 'OnlyFans',
      url: 'https://onlyfans.com/hairylola/c17',
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'YouTube',
      url: 'https://www.youtube.com/@HairyLolaVlogs',
      color: 'from-red-500 to-red-700',
    },
  ];

  return (
    <main
      className="min-h-screen relative bg-cover bg-center bg-no-repeat m-0 p-0 flex items-center justify-center"
      style={{
        backgroundImage: "url('/print.jpg')",
      }}
    >
      {/* Overlay para mejorar legibilidad */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="w-100 px-4 py-8 relative z-10 bg-black/30 backdrop-blur-sm rounded-3xl flex flex-col justify-center h-auto">
        {/* Header con avatar y info */}
        <div className="text-center mb-8">
          <div className="relative inline-block mb-6">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-600 p-1">
              <div className="w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/avatar.png"
                  alt="HAIRY LOLA"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover scale-110"
                />
              </div>
            </div>
          </div>

          <h1 className="text-3xl font-bold text-white mb-2 drop-shadow-2xl">HAIRY LOLA</h1>
        </div>

        {/* Enlaces */}
        <div className="w-90 mx-auto space-y-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`block w-full p-4 rounded-2xl bg-gradient-to-r ${link.color} 
                         text-white font-semibold text-center transition-all duration-300 
                         hover:scale-105 hover:shadow-2xl transform hover:-translate-y-1
                         border border-white/20 backdrop-blur-sm`}
            >
              <div className="flex items-center justify-center">
                <span className="text-lg font-semibold">{link.title}</span>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-12"></div>
      </div>
    </main>
  );
}
