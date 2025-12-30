// import Image from "next/image";
// import ThemeToggle from "@/components/ThemeToggle";
import HomeCarousel from "@/components/HomeCarousel";
import BgAnimation from "@/components/BgAnimation";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <BgAnimation />
      <div className="relative z-10 space-y-8">
        <HomeCarousel />
      </div>
    </main>
  );
}
