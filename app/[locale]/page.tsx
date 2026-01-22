// import Image from "next/image";
// import ThemeToggle from "@/components/ThemeToggle";
import HomeCarousel from "@/components/HomeCarousel";
import BgAnimation from "@/components/BgAnimation";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-sky-200 via-blue-100 to-indigo-200 dark:from-slate-950 dark:via-slate-900 dark:to-black">
      <BgAnimation />
      <div className="relative z-30">
        <HomeCarousel />
      </div>
    </main>
  );
}
