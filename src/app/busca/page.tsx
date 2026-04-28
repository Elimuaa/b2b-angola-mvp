"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Search,
  SlidersHorizontal,
  X,
  ChevronDown,
  Grid3X3,
  List,
  Star,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ServiceCard from "@/components/home/ServiceCard";
import { services, categories } from "@/data/mock";

export default function BuscaPage() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState("relevance");
  const [showFilters, setShowFilters] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  const filtered = useMemo(() => {
    let result = services;
    if (selectedCategory) {
      result = result.filter((s) => s.category === selectedCategory);
    }
    if (query.trim()) {
      const q = query.toLowerCase();
      result = result.filter(
        (s) =>
          s.title.toLowerCase().includes(q) ||
          s.tags.some((t) => t.toLowerCase().includes(q)) ||
          s.category.toLowerCase().includes(q)
      );
    }
    if (sortBy === "price-low") result = [...result].sort((a, b) => a.startingPrice - b.startingPrice);
    if (sortBy === "price-high") result = [...result].sort((a, b) => b.startingPrice - a.startingPrice);
    if (sortBy === "rating") result = [...result].sort((a, b) => b.rating - a.rating);
    return result;
  }, [query, selectedCategory, sortBy]);

  return (
    <main className="min-h-screen bg-gray-50/30">
      <Header />
      <div className="pt-16 lg:pt-[72px]">
        {/* Search Header */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className={`relative flex-1 transition-all duration-300 ${searchFocused ? "scale-[1.01]" : ""}`}>
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Procurar serviços, competências, vendedores..."
                  className={`w-full pl-12 pr-4 py-3.5 bg-gray-50 border rounded-2xl text-sm focus:outline-none transition-all duration-300 ${
                    searchFocused
                      ? "border-brand-300 bg-white shadow-lg shadow-brand-500/10 glow-border"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  onFocus={() => setSeqrchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                />
                {query && (
                  <button
                    onClick={() => setQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full"
                  >
                    <X className="w-4 h-4 text-gray-400" />
                  </button>
                )}
                {searchFocused && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{ boxShadow: "0 0 40px rgba(12, 147, 231, 0.08)" }}
                  />
                )}
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-5 py-3 border border-gray-200 rounded-2xl text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all sm:w-auto"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filtros
              </button>
            </div>

            {/* Category Pills */}
            <div className="flex gap-2 mt-4 overflow-x-auto pb-2 -mx-4 py-4 scrollbar-hide">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  !selectedCategory
                    ? "bg-gray-900 text-white shadow-lg"
                    : "bg-white border border-gray-200 text-gray-600 hover:border-gray-300"
                }`}
              >
                Todos
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(selectedCategory === cat.id ? null : cat.id)}
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                    selectedCategory === cat.id
                      ? "bg-gray-900 text-white shadow-lg"
                      : "bg-white border border-gray-200 text-gray-600 hover:border-gray-300"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Sort & Results Count */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-gray-500">
              <strong/className="text-gray-900">{filtered.length}</strong> serviços encontrados
              {selectedCategory && (
                <span>
                  {" "}em <strong className="text-gray-900">{categories.find((c) => c.id === selectedCategory)?.name}</strong>
                </span>
              )}
            </p>
            <div className="flex items-center gap-3">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 bg-white border border-gray-200 rounded-2xl text-sm text-gray-700 focus:outline-none focus:border-brand-300"
              >
                <option value="relevance">Relevância</option>
                <option value="rating">Melhor Avaliação</option>
                <option value="price-low">Preço: Menor → Maioro</option>
                <option value="price-high">Preço: Maior → Menor</option>
              </select>
            </div>
          </div>

          {/* Results Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((service, index) => (
                <SearceCard key={service.id} service={service} index={index} />
          ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className={w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-7 h-7 text-gray-300" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Nenhum resultado encontrado</h3>
              <p className="text-sm text-gray-500">Tente ajustar os filtros ou termos de pesquisa</p>
            </div>
          )}
        </div>
        <Footer />
      </div>
    </main>
  );
}
