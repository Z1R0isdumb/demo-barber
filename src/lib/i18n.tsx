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
  "home.eyebrow": "Windermere, Florida",
  "home.title.a": "Premium",
  "home.title.b": "Barbering",
  "home.title.c": "in Windermere",
  "home.hero.desc":
    "Precision cuts, clean fades, beard grooming, and personalized service designed to help you look sharp, feel confident, and stand out.",
  "home.cta.book": "Book Appointment",
  "home.cta.services": "View Services",
  "home.reviews": "reviews",
  // about
  "home.about.eyebrow": "About TRINQ",
  "home.about.title": "More Than a Haircut",
  "home.about.desc":
    "TRINQ BARBERSHOP, located in Windermere, Florida, delivers a premium grooming experience focused on precision, style, and confidence. From modern fades to classic cuts and beard grooming, every service is tailored to the client. At TRINQ, every detail matters — from the moment you walk in to the final touch. This is a clean, sharp, and confident grooming experience.",
  "home.about.tagline": "Precision. Style. Confidence.",
  "home.about.standard": "— The TRINQ standard",
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
  "home.visit.title": "TRINQ Barbershop",
  "home.visit.hours": "Business Hours",
  "home.visit.directions": "Get Directions",
  "home.visit.call": "Call Now",
  // CTA band
  "cta.title": "Ready for your next cut?",
  "cta.desc": "Book your appointment today and experience premium barbering in Windermere.",
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
    "Every service at TRINQ is delivered with precision, care, and the attention to detail that defines a premium barbering experience.",
  // service items
  "svc.haircut.name": "Haircut",
  "svc.haircut.desc":
    "Professional haircut tailored to your style and face shape. Includes consultation, precise execution, and detailed finishing for a clean, modern look.",
  "svc.eyebrows.name": "Eyebrows",
  "svc.eyebrows.desc":
    "Eyebrow grooming service performed with a straight razor, designed to clean, shape, and define your brows while enhancing your facial features with a natural and well-balanced look.",
  "svc.beardPremium.name": "Beard Trim Premium (Hot Towel)",
  "svc.beardPremium.desc":
    "Our premium hot towel beard service featuring a precise trim and clean shave, enhanced with warm towels for relaxation, skin comfort, and a smooth, refined finish.",
  "svc.beardExpress.name": "Beard Trim Express",
  "svc.beardExpress.desc":
    "Express beard trim service designed for quick maintenance, delivering a clean, defined look with precise shaping and minimal time.",
  "svc.comboPremium.name": "Haircut + Beard Trim Premium (Hot Towel)",
  "svc.comboPremium.desc":
    "Haircut and beard trim combo with hot towel service, delivering a precise, tailored cut and expertly sculpted beard, finished with a relaxing hot towel for a clean, polished look.",
  "svc.comboExpress.name": "Haircut + Beard Trim Express",
  "svc.comboExpress.desc":
    "Haircut and express beard trim combo, delivering a precise, tailored haircut paired with a quick, clean beard shaping for a sharp and well-groomed look in minimal time.",
  "svc.waxing.name": "Nose and Ear Waxing",
  "svc.waxing.desc":
    "Nose and ear waxing service using premium wax to safely and effectively remove unwanted hair, leaving a clean, smooth, and well-groomed appearance.",
  "svc.straightening.name": "Hair Straightening",
  "svc.straightening.desc":
    "Professional hair straightening service designed to smooth and align the hair, reducing frizz and enhancing shine for a sleek, polished, and long-lasting finish.",
  "svc.platinum.name": "Platinum — Hair Bleaching",
  "svc.platinum.desc":
    "Platinum hair bleaching service designed to lift color safely, creating a bright, even, and striking platinum finish while maintaining hair health and shine.",
  "svc.lineup.name": "Lineup (Pézinho)",
  "svc.lineup.desc":
    "Achieve a sharp, clean finish with our Men's Lineup service. Our barbers precisely shape your hairline and edges, enhancing your overall look with crisp, defined lines for a polished and well-groomed appearance.",
  "svc.lights.name": "Hair Lights (Luzes)",
  "svc.lights.desc":
    "Professional cap highlights using bleach to achieve a natural and evenly distributed lightening effect.",
  "svc.book": "Book Now",
  // barbers
  "barbers.eyebrow": "The Team",
  "barbers.title": "Our Barbers",
  "barbers.desc":
    "Every barber at TRINQ is a craftsman — dedicated to precision, style, and delivering a premium grooming experience.",
  "barbers.role": "TRINQ Barber",
  "barbers.reviews.4": "4 Reviews",
  "barbers.reviews.2": "2 Reviews",
  "barbers.featured": "Featured Service",
  "barbers.bookWith": "Book with",
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
  "location.desc": "TRINQ Barbershop is located in Windermere, Florida. Walk in or book ahead.",
  "location.address": "Address",
  // footer
  "footer.tagline": "Premium barbering in Windermere, Florida.",
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

  "home.eyebrow": "Windermere, Flórida",
  "home.title.a": "Barbearia",
  "home.title.b": "Premium",
  "home.title.c": "em Windermere",
  "home.hero.desc":
    "Cortes precisos, degradês impecáveis, cuidados com a barba e atendimento personalizado, criados para você parecer impecável, se sentir confiante e se destacar.",
  "home.cta.book": "Agendar Horário",
  "home.cta.services": "Ver Serviços",
  "home.reviews": "avaliações",

  "home.about.eyebrow": "Sobre a TRINQ",
  "home.about.title": "Muito Mais que um Corte",
  "home.about.desc":
    "A TRINQ BARBERSHOP, localizada em Windermere, Flórida, oferece uma experiência premium em cuidados masculinos, com foco em precisão, estilo e confiança. Dos degradês modernos aos cortes clássicos e cuidados com a barba, cada serviço é totalmente personalizado. Na TRINQ, cada detalhe importa — do momento em que você entra ao toque final. Uma experiência de barbearia limpa, sofisticada e cheia de confiança.",
  "home.about.tagline": "Precisão. Estilo. Confiança.",
  "home.about.standard": "— O padrão TRINQ",

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
  "home.visit.title": "TRINQ Barbershop",
  "home.visit.hours": "Horário de Funcionamento",
  "home.visit.directions": "Como Chegar",
  "home.visit.call": "Ligar Agora",

  "cta.title": "Pronto para o próximo corte?",
  "cta.desc":
    "Agende seu horário hoje e viva a experiência premium de barbearia em Windermere.",
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
    "Cada serviço da TRINQ é entregue com precisão, cuidado e a atenção aos detalhes que definem uma experiência premium de barbearia.",

  "svc.haircut.name": "Corte de Cabelo",
  "svc.haircut.desc":
    "Corte profissional feito sob medida para o seu estilo e formato de rosto. Inclui consulta, execução precisa e acabamento detalhado para um visual limpo e moderno.",
  "svc.eyebrows.name": "Sobrancelhas",
  "svc.eyebrows.desc":
    "Design de sobrancelhas feito com navalha, criado para limpar, modelar e definir suas sobrancelhas, realçando seus traços faciais com um resultado natural e equilibrado.",
  "svc.beardPremium.name": "Barba Premium (Toalha Quente)",
  "svc.beardPremium.desc":
    "Nosso serviço premium de barba com toalha quente, com aparo preciso e barba feita, potencializado por toalhas quentes para relaxamento, conforto da pele e um acabamento suave e refinado.",
  "svc.beardExpress.name": "Barba Express",
  "svc.beardExpress.desc":
    "Serviço de barba express feito para manutenção rápida, entregando um visual limpo e definido com modelagem precisa em pouco tempo.",
  "svc.comboPremium.name": "Corte + Barba Premium (Toalha Quente)",
  "svc.comboPremium.desc":
    "Combo de corte e barba com serviço de toalha quente, entregando um corte preciso e sob medida, com barba esculpida por especialistas e finalizado com toalha quente para um visual limpo e sofisticado.",
  "svc.comboExpress.name": "Corte + Barba Express",
  "svc.comboExpress.desc":
    "Combo de corte e barba express, entregando um corte preciso e personalizado combinado com uma modelagem de barba rápida e limpa, para um visual afiado e bem cuidado em pouco tempo.",
  "svc.waxing.name": "Depilação de Nariz e Orelha",
  "svc.waxing.desc":
    "Serviço de depilação de nariz e orelha com cera premium, removendo pelos indesejados com segurança e eficácia, deixando um aspecto limpo, suave e bem cuidado.",
  "svc.straightening.name": "Alisamento Capilar",
  "svc.straightening.desc":
    "Serviço profissional de alisamento capilar, criado para suavizar e alinhar os fios, reduzindo o frizz e realçando o brilho para um acabamento sedoso, polido e duradouro.",
  "svc.platinum.name": "Platinado — Descoloração",
  "svc.platinum.desc":
    "Serviço de descoloração platinada, feito para clarear com segurança, criando um acabamento platinado brilhante, uniforme e marcante, mantendo a saúde e o brilho dos fios.",
  "svc.lineup.name": "Pézinho (Lineup)",
  "svc.lineup.desc":
    "Conquiste um acabamento afiado e impecável com nosso serviço de Pézinho. Nossos barbeiros modelam com precisão o contorno e as laterais do cabelo, realçando seu visual com linhas nítidas e definidas para uma aparência polida e bem cuidada.",
  "svc.lights.name": "Luzes",
  "svc.lights.desc":
    "Luzes profissionais na touca com descoloração, para um efeito clareador natural e uniformemente distribuído.",
  "svc.book": "Agendar",

  "barbers.eyebrow": "A Equipe",
  "barbers.title": "Nossos Barbeiros",
  "barbers.desc":
    "Cada barbeiro da TRINQ é um artesão — dedicado à precisão, ao estilo e a entregar uma experiência premium de cuidados masculinos.",
  "barbers.role": "Barbeiro TRINQ",
  "barbers.reviews.4": "4 Avaliações",
  "barbers.reviews.2": "2 Avaliações",
  "barbers.featured": "Serviço em Destaque",
  "barbers.bookWith": "Agendar com",

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
    "A TRINQ Barbershop fica em Windermere, Flórida. Venha sem hora marcada ou agende antes.",
  "location.address": "Endereço",

  "footer.tagline": "Barbearia premium em Windermere, Flórida.",
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
