"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Monitor,
  Palette,
  TrendingUp,
  Briefcase,
  DollarSign,
  Scale,
  Languages,
  Truck,
  GraduationCap,
  Building2,
} from "lucide-react";
import { categories } from "@/data/mock";

const iconMap: Record<string, React.ElementType> = {
  Monitor,
  Palette,
  TrendingUp,
  Briefcase,
  DollarSign,
  Scale,
  Languages,
  Truck,
  GraduationCap,
  Building2,
};

export default function Categories() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            Explore por Categoria
          </h2>
          <p className="mt-3 text-gray-500 text-base">
            Encontre o serviço ideal para o seu negócio
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat, index) => {
            const Icon = iconMap[cat.icon] || Monitor;
            return (
              <motion.div
                key={cat.id}
                 initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link
                href="/busca"
                className="group flex items-center gap-2.5 px-5 py-3 bg-white border border-gray-200 rounded-2xl hover:border-gray-300 hover:shadow-lg hover:shadow-gray-100 transition-all duration-300"
                >
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${cat.color}12` }}
                  >
                    <Icon className="w-4 h-4" style={{ color: cat.color }} />
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 whitespace-nowrap">
                    {cat.name}
                  </span>
                  <span className="text-xs text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full">
                    {cat.count}
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
