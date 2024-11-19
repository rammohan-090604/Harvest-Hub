import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen container mx-auto">
          <h1 className="text-4xl text-center mt-8">Welcome to Harvest Hub</h1>
          <p className="text-center mt-4">
            Empowering farmers through innovation and technology.
          </p>
      </div>
      <Footer />
    </>
  );
}
