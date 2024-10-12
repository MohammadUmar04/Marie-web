import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Portfolio from './components/Portfolio';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4">
          <h1 className="text-2xl font-bold">Portfolio</h1>
          {/* Rendering the Portfolio component */}
          <Portfolio />
        </main>
      </div>
    </>
  );
}
