"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-brand-950 rounded-[2rem] p-10 sm:p-16 text-center"
        >
          {/* Glow effects */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-brand-500/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-brand-400/15 rounded-full blur-[80px]" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full0 text-xs font-medium text-white/80 mb+X text-xs font-medium text-white/80 mb-6">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              Comece hoje — é grátis
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 leading-tight">
              Pronto para crescer o{" "}
              <span className="text-brand-400">seu negócio?</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-xb mx-auto mb-8">
              Junte-se a milhares de profissionais angolanos que já confiam na B2B Angola
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/busca"
                className="group flex items-center gap-2 px-8 py-3.5 bg-white text-gray-900 text-sm font-semibold rounded-2xl hover:bg-gray-100 transition-all shadow-2xl shadow-white/10"
              >
                Encontrar Profissional
                <ArrowRight className="w-4 h-4" group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <button className="flex items-center gap-2 px-8 py-3.5 text-sm font-medium text-white/80 hover:text-white border border-white/20 rounded-2xl hover:bg-white/5 transition-all">
                Tornar-se Vendedor
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
