"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Menu,
  X,
  MessageCircle,
  Bell,
  User,
  Shield,
  ChevronDown,
} from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-gray-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
            <div className="w-9 h-9 bg-gradient-to-br from-brand-500 to-brand-700 rounded-xl flex items-center justify-center shadow-lg shadow-brand-500/20">
              <span className="text-white font-bold text-sm">B2B</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-semibold tracking-tight text-gray-900">
                B2B <span className="text-brand-600">Angola</span>
              </span>
            </div>
          </Link>

          {/* Search Bar — Desktop */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div
              className={`relative w-full transition-all duration-300 ${
                isSearchFocused ? "scale-[1.02]" : ""
              }`}
            >
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Procurar serviços profissionais..."
                className={`w-full pl-11 pr-4 py-2.5 bg-gray-50/80 border rounded-2xl text-sm placeholder-gray-400 focus:outline-none transition-all duration-300 ${
                  isSearchFocused
                    ? "border-brand-300 bg-white shadow-lg shadow-brand-500/10 glow-border"
                    : "border-gray-200 hover:border-gray-300"
                }`}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
              {isSearchFocused && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    boxShadow: "0 0 30px rgba(12, 147, 231, 0.12)",
                  }}
                />
              )}
            </div>
          </div>

          {/* Right Nav */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              href="/busca"
              className="px-3 py-2 text-sm text-gray-600 hover:text-gray-900 rounded-xl hover:bg-gray-50 transition-all"
            >
              Explorar
            </Link>
            <Link
              href="/mensagens"
              className="relative p-2.5 text-gray-500 hover:text-gray-700 rounded-xl hover:bg-gray-50 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-brand-500 rounded-full" />
            </Link>
            <button className="relative p-2.5 text-gray-500 hover:text-gray-700 rounded-xl hover:bg-gray-50 transition-all">
              <Bell className="w-5 h-5" />
            </button>
            <div className="w-px h-6 bg-gray-200 mx-1" />
            <button className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-2xl hover:bg-gray-50 transition-all">
              <div className="w-8 h-8 bg-gradient-to-br from-brand-400 to-brand-600 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-xl hover:bg-gray-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-xl"
          >
            <div className="px-4 py-4 space-y-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Procurar serviços..."
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:border-brand-300 focus:ring-2 focus:ring-brand-100"
                />
              </div>
              <Link
                href="/busca"
                className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-gray-50 text-gray-700"
                onClick={() => setIsMenuOpen(false)}
              >
                <Search className="w-5 h-5 text-gray-400" />
                <span className="text-sm font-medium">Explorar</span>
              </Link>
              <Link
                href="/mensagens"
                className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-gray-50 text-gray-700"
                onClick={() => setIsMenuOpen(false)}
              >
                <MessageCircle className="w-5 h-5 text-gray-400" />
                <span className="text-sm font-medium">Mensagens</span>
                <span className="ml-auto bg-brand-500 text-white text-xs px-2 py-0.5 rounded-full">3</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-gray-50 text-gray-700"
                onClick={() => setIsMenuOpen(false)}
              >
                <Shield className="w-5 h-5 text-gray-400" />
                <span className="text-sm font-medium">Segurança & Confiança</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
