"use client";

import { services } from "@/data/mock";
import ServiceCard from "./ServiceCard";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FeaturedServices() {
  const featured = services.filter((s) => s.isDestaque);

  return (
    <section className="py-16 lg:py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
              Servicos em Destaque
            </h2>
            <p className="mt-2 text-gray-500">
              Os melhores profissionais selecionados para si
            </p>
          </div>
          <Link
            href="/busca"
            className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors"
          >
            Ver todos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        <div className="sm:hidden mt-8 text-center">
          <Link
            href="/busca"
            className="inline-flex items-center gap-1.5 px-6 py-3 bg-white border border-gray-200 rounded-2xl text-sm font-medium text-gray-700 hover:shadow-md transition-all"
          >
            Ver todos os servicos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
