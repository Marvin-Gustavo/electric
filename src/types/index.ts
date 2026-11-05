export type ZoneSucre =
  | "Zona Azari"
  | "Mesa Verde"
  | "San Roque"
  | "Zona Central"
  | "Planta Diesel"
  | "El Tejar"
  | "Parque Bolívar"
  | "Rumi Rumi"
  | "Lajastambo"
  | "Poconas"
  | "Garcilazo";

export type Specialty =
  | "Motores Trifásicos"
  | "Automatización y PLC"
  | "Tableros de Distribución"
  | "Variadores de Frecuencia"
  | "Factor de Potencia"
  | "Subestaciones y Transformadores"
  | "Normativa NB 777"
  | "Bobinado de Motores"
  | "Termografía y Mantenimiento"
  | "Sistemas SCADA e IoT"
  | "Energía Solar Industrial"
  | "Grupos Electrógenos";

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
  company?: string;
}

export interface Electrician {
  id: string;
  name: string;
  title: string;
  avatar: string;
  experienceYears: number;
  specialty: Specialty;
  secondarySpecialties: string[];
  isCeaAzariCertified: boolean;
  azariGraduationYear?: number;
  azariRegistryCode?: string;
  zone: ZoneSucre;
  address: string;
  phone: string;
  whatsapp: string;
  hourlyRateBs: number;
  rating: number;
  reviewCount: number;
  bio: string;
  featuredProjects: string[];
  skills: string[];
  reviews: Review[];
  verifiedNorms: string[];
}

export type ProductCategory =
  | "Conductores"
  | "Protecciones y Termomagnéticos"
  | "Motores y Variadores"
  | "Herramientas e Instrumentación"
  | "Sensores y Contactores"
  | "Tableros y Gabinetes"
  | "Iluminación Industrial";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  brand: string;
  priceBs: number;
  originalPriceBs?: number;
  storeName: string;
  storeZone: ZoneSucre;
  storePhone: string;
  image: string;
  stock: number;
  rating: number;
  reviewCount: number;
  specs: { label: string; value: string }[];
  description: string;
  isFeatured?: boolean;
  warranty: string;
  codeSKU: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface ForumReply {
  id: string;
  author: string;
  authorRole: string;
  isCeaAzari: boolean;
  avatar: string;
  content: string;
  date: string;
  upvotes: number;
  isSolution: boolean;
}

export interface ForumThread {
  id: string;
  title: string;
  slug: string;
  content: string;
  author: string;
  authorRole: string;
  isCeaAzari: boolean;
  authorAvatar: string;
  date: string;
  tags: string[];
  upvotes: number;
  userVoted?: "up" | "down" | null;
  replies: ForumReply[];
  isSolved: boolean;
  views: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: "cliente" | "electricista" | "estudiante_azari" | "docente_azari";
  avatar: string;
  organization?: string;
  isCeaAzariCertified?: boolean;
}

export interface ToastNotification {
  id: string;
  title: string;
  message: string;
  type: "success" | "info" | "warning";
}

