import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import FeaturedServices from "@/components/home/FeaturedServices";
import TrustSection from "@/components/home/TrustSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16 lg:pt-[72px]">
        <Hero />
        <Categories />
        <FeaturedServices />
        <TrustSection />
        <CTASection />
        <Footer />
      </div>
    </main>
  );
}
