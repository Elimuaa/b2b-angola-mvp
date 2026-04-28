"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  Clock,
  BadgeCheck,
  Shield,
  ChevronLeft,
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

export default function ServiceDetail() {
  const params = useParams();
  const service = services.find((s) => s.id === params.id) || services[0];
  const [selectedPackage, setSelectedPackage] = useState(1);
  const [orderStep, setOrderStep] = useState<OrderStep>("idle");
  const [selectedImage, setSelectedImage] = useState(0);

  const pkg = service.packages[selectedPackage];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-16 lg:pt-[72px]">
        {/* Breadcrumb */}
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
            {/* Left Column */}
            <div className="lg:col-span-2">
              {/* Gallery */}
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

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mb-4">
                {service.title}
              </h1>

              {/* Seller Info */}
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
                    {service.seller.isTopSeller && (
                      <span className="text-[10px] font-semibold px-2 py-0.5 bg-amber-50 text-amber-600 rounded-full border border-amber-100">
                        TOP SELLER
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500">{service.seller.title}</p>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="font-semibold">{service.rating}</span>
                  <span className="text-sm text-gray-400">({service.reviewCount})</span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Sobre este servico</h3>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {service.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-50 border border-gray-100 rounded-full text-xs text-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Seller Details */}
              <div className="p-6 bg-gray-50 rounded-2xl mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Sobre o Vendedor</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{service.seller.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">Desde {service.seller.memberSince}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{service.seller.responseTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{service.seller.completionRate}% completo</span>
                  </div>
                </div>
                {service.seller.isKycVerified && (
                  <div className="mt-4 flex items-center gap-2 px-3 py-2 bg-green-50 rounded-xl">
                    <UserCheck className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium text-green-700">Identidade Verificada (KYC)</span>
                  </div>
                )}
              </div>

              {/* Reviews */}
              {service.reviews.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Avaliacoes ({service.reviewCount})
                  </h3>
                  <div className="space-y-4">
                    {service.reviews.map((review) => (
                      <div key={review.id} className="p-4 border border-gray-100 rounded-2xl">
                        <div className="flex items-center gap-3 mb-2">
                          <img
                            src={review.avatar}
                            alt={review.user}
                            className="rounded-full bg-gray-100"
                            width={32}
                            height={32}
                            style={{ width: 32, height: 32, borderRadius: "50%" }}
                          />
                          <div>
                            <p className="text-sm font-medium text-gray-900">{review.user}</p>
                            <div className="flex items-center gap-1">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-3 h-3 ${
                                    i < review.rating
                                      ? "fill-amber-400 text-amber-400"
                                      : "text-gray-200"
                                  }`}
                                />
                              ))}
                              <span className="text-xs text-gray-400 ml-1">{review.date}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Pricing */}
            <div className="lg:col-span-1 mt-8 lg:mt-0">
              <div className="lg:sticky lg:top-24">
                {/* Package Tabs */}
                <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-xl shadow-gray-200/40">
                  <div className="flex border-b border-gray-100">
                    {service.packages.map((p, i) => (
                      <button
                        key={p.name}
                        onClick={() => setSelectedPackage(i)}
                        className={`flex-1 py-3.5 text-sm font-medium transition-all ${
                          i === selectedPackage
                            ? "text-brand-600 border-b-2 border-brand-500 bg-brand-50/30"
                            : "text-gray-500 hover:text-gray-700"
                        }`}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>

                  <div className="p-6">
                    <div className="flex items-baseline justify-between mb-5">
                      <span className="text-3xl font-bold text-gray-900">
                        {formatCurrency(pkg.price)}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 mb-5 text-sm text-gray-500">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        {pkg.deliveryDays} dias de entrega
                      </div>
                      <div className="flex items-center gap-1.5">
                        <RefreshCcw className="w-4 h-4" />
                        {pkg.revisions === -1 ? "inf" : pkg.revisions} revisoes
                      </div>
                    </div>

                    <ul className="space-y-2.5 mb-6">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2.5 text-sm">
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => setOrderStep("package")}
                      className="w-full py-3.5 bg-gradient-to-r from-brand-500 to-brand-600 text-white text-sm font-semibold rounded-2xl hover:from-brand-600 hover:to-brand-700 transition-all shadow-lg shadow-brand-500/25"
                    >
                      Encomendar - {formatCurrency(pkg.price)}
                    </button>

                    <Link
                      href="/mensagens"
                      className="flex items-center justify-center gap-2 w-full mt-3 py-3 border border-gray-200 text-sm font-medium text-gray-700 rounded-2xl hover:bg-gray-50 transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Contactar Vendedor
                    </Link>
                  </div>

                  {/* Trust badges */}
                  <div className="px-6 pb-6">
                    <div className="flex items-center gap-4 py-3 px-4 bg-gray-50 rounded-2xl">
                      <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <Shield className="w-3.5 h-3.5 text-green-500" />
                        Escrow
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <CreditCard className="w-3.5 h-3.5 text-purple-500" />
                        Multicaixa
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <BadgeCheck className="w-3.5 h-3.5 text-brand-500" />
                        Verificado
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Order Flow Modal */}
        <AnimatePresence>
          {orderStep !== "idle" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40 backdrop-blur-sm p-4"
              onClick={() => setOrderStep("idle")}
            >
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                transition={{ type: "spring", damping: 25 }}
                className="w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Steps Indicator */}
                <div className="flex items-center justify-between px-6 pt-6 pb-4">
                  <div className="flex items-center gap-2">
                    {["Pacote", "Pagamento", "Sucesso"].map((step, i) => {
                      const stepIndex = i;
                      const currentIndex = orderStep === "package" ? 0 : orderStep === "payment" ? 1 : 2;
                      return (
                        <div key={step} className="flex items-center gap-2">
                          <div
                            className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold transition-all ${
                              stepIndex <= currentIndex
                                ? "bg-brand-500 text-white"
                                : "bg-gray-100 text-gray-400"
                            }`}
                          >
                            {stepIndex < currentIndex ? <Check className="w-3.5 h-3.5" /> : stepIndex + 1}
                          </div>
                          <span
                            className={`text-xs font-medium hidden sm:block ${
                              stepIndex <= currentIndex ? "text-gray-900" : "text-gray-400"
                            }`}
                          >
                            {step}
                          </span>
                          {i < 2 && <div className={`w-6 h-px ${stepIndex < currentIndex ? "bg-brand-500" : "bg-gray-200"}`} />}
                        </div>
                      );
                    })}
                  </div>
                  <button
                    onClick={() => setOrderStep("idle")}
                    className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-400" />
                  </button>
                </div>

                <div className="px-6 pb-6">
                  {/* Step 1: Package Confirmation */}
                  {orderStep === "package" && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
                      <h3 className="text-xl font-bold text-gray-900 mb-1">Confirmar Pacote</h3>
                      <p className="text-sm text-gray-500 mb-6">Revise os detalhes da sua encomenda</p>

                      <div className="p-4 bg-gray-50 rounded-2xl mb-4">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-semibold text-gray-900">{pkg.label}</span>
                          <span className="text-lg font-bold text-gray-900">{formatCurrency(pkg.price)}</span>
                        </div>
                        <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                          <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {pkg.deliveryDays} dias</span>
                          <span className="flex items-center gap-1"><RefreshCcw className="w-3 h-3" /> {pkg.revisions === -1 ? "inf" : pkg.revisions} revisoes</span>
                        </div>
                        <ul className="space-y-1.5">
                          {pkg.features.map((f) => (
                            <li key={f} className="flex items-center gap-2 text-xs text-gray-600">
                              <Check className="w-3 h-3 text-green-500" />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center gap-2 p-3 bg-green-50 rounded-xl mb-6">
                        <Shield className="w-4 h-4 text-green-600" />
                        <span className="text-xs text-green-700 font-medium">Pagamento protegido com Escrow - o vendedor so recebe apos a sua confirmacao</span>
                      </div>

                      <button
                        onClick={() => setOrderStep("payment")}
                        className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-brand-500 to-brand-600 text-white text-sm font-semibold rounded-2xl hover:from-brand-600 hover:to-brand-700 transition-all"
                      >
                        Continuar para Pagamento
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </motion.div>
                  )}

                  {/* Step 2: Payment */}
                  {orderStep === "payment" && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
                      <h3 className="text-xl font-bold text-gray-900 mb-1">Metodo de Pagamento</h3>
                      <p className="text-sm text-gray-500 mb-6">Escolha como pretende pagar</p>

                      <div className="space-y-3 mb-6">
                        <label className="flex items-center gap-4 p-4 border-2 border-brand-500 bg-brand-50/30 rounded-2xl cursor-pointer">
                          <input type="radio" name="payment" defaultChecked className="w-4 h-4 text-brand-500" />
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <CreditCard className="w-5 h-5 text-brand-600" />
                              <span className="text-sm font-semibold text-gray-900">Multicaixa Express</span>
                              <span className="text-[10px] font-bold px-2 py-0.5 bg-brand-100 text-brand-700 rounded-full">RECOMENDADO</span>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">Pagamento instantaneo via telemovel</p>
                          </div>
                        </label>

                        <label className="flex items-center gap-4 p-4 border border-gray-200 rounded-2xl cursor-pointer hover:border-gray-300 transition-colors">
                          <input type="radio" name="payment" className="w-4 h-4 text-brand-500" />
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <CreditCard className="w-5 h-5 text-gray-400" />
                              <span className="text-sm font-semibold text-gray-900">Transferencia Bancaria</span>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">BAI, BFA, BIC, Standard Bank</p>
                          </div>
                        </label>

                        <label className="flex items-center gap-4 p-4 border border-gray-200 rounded-2xl cursor-pointer hover:border-gray-300 transition-colors">
                          <input type="radio" name="payment" className="w-4 h-4 text-brand-500" />
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <CreditCard className="w-5 h-5 text-gray-400" />
                              <span className="text-sm font-semibold text-gray-900">Cartao Visa / Mastercard</span>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">Pagamento internacional seguro</p>
                          </div>
                        </label>
                      </div>

                      <div className="p-4 bg-gray-50 rounded-2xl mb-6">
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-gray-500">Subtotal</span>
                          <span className="text-gray-900">{formatCurrency(pkg.price)}</span>
                        </div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-gray-500">Taxa de servico (5%)</span>
                          <span className="text-gray-900">{formatCurrency(pkg.price * 0.05)}</span>
                        </div>
                        <div className="flex justify-between text-base font-bold pt-2 border-t border-gray-200">
                          <span>Total</span>
                          <span>{formatCurrency(pkg.price * 1.05)}</span>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <button
                          onClick={() => setOrderStep("package")}
                          className="flex items-center gap-1 px-4 py-3 border border-gray-200 text-sm font-medium text-gray-700 rounded-2xl hover:bg-gray-50 transition-all"
                        >
                          <ArrowLeft className="w-4 h-4" />
                          Voltar
                        </button>
                        <button
                          onClick={() => setOrderStep("success")}
                          className="flex-1 py-3.5 bg-gradient-to-r from-brand-500 to-brand-600 text-white text-sm font-semibold rounded-2xl hover:from-brand-600 hover:to-brand-700 transition-all"
                        >
                          Confirmar Pagamento - {formatCurrency(pkg.price * 1.05)}
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Success */}
                  {orderStep === "success" && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-6"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", damping: 12, delay: 0.2 }}
                        className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5"
                      >
                        <CheckCircle2 className="w-8 h-8 text-green-600" />
                      </motion.div>

                      <h3 className="text-xl font-bold text-gray-900 mb-2">Encomenda Confirmada!</h3>
                      <p className="text-sm text-gray-500 mb-6 max-w-xs mx-auto">
                        O pagamento esta em escrow. O vendedor foi notificado e ira iniciar o trabalho em breve.
                      </p>

                      <div className="p-4 bg-gray-50 rounded-2xl mb-6 text-left">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-500">No. da Encomenda</span>
                          <span className="font-mono text-gray-900">#B2B-2026-0847</span>
                        </div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-500">Vendedor</span>
                          <span className="text-gray-900">{service.seller.name}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Entrega estimada</span>
                          <span className="text-gray-900">{pkg.deliveryDays} dias</span>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Link
                          href="/mensagens"
                          className="flex-1 flex items-center justify-center gap-2 py-3 border border-gray-200 text-sm font-medium text-gray-700 rounded-2xl hover:bg-gray-50 transition-all"
                        >
                          <MessageCircle className="w-4 h-4" />
                          Mensagem
                        </Link>
                        <button
                          onClick={() => setOrderStep("idle")}
                          className="flex-1 py-3 bg-gradient-to-r from-brand-500 to-brand-600 text-white text-sm font-semibold rounded-2xl hover:from-brand-600 hover:to-brand-700 transition-all"
                        >
                          Concluir
                        </button>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <Footer />
      </div>
    </main>
  );
}
