"use client";

import { motion } from "framer-motion";
import { Shield, CreditCard, UserCheck, Lock, CheckCircle2 } from "lucide-react";

const trustFeatures = [
  {
    icon: Shield,
    title: "Escrow Protection",
    description: "O seu pagamento fica protegido ate confirmar a entrega do servico. Garantia total.",
    color: "green",
    badge: "Ativo",
  },
  {
    icon: UserCheck,
    title: "Verificacao KYC",
    description: "Todos os vendedores passam por verificacao de identidade e credenciais profissionais.",
    color: "blue",
    badge: "Verificado",
  },
  {
    icon: CreditCard,
    title: "Multicaixa Express",
    description: "Pague com seguranca atraves do Multicaixa Express, o metodo de pagamento preferido em Angola.",
    color: "purple",
    badge: "Integrado",
  },
  {
    icon: Lock,
    title: "Dados Encriptados",
    description: "Comunicacoes e dados pessoais protegidos com encriptacao de nivel bancario.",
    color: "orange",
    badge: "SSL 256-bit",
  },
];

const colorMap: Record<string, { bg: string; icon: string; badge: string }> = {
  green: { bg: "bg-green-50", icon: "text-green-600", badge: "bg-green-100 text-green-700" },
  blue: { bg: "bg-blue-50", icon: "text-blue-600", badge: "bg-blue-100 text-blue-700" },
  purple: { bg: "bg-purple-50", icon: "text-purple-600", badge: "bg-purple-100 text-purple-700" },
  orange: { bg: "bg-orange-50", icon: "text-orange-600", badge: "bg-orange-100 text-orange-700" },
};

export default function TrustSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-50 rounded-full text-xs font-medium text-green-700 mb-4">
              <Shield className="w-3.5 h-3.5" />
              Confianca & Seguranca
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
              Negocie com total seguranca
            </h2>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto">
              Protegemos cada transacao com tecnologia de ponta e verificacao rigorosa
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustFeatures.map((feature, index) => {
            const colors = colorMap[feature.color];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group p-6 bg-white border border-gray-100 rounded-3xl hover:shadow-xl hover:shadow-gray-100/80 transition-all duration-500"
              >
                <div className={`w-12 h-12 ${colors.bg} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`w-6 h-6 ${colors.icon}`} />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-sm font-semibold text-gray-900">{feature.title}</h3>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${colors.badge}`}>
                    {feature.badge}
                  </span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
