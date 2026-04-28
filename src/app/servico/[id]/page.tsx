"use client";

import { useState, use } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  Clock,
  BadgeCheck,
  Shield,
  Heart,
  Share2,
  MapPin,
  Calendar,
  Zap,
  Check,
  CreditCard,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  MessageCircle,
  RefreshCcw,
  UserCheck,
  X,
} from "lucide-react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { services, formatCurrency } from "@/data/mock";

type OrderStep = "idle" | "package" | "payment" | "success";

export default function ServiceDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const service = services.find((s) => s.id === resolvedParams.id) || services[0];
  const [selectedPackage, setSelectedPackage] = useState(1);
  const [orderStep, setOrderStep] = useState<OrderStep>("idle");
  const [selectedImage, setSelectedImage] = useState(0);

  const pkg = service.packages[selectedPackage];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-16 lg:pt-[72px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-gray-600 transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/busca" className="hover:text-gray-600 transition-colors">Servicos</Link>
            <span>/</span>
            <span className="text-gray-600 truncate">{service.title}</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="lg:grid lg:grid-cols-3 lg:gap-10">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100 mb-3">
                  <img
                    src={service.gallery[selectedImage] || service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <button className="absolute top-4 right-4 p-2 glass rounded-xl hover:bg-white/90 transition-all">
                    <Heart className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="absolute top-4 right-14 p-2 glass rounded-xl hover:bg-white/90 transition-all">
                    <Share2 className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
                {service.gallery.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {service.gallery.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedImage(i)}
                        className={`flex-shrink-0 w-20 h-14 rounded-xl overflow-hidden border-2 transition-all ${
                          i === selectedImage ? "border-brand-500" : "border-transparent opacity-60 hover:opacity-100"
                        }`}
                      >
                        <img src={img} alt="" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mb-4">
                {service.title}
              </h1>

              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                <img
                  src={service.seller.avatar}
                  alt={service.seller.name}
                  className="rounded-2xl bg-gray-100"
                  width={48}
                  height={48}
                  style={{ width: 48, height: 48, borderRadius: 16 }}
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-900">{service.seller.name}</span>
                    {service.seller.isKycVerified && (
                      <BadgeCheck className="w-3.5 h-3.5 text-brand-500" />
                    )}
                  </div>
                  <p className="text-sm text-gray-500">{service.seller.title}</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Sobre este servico</h3>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {service.description}
                </p>
              </div>
            </div>

            <div className="lg:col-span-1 mt-8 lg:mt-0">
              <div className="lg:sticky lg:top-24">
                <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-xl shadow-gray-200/40">
                  <div className="p-6">
                    <span className="text-3xl font-bold text-gray-900">
                      {formatCurrency(pkg.price)}
                    </span>
                    <button
                      onClick={() => setOrderStep("package")}
                      className="w-full mt-6 py-3.5 bg-gradient-to-r from-brand-500 to-brand-600 text-white text-sm font-semibold rounded-2xl hover:from-brand-600 hover:to-brand-700 transition-all shadow-lg shadow-brand-500/25"
                    >
                      Encomendar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
