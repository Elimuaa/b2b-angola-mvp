export interface Service {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  category: string;
  subcategory: string;
  seller: Seller;
  rating: number;
  reviewCount: number;
  startingPrice: number;
  currency: string;
  deliveryDays: number;
  image: string;
  gallery: string[];
  tags: string[];
  isVerified: boolean;
  isDestaque: boolean;
  packages: Package[];
  reviews: Review[];
}

export interface Seller {
  id: string;
  name: string;
  avatar: string;
  title: string;
  location: string;
  memberSince: string;
  responseTime: string;
  completionRate: number;
  isKycVerified: boolean;
  isTopSeller: boolean;
  totalEarnings: string;
}

export interface Package {
  name: string;
  label: string;
  price: number;
  deliveryDays: number;
  revisions: number;
  features: string[];
}

export interface Review {
  id: string;
  user: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
  color: string;
}

export interface Message {
  id: string;
  senderId: string;
  text: string;
  timestamp: string;
  isRead: boolean;
}

export interface Conversation {
  id: string;
  participant: {
    name: string;
    avatar: string;
    isOnline: boolean;
    lastSeen: string;
  };
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  messages: Message[];
}

export const categories: Category[] = [
  { id: "tech", name: "Tecnologia", icon: "Monitor", count: 342, color: "#0c93e7" },
  { id: "design", name: "Design", icon: "Palette", count: 218, color: "#8b5cf6" },
  { id: "marketing", name: "Marketing", icon: "TrendingUp", count: 156, color: "#f59e0b" },
  { id: "consultoria", name: "Consultoria", icon: "Briefcase", count: 124, color: "#10b981" },
  { id: "financas", name: "Financas", icon: "DollarSign", count: 98, color: "#ef4444" },
  { id: "juridico", name: "Juridico", icon: "Scale", count: 87, color: "#6366f1" },
  { id: "traducao", name: "Traducao", icon: "Languages", count: 76, color: "#ec4899" },
  { id: "logistica", name: "Logistica", icon: "Truck", count: 65, color: "#14b8a6" },
  { id: "formacao", name: "Formacao", icon: "GraduationCap", count: 143, color: "#f97316" },
  { id: "construcao", name: "Construcao", icon: "Building2", count: 91, color: "#78716c" },
];

export const services: Service[] = [
  {
    id: "1",
    title: "Desenvolvimento de Website Profissional com Next.js",
    description: "Crio websites modernos, rapidos e responsivos utilizando as ultimas tecnologias web. Inclui design personalizado, otimizacao SEO, integracao com APIs e painel administrativo. Experiencia comprovada com mais de 150 projetos entregues para empresas angolanas e internacionais.\n\nO que esta incluido:\n- Design UI/UX personalizado\n- Desenvolvimento frontend e backend\n- Responsivo para todos os dispositivos\n- Otimizacao de performance e SEO\n- Integracao com sistemas de pagamento angolanos\n- 30 dias de suporte pos-entrega",
    shortDescription: "Websites modernos e responsivos com Next.js para o seu negocio",
    category: "tech",
    subcategory: "Desenvolvimento Web",
    seller: {
      id: "s1",
      name: "Joao Sebastiao",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=joao&backgroundColor=b6e3f4",
      title: "Full-Stack Developer Senior",
      location: "Luanda, Angola",
      memberSince: "2023",
      responseTime: "< 1 hora",
      completionRate: 99,
      isKycVerified: true,
      isTopSeller: true,
      totalEarnings: "15M+ AOA",
    },
    rating: 4.9,
    reviewCount: 187,
    startingPrice: 150000,
    currency: "AOA",
    deliveryDays: 14,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    ],
    tags: ["Next.js", "React", "Website", "E-commerce"],
    isVerified: true,
    isDestaque: true,
    packages: [
      {
        name: "basico",
        label: "Basico",
        price: 150000,
        deliveryDays: 14,
        revisions: 2,
        features: ["Landing page", "Design responsivo", "SEO basico", "1 idioma"],
      },
      {
        name: "standard",
        label: "Standard",
        price: 350000,
        deliveryDays: 21,
        revisions: 5,
        features: ["Ate 5 paginas", "Design responsivo", "SEO avancado", "Blog", "2 idiomas", "Painel admin"],
      },
      {
        name: "premium",
        label: "Premium",
        price: 750000,
        deliveryDays: 30,
        revisions: -1,
        features: ["Paginas ilimitadas", "E-commerce", "SEO avancado", "Blog", "Multi-idioma", "Painel admin", "API integracao", "Multicaixa Express"],
      },
    ],
    reviews: [
      { id: "r1", user: "Ana Maria", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ana", rating: 5, comment: "Excelente trabalho! O website ficou incrivel e o Joao foi muito profissional.", date: "2025-03-15" },
      { id: "r2", user: "Pedro Costa", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=pedro", rating: 5, comment: "Entrega rapida e qualidade superior. Recomendo!", date: "2025-03-10" },
      { id: "r3", user: "Maria Fernanda", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=maria", rating: 4, comment: "Muito bom servico. Apenas demorou um pouco mais que o esperado.", date: "2025-02-28" },
    ],
  },
  {
    id: "2",
    title: "Identidade Visual Completa para Empresas",
    description: "Desenvolvo identidades visuais completas e memoraveis que comunicam a essencia do seu negocio. Desde logotipos ate manuais de marca completos.",
    shortDescription: "Branding profissional que destaca o seu negocio no mercado angolano",
    category: "design",
    subcategory: "Branding",
    seller: {
      id: "s2",
      name: "Mariana Santos",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=mariana&backgroundColor=ffd5dc",
      title: "Brand Designer & Diretora Criativa",
      location: "Luanda, Angola",
      memberSince: "2022",
      responseTime: "< 2 horas",
      completionRate: 98,
      isKycVerified: true,
      isTopSeller: true,
      totalEarnings: "12M+ AOA",
    },
    rating: 4.8,
    reviewCount: 143,
    startingPrice: 85000,
    currency: "AOA",
    deliveryDays: 7,
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80",
    ],
    tags: ["Logo", "Branding", "Identidade Visual", "Design"],
    isVerified: true,
    isDestaque: true,
    packages: [
      { name: "basico", label: "Basico", price: 85000, deliveryDays: 7, revisions: 3, features: ["Logo principal", "2 variacoes", "Ficheiros PNG/SVG"] },
      { name: "standard", label: "Standard", price: 200000, deliveryDays: 14, revisions: 5, features: ["Logo principal", "5 variacoes", "Cartao de visita", "Papelaria", "Todos os formatos"] },
      { name: "premium", label: "Premium", price: 450000, deliveryDays: 21, revisions: -1, features: ["Identidade completa", "Manual de marca", "Social media kit", "Templates", "Suporte 60 dias"] },
    ],
    reviews: [
      { id: "r4", user: "Carlos Silva", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=carlos", rating: 5, comment: "A Mariana transformou a imagem da minha empresa. Incrivel!", date: "2025-03-20" },
    ],
  },
  {
    id: "3",
    title: "Gestao de Redes Sociais & Marketing Digital",
    description: "Gerenciamento completo das suas redes sociais com estrategia personalizada para o mercado angolano.",
    shortDescription: "Aumente a presenca digital do seu negocio em Angola",
    category: "marketing",
    subcategory: "Social Media",
    seller: {
      id: "s3",
      name: "Antonio Manuel",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=antonio&backgroundColor=c0aede",
      title: "Digital Marketing Strategist",
      location: "Benguela, Angola",
      memberSince: "2023",
      responseTime: "< 30 min",
      completionRate: 97,
      isKycVerified: true,
      isTopSeller: false,
      totalEarnings: "8M+ AOA",
    },
    rating: 4.7,
    reviewCount: 98,
    startingPrice: 65000,
    currency: "AOA",
    deliveryDays: 3,
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
    ],
    tags: ["Social Media", "Marketing", "Instagram", "Facebook"],
    isVerified: true,
    isDestaque: true,
    packages: [
      { name: "basico", label: "Basico", price: 65000, deliveryDays: 3, revisions: 1, features: ["1 rede social", "12 posts/mes", "Criacao de conteudo"] },
      { name: "standard", label: "Standard", price: 150000, deliveryDays: 5, revisions: 3, features: ["3 redes sociais", "20 posts/mes", "Stories", "Relatorio mensal"] },
      { name: "premium", label: "Premium", price: 300000, deliveryDays: 7, revisions: -1, features: ["Todas as redes", "30 posts/mes", "Stories diarios", "Ads management", "Relatorio semanal", "Consultoria"] },
    ],
    reviews: [],
  },
  {
    id: "4",
    title: "Consultoria Empresarial e Plano de Negocios",
    description: "Ajudo empresas a estruturar planos de negocio solidos, adequados à realidade economica angolana.",
    shortDescription: "Planeamento estrategico para negocios em Angola",
    category: "consultoria",
    subcategory: "Estrategia",
    seller: {
      id: "s4",
      name: "Teresa Domingos",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=teresa&backgroundColor=d1f4d1",
      title: "Consultora de Negocios MBA",
      location: "Luanda, Angola",
      memberSince: "2022",
      responseTime: "< 3 horas",
      completionRate: 100,
      isKycVerified: true,
      isTopSeller: true,
      totalEarnings: "20M+ AOA",
    },
    rating: 5.0,
    reviewCount: 67,
    startingPrice: 120000,
    currency: "AOA",
    deliveryDays: 10,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    ],
    tags: ["Consultoria", "Plano de Negocios", "Estrategia", "Empreendedorismo"],
    isVerified: true,
    isDestaque: true,
    packages: [
      { name: "basico", label: "Basico", price: 120000, deliveryDays: 10, revisions: 2, features: ["Analise SWOT", "Plano basico", "1 reuniao"] },
      { name: "standard", label: "Standard", price: 280000, deliveryDays: 15, revisions: 4, features: ["Plano completo", "Estudo de mercado", "3 reunioes", "Projecoes financeiras"] },
      { name: "premium", label: "Premium", price: 600000, deliveryDays: 30, revisions: -1, features: ["Plano executivo", "Estudo completo", "Reunioes ilimitadas", "Pitch deck", "Acompanhamento 90 dias"] },
    ],
    reviews: [
      { id: "r5", user: "Roberto Neto", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=roberto", rating: 5, comment: "A Teresa e excecional. O plano de negocios foi aprovado pelo banco de imediato.", date: "2025-03-18" },
    ],
  },
  {
    id: "5",
    title: "Contabilidade e Assessoria Fiscal para PMEs",
    description: "Servicos de contabilidade e assessoria fiscal completa para pequenas e medias empresas angolanas.",
    shortDescription: "Contabilidade profissional e assessoria fiscal em Angola",
    category: "financas",
    subcategory: "Contabilidade",
    seller: {
      id: "s5",
      name: "Francisco Lopes",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=francisco&backgroundColor=ffeaa7",
      title: "Contabilista Certificado",
      location: "Huambo, Angola",
      memberSince: "2023",
      responseTime: "< 2 horas",
      completionRate: 96,
      isKycVerified: true,
      isTopSeller: false,
      totalEarnings: "6M+ AOA",
    },
    rating: 4.6,
    reviewCount: 54,
    startingPrice: 45000,
    currency: "AOA",
    deliveryDays: 5,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    gallery: [],
    tags: ["Contabilidade", "Fiscal", "IVA", "Impostos"],
    isVerified: true,
    isDestaque: false,
    packages: [
      { name: "basico", label: "Basico", price: 45000, deliveryDays: 5, revisions: 1, features: ["Declaracao IVA", "Reconciliacao bancaria"] },
      { name: "standard", label: "Standard", price: 120000, deliveryDays: 10, revisions: 3, features: ["Contabilidade mensal", "IVA", "IRT", "Relatorios"] },
      { name: "premium", label: "Premium", price: 250000, deliveryDays: 15, revisions: -1, features: ["Contabilidade completa", "Todos os impostos", "Relatorios mensais", "Consultoria fiscal", "Suporte permanente"] },
    ],
    reviews: [],
  },
  {
    id: "6",
    title: "Aplicacao Mobile Nativa para iOS e Android",
    description: "Desenvolvimento de aplicacoes mobile nativas de alta performance para o mercado angolano.",
    shortDescription: "Apps mobile nativos com integracao Multicaixa Express",
    category: "tech",
    subcategory: "Mobile",
    seller: {
      id: "s6",
      name: "David Fernandes",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=david&backgroundColor=b6e3f4",
      title: "Mobile Developer React Native",
      location: "Luanda, Angola",
      memberSince: "2024",
      responseTime: "< 1 hora",
      completionRate: 95,
      isKycVerified: true,
      isTopSeller: false,
      totalEarnings: "4M+ AOA",
    },
    rating: 4.8,
    reviewCount: 32,
    startingPrice: 250000,
    currency: "AOA",
    deliveryDays: 21,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    gallery: [],
    tags: ["Mobile", "React Native", "iOS", "Android", "App"],
    isVerified: true,
    isDestaque: true,
    packages: [
      { name: "basico", label: "Basico", price: 250000, deliveryDays: 21, revisions: 2, features: ["1 plataforma", "UI basico", "5 telas", "API integracao"] },
      { name: "standard", label: "Standard", price: 500000, deliveryDays: 30, revisions: 5, features: ["iOS + Android", "UI premium", "15 telas", "Push notifications", "Analytics"] },
      { name: "premium", label: "Premium", price: 1000000, deliveryDays: 45, revisions: -1, features: ["iOS + Android", "UI premium", "Telas ilimitadas", "Backend completo", "Multicaixa", "App Store deploy"] },
    ],
    reviews: [],
  },
];

export const conversations: Conversation[] = [
  {
    id: "c1",
    participant: {
      name: "Joao Sebastiao",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=joao&backgroundColor=b6e3f4",
      isOnline: true,
      lastSeen: "Agora",
    },
    lastMessage: "Sim, posso incluir a integracao com Multicaixa Express!",
    lastMessageTime: "14:32",
    unreadCount: 2,
    messages: [
      { id: "m1", senderId: "me", text: "Ola Joao! Vi o seu servico de desenvolvimento web e gostaria de saber mais.", timestamp: "14:20", isRead: true },
      { id: "m2", senderId: "s1", text: "Ola! Claro, terei todo o gosto em ajudar. Qual e o seu projeto?", timestamp: "14:22", isRead: true },
      { id: "m3", senderId: "me", text: "Preciso de um e-commerce para a minha empresa. Com pagamento via Multicaixa Express.", timestamp: "14:25", isRead: true },
      { id: "m4", senderId: "s1", text: "Excelente! Tenho bastante experiencia com e-commerce e integracao Multicaixa.", timestamp: "14:28", isRead: true },
      { id: "m5", senderId: "s1", text: "Sim, posso incluir a integracao com Multicaixa Express!", timestamp: "14:32", isRead: false },
    ],
  },
  {
    id: "c2",
    participant: {
      name: "Mariana Santos",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=mariana&backgroundColor=ffd5dc",
      isOnline: false,
      lastSeen: "Ha 2 horas",
    },
    lastMessage: "Enviei as 3 propostas de logo. Qual prefere?",
    lastMessageTime: "12:15",
    unreadCount: 1,
    messages: [
      { id: "m6", senderId: "me", text: "Mariana, como esta o progresso do logo?", timestamp: "11:00", isRead: true },
      { id: "m7", senderId: "s2", text: "Esta quase pronto! Estou a finalizar as variacoes.", timestamp: "11:30", isRead: true },
      { id: "m8", senderId: "s2", text: "Enviei as 3 propostas de logo. Qual prefere?", timestamp: "12:15", isRead: false },
    ],
  },
  {
    id: "c3",
    participant: {
      name: "Teresa Domingos",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=teresa&backgroundColor=d1f4d1",
      isOnline: true,
      lastSeen: "Agora",
    },
    lastMessage: "O plano de negocios esta aprovado. Parabens!",
    lastMessageTime: "Ontem",
    unreadCount: 0,
    messages: [
      { id: "m9", senderId: "s4", text: "O plano de negocios esta aprovado. Parabens!", timestamp: "Ontem", isRead: true },
    ],
  },
];

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat("pt-AO", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount) + " Kz";
};
