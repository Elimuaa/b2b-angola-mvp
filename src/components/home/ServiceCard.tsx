"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Star, Clock, BadgeCheck, Sparkles } from "lucide-react";
import { Service, formatCurrency } from "@/data/mock";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link href={`/servico/${service.id}`} className="group block">
        <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-gray-200/60 transition-all duration-500 hover:-translate-y-1">
          {/* Image */}
          <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {service.isDestaque && (
              <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-amber-600 shadow-sm">
                <Sparkles className="w-3 h-3" />
                Destaque
              </div>
            )}
            {service.isVerified && (
              <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 bg-brand-500/90 backdrop-blur-sm rounded-full text-xs font-medium text-white shadow-sm">
                <BadgeCheck className="w-3 h-3" />
                Verificado
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-5">
            {/* Seller */}
            <div className="flex items-center gap-2.5 mb-3">
              <img
                src={service.seller.avatar}
                alt={service.seller.name}
                className="rounded-full bg-gray-100"
                width={28}
                height={28}
                style={{ width: 28, height: 28, borderRadius: "50%" }}
              />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-gray-900 truncate">
                  {service.seller.name}
                </p>
                <p className="text-[11px] text-gray-400">{service.seller.title}</p>
              </div>
              {service.seller.isTopSeller && (
                <span className="text-[10px] font-semibold px-2 py-0.5 bg-amber-50 text-amber-600 rounded-full border border-amber-100">
                  TOP
                </span>
              )}
            </div>

            {/* Title */}
            <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 mb-3 group-hover:text-brand-600 transition-colors leading-snug">
              {service.title}
            </h3>

            {/* Rating */}
            <div className="flex items-center gap-1.5 mb-4">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="text-sm font-semibold text-gray-900">{service.rating}</span>
              <span className="text-xs text-gray-400">({service.reviewCount})</span>
              <span className="mx-1 text-gray-200">·</span>
              <Clock className="w-3 h-3 text-gray-400" />
              <span className="text-xs text-gray-400">{service.deliveryDays} dias</span>
            </div>

            {/* Price */}
            <div className="flex items-center justify-between pt-3 border-t border-gray-50">
              <span className="text-[11px] text-gray-400 uppercase tracking-wider">A partir de</span>
              <span className="text-base font-bold text-gray-900">
                {formatCurrency(service.startingPrice)}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
