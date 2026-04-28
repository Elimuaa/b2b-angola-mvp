"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, ArrowRight, Shield, Star, Users } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden hero-gradient">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-20 w-96 h-96 bg-brand-200/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-100/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-brand-50/50 to-transparent rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-full text-xs font-medium text-gray-600 shadow-sm mb-8">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              Plataforma #1 de Servicos B2B em Angola
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6"
          >
            Encontre os melhores{" "}
            <span className="text-gradient">profissionais</span>{" "}
            de Angola
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Conecte-se com freelancers verificados e empresas de confianca.
            Pagamento seguro via Multicaixa Express.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-2xl mx-auto mb-8"
          >
            <div
              className={`relative flex items-center transition-all duration-500 ${
                searchFocused
                  ? "transform scale-[1.02]"
                  : ""
              }`}
            >
              <div className={`relative flex-1 flex items-center bg-white rounded-2xl border transition-all duration-300 ${
                searchFocused
                  ? "border-brand-300 shadow-2xl shadow-brand-500/15"
                  : "border-gray-200 shadow-xl shadow-gray-200/50"
              }`}>
                <Search className="absolute left-5 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Ex: Desenvolvimento web, design de logo, marketing..."
                  className="w-full pl-13 pr-4 py-4 sm:py-5 bg-transparent text-base placeholder-gray-400 focus:outline-none rounded-2xl pl-14"
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                />
                <Link
                  href="/busca"
                  className="hidden sm:flex items-center gap-2 mr-2 px-6 py-2.5 bg-gradient-to-r from-brand-500 to-brand-600 text-white text-sm font-medium rounded-xl hover:from-brand-600 hover:to-brand-700 transition-all shadow-lg shadow-brand-500/25 whitespace-nowrap"
                >
                  Procurar
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              {searchFocused && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{ boxShadow: "0 0 60px rgba(12, 147, 231, 0.1)" }}
                />
              )}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-xs text-gray-400">
              <span>Popular:</span>
              {["Website", "Logo", "Marketing Digital", "Consultoria", "App Mobile"].map((tag) => (
                <Link
                  key={tag}
                  href="/busca"
                  className="px-3 py-1 bg-white/60 border border-gray-200/50 rounded-full hover:bg-white hover:border-gray-300 transition-all text-gray-500"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 pt-8"
          >
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Users className="w-4 h-4 text-brand-500" />
              <span><strong className="text-gray-900">2,500+</strong> Profissionais</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Star className="w-4 h-4 text-amber-400" />
              <span><strong className="text-gray-900">4.8</strong> Avaliacao Media</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Shield className="w-4 h-4 text-green-500" />
              <span><strong className="text-gray-900">100%</strong> Seguro</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
