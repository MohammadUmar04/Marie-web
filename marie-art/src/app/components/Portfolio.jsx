"use client";

export default function Portfolio() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="bg-black py-4">
        <img src="https://cdna.artstation.com/p/users/covers/007/048/908/default/ca2eb6b491ac12287a57664c6d62d8c3.jpg?1727735238&quot" alt="" />
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Marie Arts</h1>
          <p className="mt-2">Portfolio - 117 artworks</p>
        </div>
      </header>

      {/* Portfolio Navigation */}
      <nav className="bg-gray-800 py-2">
        <div className="container mx-auto flex justify-around">
          <a href="#" className="px-4 py-2 hover:bg-gray-700 rounded">All</a>
          <a href="#" className="px-4 py-2 hover:bg-gray-700 rounded">3D Models</a>
          <a href="#" className="px-4 py-2 hover:bg-gray-700 rounded">2D Models</a>
          <a href="#" className="px-4 py-2 hover:bg-gray-700 rounded">Emotes</a>
          <a href="#" className="px-4 py-2 hover:bg-gray-700 rounded">Realistic Artworks</a>
          <a href="#" className="px-4 py-2 hover:bg-gray-700 rounded">Self Portraits</a>
        </div>
      </nav>

      {/* Artwork Gallery */}
      <main className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-grow">
        {/* Example Artwork Cards */}
        <div className="bg-gray-800 p-4 rounded transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQMYf9-yO96-m2KR2ka-0yt-RVHCwN6c3RYg&s" alt="Artwork 1" className="w-full h-autoccd  object-cover rounded" />
          <p className="mt-2">Artwork Title 1</p>
        </div>
        <div className="bg-gray-800 p-4 rounded transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7qNRVaNA9GYJxQEG1zxfZ4kT6kf1ERWLsTlqPvLH0sCb1cirnnFiPUDrW7IwP6rJbrsI&usqp=CAU" alt="Artwork 2" className="w-full h-auto object-cover rounded" />
          <p className="mt-2">Artwork Title 2</p>
        </div>
        <div className="bg-gray-800 p-4 rounded transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
          <img src="https://pbs.twimg.com/media/GOoT5raXEAAyhnq?format=jpg&name=large" alt="Artwork 3" className="w-full h-auto object-cover rounded" />
          <p className="mt-2">Artwork Title 3</p>
        </div>
      </main>

      {/* Fixed Tab Navigation at Bottom */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900 py-2 z-50">
        <div className="flex justify-center bg-white rounded-full p-1 mt-4 mx-auto max-w-xs shadow-lg">
          <a href="#" className="px-6 py-2 rounded-full font-medium bg-black text-white">Portfolio</a>
          <a href="#" className="px-6 py-2 rounded-full text-gray-800 hover:bg-gray-200">About</a>
          <a href="#" className="px-6 py-2 rounded-full text-gray-800 hover:bg-gray-200">Likes</a>
        </div>
      </div>
    </div>
  );
}
