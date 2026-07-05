import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Lang = "en" | "pt";

type Dict = Record<string, string>;

const en: Dict = {
  // nav
  "nav.home": "Home",
  "nav.services": "Services",
  "nav.barbers": "Barbers",
  "nav.gallery": "Gallery",
  "nav.location": "Location",
  "nav.book": "Book Now",
  // home hero
  "home.eyebrow": "Orlando, Florida",
  "home.title.a": "Premium",
  "home.title.b": "Barbering",
  "home.title.c": "in Orlando",
  "home.hero.desc":
    "Professional barber services in Orlando with a clean, comfortable atmosphere and experienced barbers — precision cuts, beard grooming, and personalized service.",
  "home.cta.book": "Book Appointment",
  "home.cta.services": "View Services",
  "home.reviews": "reviews",
  // about
  "home.about.eyebrow": "About Master Barber USA",
  "home.about.title": "More Than a Haircut",
  "home.about.desc":
    "Master Barber USA, located in Orlando, Florida, delivers professional barber services in a clean, comfortable atmosphere with experienced barbers. From modern fades to classic cuts and beard grooming, every service is tailored to the client — every detail matters, from the moment you walk in to the final touch.",
  "home.about.tagline": "Precision. Style. Confidence.",
  "home.about.standard": "— The Master Barber USA standard",
  // services preview
  "home.services.eyebrow": "What We Offer",
  "home.services.title": "Services",
  "home.services.all": "All Services",
  "home.services.signature": "Signature",
  "home.services.full.title": "Full Grooming Experience",
  "home.services.full.desc":
    "Haircut, beard grooming, and detail work. The complete TRINQ ritual.",
  "home.services.fade.title": "Skin Fade",
  "home.services.fade.desc": "Sharp & seamless",
  "home.services.beard.title": "Beard Trim",
  "home.services.beard.desc": "Clean & defined",
  // reviews
  "home.reviews.eyebrow": "What Clients Say",
  "home.review.1": "Clean shop, sharp cut, and great attention to detail.",
  "home.review.2": "Professional service and a great grooming experience.",
  "home.review.3": "Fresh cut, clean fade, and easy booking.",
  "home.reviews.verified": "Verified Client",
  // location home
  "home.visit.eyebrow": "Visit Us",
  "home.visit.title": "Master Barber USA",
  "home.visit.hours": "Business Hours",
  "home.visit.directions": "Get Directions",
  "home.visit.call": "Call Now",
  // CTA band
  "cta.title": "Ready for your next cut?",
  "cta.desc": "Book your appointment today and experience premium barbering in Orlando.",
  "cta.button": "Book Your Appointment",
  // days
  "day.sunday": "Sunday",
  "day.monday": "Monday",
  "day.tuesday": "Tuesday",
  "day.wednesday": "Wednesday",
  "day.thursday": "Thursday",
  "day.friday": "Friday",
  "day.saturday": "Saturday",
  "day.closed": "Closed",
  // services page
  "services.eyebrow": "What We Do",
  "services.title": "Barbering Services",
  "services.desc":
    "Every service at Master Barber USA is delivered with precision, care, and the attention to detail that defines a premium barbering experience.",
  // service items
  "svc.haircut.name": "Haircut",
  "svc.haircut.desc":
    "Professional haircut tailored to your style and face shape. Includes consultation, precise execution, and detailed finishing for a clean, modern look. 35 min.",
  "svc.haircutBeard.name": "Haircut and Beard",
  "svc.haircutBeard.desc":
    "Complete grooming combo: precision haircut paired with a full beard service for a sharp, well-defined look. 55 min.",
  "svc.beardTrim.name": "Beard Trim",
  "svc.beardTrim.desc":
    "Clean beard trim with precise shaping and defined lines for a polished, well-groomed finish. 25 min.",
  "svc.headShave.name": "Head Shave",
  "svc.headShave.desc":
    "Smooth, close head shave for a clean, refined look. 15 min.",
  "svc.beardCare.name": "Beard Care",
  "svc.beardCare.desc":
    "Full beard care service focused on shaping, softening, and conditioning for a healthy, well-defined beard. 30 min.",
  "svc.eyebrows.name": "Eyebrows",
  "svc.eyebrows.desc":
    "Eyebrow grooming designed to clean, shape, and define your brows while enhancing your facial features with a natural, well-balanced look. 15 min.",
  "svc.blackMask.name": "Black Mask",
  "svc.blackMask.desc":
    "Deep-cleansing black mask treatment that clears pores and refreshes skin for a clean, revitalized finish. 30 min.",
  "svc.brazilianProgressive.name": "Brazilian Progressive",
  "svc.brazilianProgressive.desc":
    "Brazilian progressive smoothing treatment that reduces frizz and aligns the hair for a sleek, polished, long-lasting finish. 1 hr.",
  "svc.book": "Book Now",
  "svc.duration": "min",
  "svc.was": "Was",
  // barbers
  "barbers.eyebrow": "The Team",
  "barbers.title": "Our Barbers",
  "barbers.desc":
    "Every barber at Master Barber USA is a craftsman — dedicated to precision, style, and delivering a professional grooming experience.",
  "barbers.role": "Master Barber",
  "barbers.featured": "Featured Service",
  "barbers.bookWith": "Book with",
  "barbers.reviews": "Reviews",
  // gallery
  "gallery.eyebrow": "Visual Journal",
  "gallery.title": "Gallery",
  "gallery.desc":
    "Fades, beard grooming, classic cuts, modern styles, clean lineups, and the atmosphere that defines TRINQ Barbershop.",
  "gallery.atmosphere": "Atmosphere",
  "gallery.modern": "Modern Styles",
  "gallery.fades": "Fades",
  "gallery.shop": "Shop",
  "gallery.lineups": "Lineups",
  "gallery.craft": "Craft",
  "gallery.beards": "Beards",
  "gallery.classic": "Classic Cuts",
  // location page
  "location.eyebrow": "Find Us",
  "location.title": "Location & Hours",
  "location.desc": "Master Barber USA is located in Orlando, Florida. Walk in or book ahead.",
  "location.address": "Address",
  "amenities.title": "Amenities",
  "amenities.parking": "Parking space",
  "amenities.wifi": "Wi-Fi",
  "amenities.cards": "Credit cards accepted",
  // footer
  "footer.tagline": "Professional barber services in Orlando, Florida.",
  "footer.visit": "Visit",
  "footer.quick": "Quick Links",
  "footer.hours": "Hours",
  "footer.hours.sun": "Sunday: Closed",
  "footer.hours.week": "Mon – Fri: 9:30 AM – 8:00 PM",
  "footer.hours.sat": "Saturday: 9:30 AM – 6:00 PM",
  "footer.rights": "All rights reserved.",
};

const pt: Dict = {
  "nav.home": "Início",
  "nav.services": "Serviços",
  "nav.barbers": "Barbeiros",
  "nav.gallery": "Galeria",
  "nav.location": "Localização",
  "nav.book": "Agendar",

  "home.eyebrow": "Orlando, Flórida",
  "home.title.a": "Barbearia",
  "home.title.b": "Premium",
  "home.title.c": "em Orlando",
  // override eyebrow above
  "home.hero.desc":
    "Serviços profissionais de barbearia em Orlando, com ambiente limpo, confortável e barbeiros experientes — cortes precisos, cuidados com a barba e atendimento personalizado.",
  "home.cta.book": "Agendar Horário",
  "home.cta.services": "Ver Serviços",
  "home.reviews": "avaliações",

  "home.about.eyebrow": "Sobre a Master Barber USA",
  "home.about.title": "Muito Mais que um Corte",
  "home.about.desc":
    "A Master Barber USA, em Orlando, Flórida, oferece serviços profissionais de barbearia em um ambiente limpo, confortável e com barbeiros experientes. Dos degradês modernos aos cortes clássicos e cuidados com a barba, cada serviço é totalmente personalizado — cada detalhe importa, do momento em que você entra ao toque final.",
  "home.about.tagline": "Precisão. Estilo. Confiança.",
  "home.about.standard": "— O padrão Master Barber USA",

  "home.services.eyebrow": "O Que Oferecemos",
  "home.services.title": "Serviços",
  "home.services.all": "Todos os Serviços",
  "home.services.signature": "Assinatura",
  "home.services.full.title": "Experiência Completa de Grooming",
  "home.services.full.desc":
    "Corte, cuidados com a barba e acabamentos detalhados. O ritual TRINQ completo.",
  "home.services.fade.title": "Degradê na Pele",
  "home.services.fade.desc": "Preciso e impecável",
  "home.services.beard.title": "Aparar a Barba",
  "home.services.beard.desc": "Limpa e definida",

  "home.reviews.eyebrow": "O Que Dizem os Clientes",
  "home.review.1": "Ambiente impecável, corte preciso e ótima atenção aos detalhes.",
  "home.review.2": "Serviço profissional e uma excelente experiência de cuidados.",
  "home.review.3": "Corte novo, degradê perfeito e agendamento fácil.",
  "home.reviews.verified": "Cliente Verificado",

  "home.visit.eyebrow": "Visite-nos",
  "home.visit.title": "Master Barber USA",
  "home.visit.hours": "Horário de Funcionamento",
  "home.visit.directions": "Como Chegar",
  "home.visit.call": "Ligar Agora",

  "cta.title": "Pronto para o próximo corte?",
  "cta.desc":
    "Agende seu horário hoje e viva a experiência premium de barbearia em Orlando.",
  "cta.button": "Agende Seu Horário",

  "day.sunday": "Domingo",
  "day.monday": "Segunda-feira",
  "day.tuesday": "Terça-feira",
  "day.wednesday": "Quarta-feira",
  "day.thursday": "Quinta-feira",
  "day.friday": "Sexta-feira",
  "day.saturday": "Sábado",
  "day.closed": "Fechado",

  "services.eyebrow": "O Que Fazemos",
  "services.title": "Serviços da Barbearia",
  "services.desc":
    "Cada serviço da Master Barber USA é entregue com precisão, cuidado e a atenção aos detalhes que definem uma experiência premium de barbearia.",

  "svc.haircut.name": "Corte de Cabelo",
  "svc.haircut.desc":
    "Corte profissional feito sob medida para o seu estilo e formato de rosto. Inclui consulta, execução precisa e acabamento detalhado. 35 min.",
  "svc.haircutBeard.name": "Corte e Barba",
  "svc.haircutBeard.desc":
    "Combo completo: corte preciso e barba feita para um visual afiado e bem definido. 55 min.",
  "svc.beardTrim.name": "Aparar a Barba",
  "svc.beardTrim.desc":
    "Barba aparada com modelagem precisa e linhas definidas para um acabamento polido e bem cuidado. 25 min.",
  "svc.headShave.name": "Cabeça Raspada",
  "svc.headShave.desc":
    "Raspagem completa da cabeça, com acabamento suave e refinado. 15 min.",
  "svc.beardCare.name": "Cuidados com a Barba",
  "svc.beardCare.desc":
    "Serviço completo de cuidados com a barba, focado em modelar, suavizar e condicionar para uma barba saudável e bem definida. 30 min.",
  "svc.eyebrows.name": "Sobrancelhas",
  "svc.eyebrows.desc":
    "Design de sobrancelhas para limpar, modelar e definir, realçando seus traços com um resultado natural e equilibrado. 15 min.",
  "svc.blackMask.name": "Black Mask",
  "svc.blackMask.desc":
    "Máscara preta de limpeza profunda que desobstrui os poros e revitaliza a pele para um acabamento limpo e renovado. 30 min.",
  "svc.brazilianProgressive.name": "Progressiva Brasileira",
  "svc.brazilianProgressive.desc":
    "Progressiva brasileira que reduz o frizz e alinha os fios para um acabamento sedoso, polido e duradouro. 1 h.",
  "svc.book": "Agendar",
  "svc.duration": "min",
  "svc.was": "De",

  "barbers.eyebrow": "A Equipe",
  "barbers.title": "Nossos Barbeiros",
  "barbers.desc":
    "Cada barbeiro da Master Barber USA é um artesão — dedicado à precisão, ao estilo e a entregar uma experiência profissional de cuidados masculinos.",
  "barbers.role": "Master Barber",
  "barbers.featured": "Serviço em Destaque",
  "barbers.bookWith": "Agendar com",
  "barbers.reviews": "Avaliações",

  "gallery.eyebrow": "Diário Visual",
  "gallery.title": "Galeria",
  "gallery.desc":
    "Degradês, cuidados com a barba, cortes clássicos, estilos modernos, pézinhos impecáveis e a atmosfera que define a TRINQ Barbershop.",
  "gallery.atmosphere": "Ambiente",
  "gallery.modern": "Estilos Modernos",
  "gallery.fades": "Degradês",
  "gallery.shop": "Barbearia",
  "gallery.lineups": "Pézinhos",
  "gallery.craft": "Ofício",
  "gallery.beards": "Barbas",
  "gallery.classic": "Cortes Clássicos",

  "location.eyebrow": "Encontre-nos",
  "location.title": "Localização e Horários",
  "location.desc":
    "A Master Barber USA fica em Orlando, Flórida. Venha sem hora marcada ou agende antes.",
  "location.address": "Endereço",
  "amenities.title": "Comodidades",
  "amenities.parking": "Estacionamento",
  "amenities.wifi": "Wi-Fi",
  "amenities.cards": "Cartões de crédito aceitos",

  "footer.tagline": "Serviços profissionais de barbearia em Orlando, Flórida.",
  "footer.visit": "Visite",
  "footer.quick": "Links Rápidos",
  "footer.hours": "Horários",
  "footer.hours.sun": "Domingo: Fechado",
  "footer.hours.week": "Seg – Sex: 9:30 – 20:00",
  "footer.hours.sat": "Sábado: 9:30 – 18:00",
  "footer.rights": "Todos os direitos reservados.",
};

const dictionaries: Record<Lang, Dict> = { en, pt };

type I18nCtx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
};

const Ctx = createContext<I18nCtx | null>(null);
const STORAGE_KEY = "site.lang";

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (saved === "en" || saved === "pt") setLangState(saved);
    } catch {}
  }, []);

  const value = useMemo<I18nCtx>(() => {
    const setLang = (l: Lang) => {
      setLangState(l);
      try {
        localStorage.setItem(STORAGE_KEY, l);
      } catch {}
    };
    const t = (key: string) => dictionaries[lang][key] ?? dictionaries.en[key] ?? key;
    return { lang, setLang, t };
  }, [lang]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useI18n() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
