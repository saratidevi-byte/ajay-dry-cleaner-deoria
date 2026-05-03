import { createContext, useContext, useEffect, useRef, useState, useCallback } from "react";
import type { ReactNode } from "react";
import {
  Phone,
  WhatsApp,
  Instagram,
  MapPin,
  Star,
  Truck,
  Sparkles,
  Bolt,
  Shield,
  Tag,
  Heart,
  Check,
  ArrowRight,
  Menu,
  Close,
  Quote,
  ShirtIcon,
  PantIcon,
  CoatIcon,
  SareeIcon,
  BlanketIcon,
  ShoeIcon,
  SuitIcon,
  LehengaIcon,
  Diamond,
  Clock,
  Settings,
  Globe,
  Minus,
  Plus,
} from "./components/Icons";
import { translations } from "./i18n";
import type { Lang, TranslationKey } from "./i18n";

/* ─── constants ─── */
const PHONE = "7398454301";
const WA_LINK = "https://wa.me/917398454301";
const TEL_LINK = `tel:+91${PHONE}`;
const INSTA = "https://instagram.com/ajaydrycleaners";
const ADDRESS = "Balaji Mandir, Phida Mod, Gayatri Puram, Devaria";

/* ─── i18n context ─── */
interface I18nCtx { lang: Lang; setLang: (l: Lang) => void; t: (key: TranslationKey) => string; }
const LangContext = createContext<I18nCtx>({ lang: "en", setLang: () => {}, t: (k) => k });
function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem("ajay-lang");
    return saved === "hi" ? "hi" : "en";
  });
  const t = useCallback((key: TranslationKey) => translations[lang][key] || key, [lang]);
  useEffect(() => { localStorage.setItem("ajay-lang", lang); }, [lang]);
  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}
function useLang() { return useContext(LangContext); }

/* ─── data ─── */
type ServiceKey = "shirt" | "pant" | "coat" | "longCoat" | "saree" | "sareePolish" | "lehenga" | "ladiesSuit" | "blanketSingle" | "blanketDouble" | "shoesCleaning" | "premiumCare";

interface ServiceDef {
  key: ServiceKey;
  price: number;
  icon: typeof ShirtIcon;
  tagKey?: TranslationKey;
  custom?: boolean;
}

const serviceDefs: ServiceDef[] = [
  { key: "shirt", price: 40, icon: ShirtIcon, tagKey: "tagMostPopular" },
  { key: "pant", price: 40, icon: PantIcon },
  { key: "coat", price: 200, icon: CoatIcon, tagKey: "tagPremium" },
  { key: "longCoat", price: 250, icon: CoatIcon },
  { key: "saree", price: 100, icon: SareeIcon },
  { key: "sareePolish", price: 50, icon: Sparkles, tagKey: "tagBestValue" },
  { key: "lehenga", price: 250, icon: LehengaIcon, tagKey: "tagBridal" },
  { key: "ladiesSuit", price: 150, icon: SuitIcon },
  { key: "blanketSingle", price: 250, icon: BlanketIcon },
  { key: "blanketDouble", price: 350, icon: BlanketIcon },
  { key: "shoesCleaning", price: 100, icon: ShoeIcon },
  { key: "premiumCare", price: 0, icon: Diamond, tagKey: "tagCustomQuote", custom: true },
];

interface FeatureDef { titleKey: TranslationKey; descKey: TranslationKey; icon: typeof Truck; }
const featureDefs: FeatureDef[] = [
  { titleKey: "whyF1", descKey: "whyF1d", icon: Truck },
  { titleKey: "whyF2", descKey: "whyF2d", icon: Truck },
  { titleKey: "whyF3", descKey: "whyF3d", icon: Tag },
  { titleKey: "whyF4", descKey: "whyF4d", icon: Diamond },
  { titleKey: "whyF5", descKey: "whyF5d", icon: Bolt },
  { titleKey: "whyF6", descKey: "whyF6d", icon: Shield },
  { titleKey: "whyF7", descKey: "whyF7d", icon: Sparkles },
  { titleKey: "whyF8", descKey: "whyF8d", icon: Heart },
];

interface TestimonialDef { name: string; role: string; textEn: string; textHi: string; rating: number; }
const testimonialDefs: TestimonialDef[] = [
  { name: "Priya Sharma", role: "Devaria", textEn: "Excellent service and fast pickup! My silk saree came back looking brand new. Truly the best dry cleaners in Devaria.", textHi: "बेहतरीन सेवा और तेज़ पिकअप! मेरी सिल्क साड़ी बिल्कुल नई जैसी वापस आई। सच में देवरिया के सबसे अच्छे ड्राई क्लीनर्स हैं।", rating: 5 },
  { name: "Rajesh Verma", role: "Gayatri Puram", textEn: "Very professional and affordable pricing. They handle expensive coats with such care — I trust no one else with my suits.", textHi: "बहुत पेशेवर और किफायती। वे महंगे कोट की बहुत अच्छी देखभाल करते हैं — मैं अपने सूट किसी और को नहीं देता।", rating: 5 },
  { name: "Anjali Mishra", role: "Phida Mod", textEn: "Best dry cleaning service near me. Free home pickup is a blessing, and the quality is consistently outstanding every time.", textHi: "मेरे पास की सबसे अच्छी ड्राई क्लीनिंग सेवा। फ्री होम पिकअप वरदान है, और क्वालिटी हर बार शानदार रहती है।", rating: 5 },
  { name: "Sunil Gupta", role: "Balaji Mandir", textEn: "Got my wedding lehenga polished here — flawless work. The owner is friendly and the team is highly skilled.", textHi: "यहाँ अपना शादी का लहंगा पॉलिश करवाया — बेहतरीन काम। मालिक बहुत अच्छे हैं और टीम बहुत कुशल है।", rating: 5 },
  { name: "Kavita Yadav", role: "Kasya Dhala", textEn: "I've been using Ajay Dry Cleaners for 2 years now. The consistency in quality is remarkable. My blankets always come back so fresh!", textHi: "मैं 2 साल से अजय ड्राई क्लीनर्स का उपयोग कर रही हूँ। क्वालिटी में निरंतरता उल्लेखनीय है। मेरे कंबल हमेशा एकदम ताज़ा वापस आते हैं!", rating: 5 },
  { name: "Amit Kumar Singh", role: "Devaria City", textEn: "Superb experience! Gave them my expensive suit for dry cleaning. It came back perfectly pressed and smelling fresh. Highly recommended!", textHi: "शानदार अनुभव! उन्हें अपना महंगा सूट ड्राई क्लीनिंग के लिए दिया। बिल्कुल सही प्रेस और ताज़ी खुशबू के साथ वापस आया। ज़रूर ट्राई करें!", rating: 5 },
  { name: "Sunita Devi", role: "Gayatri Puram", textEn: "I am very happy with the saree polishing service. My old Banarasi saree looks brand new now! Thank you Ajay ji.", textHi: "मैं साड़ी पॉलिशिंग सेवा से बहुत खुश हूँ। मेरी पुरानी बनारसी साड़ी अब बिल्कुल नई दिखती है! धन्यवाद अजय जी।", rating: 5 },
  { name: "Deepak Pandey", role: "Phida Mod", textEn: "The best part is free home pickup and delivery. No need to go anywhere! Price is also very reasonable. Full paisa vasool.", textHi: "सबसे अच्छी बात है फ्री होम पिकअप और डिलीवरी। कहीं जाने की ज़रूरत नहीं! कीमत भी बहुत उचित है। पूरा पैसा वसूल।", rating: 5 },
  { name: "Meera Tiwari", role: "Devaria", textEn: "My kids' school uniforms are always spotless thanks to Ajay Dry Cleaners. Quick service and great quality at affordable rates.", textHi: "अजय ड्राई क्लीनर्स की बदौलत मेरे बच्चों की स्कूल यूनिफॉर्म हमेशा एकदम साफ रहती है। तेज़ सेवा और किफायती दरों पर शानदार क्वालिटी।", rating: 5 },
  { name: "Rahul Srivastava", role: "Vishwakarma Katra", textEn: "I sent 15 shirts at once and all came back perfectly. The shoes cleaning service is also amazing. Very trustworthy shop!", textHi: "मैंने एक बार में 15 शर्ट भेजी और सब एकदम सही वापस आईं। जूते की सफाई सेवा भी कमाल की है। बहुत भरोसेमंद दुकान!", rating: 5 },
  { name: "Neha Agarwal", role: "Balaji Mandir", textEn: "Got all my wedding outfits cleaned from here — lehenga, suits, everything. Absolutely perfect work. No complaints at all!", textHi: "यहाँ से अपने सारे शादी के कपड़े साफ करवाए — लहंगा, सूट, सब कुछ। बिल्कुल परफेक्ट काम। कोई शिकायत ही नहीं!", rating: 5 },
  { name: "Vikash Chauhan", role: "Kasya Dhala", textEn: "Very polite owner and excellent service quality. I recommend Ajay Dry Cleaners to all my friends and family. Best in Devaria!", textHi: "बहुत विनम्र मालिक और शानदार सेवा गुणवत्ता। मैं अपने सभी दोस्तों और परिवार को अजय ड्राई क्लीनर्स की सिफारिश करता हूँ। देवरिया में सबसे बेस्ट!", rating: 5 },
];

/* ─── hooks ─── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

/* ─── Loader ─── */
function Loader() {
  return (
    <div className="fixed inset-0 z-[100] bg-dark-mesh flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          <div className="loader-ring" />
          <Diamond className="absolute inset-0 m-auto w-7 h-7 text-gold-500" />
        </div>
        <div className="text-center">
          <div className="font-display text-2xl text-gold-gradient font-bold tracking-wide">Ajay Dry Cleaners</div>
          <div className="text-navy-200 text-sm mt-1 tracking-[0.3em] uppercase">Premium Care</div>
        </div>
      </div>
    </div>
  );
}

/* ─── Settings Panel ─── */
function SettingsPanel() {
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLang();

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-24 right-5 z-40 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-navy-gradient shadow-2xl shadow-navy-900/40 flex items-center justify-center text-gold-400 hover:scale-110 transition-transform"
        aria-label="Settings"
      >
        <Settings className="w-6 h-6 animate-spin-slow" style={{ animationDuration: "8s" }} />
      </button>

      {open && (
        <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center" onClick={() => setOpen(false)}>
          <div className="absolute inset-0 bg-navy-950/60 backdrop-blur-sm" />
          <div
            className="relative w-full max-w-md mx-4 mb-4 sm:mb-0 bg-white rounded-3xl shadow-2xl overflow-hidden animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-navy-gradient p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold-gradient flex items-center justify-center">
                  <Settings className="w-5 h-5 text-navy-900" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-xl">{t("settingsTitle")}</h3>
                  <p className="text-navy-200 text-xs">Ajay Dry Cleaners</p>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all">
                <Close className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Language */}
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-navy-600 uppercase tracking-wider mb-3">
                  <Globe className="w-4 h-4 text-gold-500" />
                  {t("language")}
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setLang("en")}
                    className={`relative p-4 rounded-2xl border-2 transition-all text-left ${
                      lang === "en"
                        ? "border-gold-500 bg-gold-50 shadow-lg shadow-gold-500/10"
                        : "border-navy-100 hover:border-navy-200"
                    }`}
                  >
                    {lang === "en" && (
                      <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-gold-gradient flex items-center justify-center">
                        <Check className="w-3 h-3 text-navy-900" strokeWidth={3} />
                      </div>
                    )}
                    <div className="text-2xl mb-1">🇬🇧</div>
                    <div className="font-semibold text-navy-900">English</div>
                    <div className="text-xs text-navy-500">Default</div>
                  </button>
                  <button
                    onClick={() => setLang("hi")}
                    className={`relative p-4 rounded-2xl border-2 transition-all text-left ${
                      lang === "hi"
                        ? "border-gold-500 bg-gold-50 shadow-lg shadow-gold-500/10"
                        : "border-navy-100 hover:border-navy-200"
                    }`}
                  >
                    {lang === "hi" && (
                      <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-gold-gradient flex items-center justify-center">
                        <Check className="w-3 h-3 text-navy-900" strokeWidth={3} />
                      </div>
                    )}
                    <div className="text-2xl mb-1">🇮🇳</div>
                    <div className="font-semibold text-navy-900">हिन्दी</div>
                    <div className="text-xs text-navy-500">Hindi</div>
                  </button>
                </div>
              </div>

              {/* Quick Actions */}
              <div>
                <div className="text-xs font-semibold text-navy-600 uppercase tracking-wider mb-3">Quick Actions</div>
                <div className="space-y-2">
                  <a href={WA_LINK} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 transition-all">
                    <WhatsApp className="w-5 h-5 text-emerald-600" />
                    <span className="font-medium text-emerald-800 text-sm">{t("chatWhatsApp")}</span>
                  </a>
                  <a href={TEL_LINK} className="flex items-center gap-3 p-3 rounded-xl bg-navy-50 hover:bg-navy-100 transition-all">
                    <Phone className="w-5 h-5 text-navy-700" />
                    <span className="font-medium text-navy-800 text-sm">{t("callNow")} — +91 {PHONE}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* ─── Navbar ─── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#home", label: t("navHome") },
    { href: "#about", label: t("navAbout") },
    { href: "#services", label: t("navServices") },
    { href: "#why", label: t("navWhy") },
    { href: "#book", label: t("navBook") },
    { href: "#contact", label: t("navContact") },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-4"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className={`rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between transition-all duration-500 ${scrolled ? "glass-light shadow-[0_8px_40px_-12px_rgba(11,31,58,0.25)]" : "bg-transparent"}`}>
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-xl bg-navy-gradient flex items-center justify-center overflow-hidden">
              <Diamond className="w-6 h-6 text-gold-400 relative z-10" />
              <div className="absolute inset-0 bg-gold-500/0 group-hover:bg-gold-500/20 transition-all" />
            </div>
            <div className="leading-tight">
              <div className="font-display font-bold text-navy-900 text-lg sm:text-xl">
                Ajay <span className="text-gold-gradient">Dry Cleaners</span>
              </div>
              <div className="text-[10px] sm:text-[11px] tracking-[0.25em] text-navy-600 uppercase">
                {t("premiumFabricCare")}
              </div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="px-4 py-2 text-sm font-medium text-navy-800 hover:text-navy-900 rounded-lg relative group">
                {l.label}
                <span className="absolute left-1/2 -translate-x-1/2 bottom-1 w-0 group-hover:w-6 h-px bg-gold-500 transition-all duration-300" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {/* Language toggle pill */}
            <button
              onClick={() => setLang(lang === "en" ? "hi" : "en")}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-navy-900/10 text-navy-800 text-xs font-bold hover:bg-navy-900/15 transition-all"
              title="Switch language"
            >
              <Globe className="w-3.5 h-3.5 text-gold-600" />
              {lang === "en" ? "हिन्दी" : "EN"}
            </button>
            <a href={TEL_LINK} className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-sm font-semibold transition-all hover:shadow-lg hover:shadow-navy-900/30">
              <Phone className="w-4 h-4" />
              <span className="hidden md:inline">{t("callNow")}</span>
            </a>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white text-sm font-semibold transition-all hover:shadow-lg hover:shadow-emerald-500/30">
              <WhatsApp className="w-4 h-4" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
            <button onClick={() => setOpen(!open)} className="lg:hidden p-2.5 rounded-xl bg-navy-900/10 text-navy-900" aria-label="Menu">
              {open ? <Close className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden mt-2 glass-light rounded-2xl p-4 animate-fade-in-up">
            {/* Mobile lang switch */}
            <div className="flex gap-2 mb-3">
              <button onClick={() => { setLang("en"); }} className={`flex-1 py-2 rounded-xl text-sm font-bold text-center transition-all ${lang === "en" ? "bg-navy-900 text-white" : "bg-navy-100 text-navy-700"}`}>
                🇬🇧 English
              </button>
              <button onClick={() => { setLang("hi"); }} className={`flex-1 py-2 rounded-xl text-sm font-bold text-center transition-all ${lang === "hi" ? "bg-navy-900 text-white" : "bg-navy-100 text-navy-700"}`}>
                🇮🇳 हिन्दी
              </button>
            </div>
            <div className="grid gap-1">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="px-4 py-3 text-navy-800 font-medium rounded-lg hover:bg-navy-900/5 flex items-center justify-between">
                  {l.label}
                  <ArrowRight className="w-4 h-4 text-gold-500" />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

/* ─── Hero ─── */
function Hero() {
  const { t } = useLang();
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src="/images/hero.jpg" alt="Premium dry cleaning" className="w-full h-full object-cover scale-105" />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950/95 via-navy-900/85 to-navy-800/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.18),transparent_55%)]" />
      </div>
      <div className="absolute top-32 left-10 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-navy-500/30 rounded-full blur-3xl animate-float-slow" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 text-white">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 animate-fade-in">
            <span className="relative flex w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-gold-400 animate-pulse-ring" />
              <span className="rounded-full w-2 h-2 bg-gold-400" />
            </span>
            <span className="text-xs sm:text-sm tracking-[0.25em] uppercase text-gold-300 font-medium">{t("heroBadge")}</span>
          </div>
          <h1 className="font-display font-bold leading-[1.05] text-4xl sm:text-5xl lg:text-7xl text-shadow-lg animate-fade-in-up">
            {t("heroTitle1")} <span className="text-gold-gradient">{t("heroTitle2")}</span><br />{t("heroTitle3")}
          </h1>
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-navy-100/90 max-w-2xl leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.15s", opacity: 0 }}>
            {t("heroSub")} <span className="text-gold-400">•</span> {t("heroFast")} <span className="text-gold-400">•</span> {t("heroPremium")}
          </p>
          <div className="mt-9 flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s", opacity: 0 }}>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 px-7 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all hover:-translate-y-0.5">
              <WhatsApp className="w-5 h-5" />
              {t("bookWhatsApp")}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href={TEL_LINK} className="group inline-flex items-center gap-3 px-7 py-4 rounded-2xl bg-gold-gradient text-navy-900 font-semibold shadow-2xl shadow-gold-500/30 hover:shadow-gold-500/50 transition-all hover:-translate-y-0.5">
              <Phone className="w-5 h-5" />
              {t("callNow")}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-4 max-w-xl animate-fade-in-up" style={{ animationDelay: "0.45s", opacity: 0 }}>
            {[
              { num: "5★", label: t("trustRated") },
              { num: "1000+", label: t("trustClients") },
              { num: t("freeText"), label: t("trustFree") },
            ].map((tr) => (
              <div key={tr.label} className="glass rounded-2xl px-4 py-3 text-center">
                <div className="font-display text-2xl font-bold text-gold-gradient">{tr.num}</div>
                <div className="text-[11px] sm:text-xs text-navy-100/80 mt-0.5 tracking-wider uppercase">{tr.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative animate-slide-in-right" style={{ animationDelay: "0.2s", opacity: 0 }}>
            <div className="absolute -inset-4 bg-gold-500/20 rounded-3xl blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden gold-border bg-navy-900/40 backdrop-blur-xl">
              <img src="/images/owner.jpg" alt="Ajay Dry Cleaners owner" className="w-full h-[460px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex">{[1,2,3,4,5].map(i=><Star key={i} className="w-4 h-4 text-gold-400"/>)}</div>
                  <span className="text-xs tracking-wider text-gold-300 uppercase">{t("trustedOwner")}</span>
                </div>
                <div className="font-display text-white text-xl font-bold">{t("welcomeOwner")}</div>
                <div className="text-navy-100/80 text-sm mt-1">{t("specialistIn")}</div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 glass-light rounded-2xl p-4 shadow-2xl animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center"><Truck className="w-6 h-6 text-navy-900" /></div>
                <div>
                  <div className="text-xs text-navy-600 uppercase tracking-wider">{t("freeText")}</div>
                  <div className="font-display font-bold text-navy-900">{t("pickupDelivery")}</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 glass-light rounded-2xl p-4 shadow-2xl animate-float" style={{ animationDelay: "1s" }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-navy-gradient flex items-center justify-center"><Shield className="w-6 h-6 text-gold-400" /></div>
                <div>
                  <div className="text-xs text-navy-600 uppercase tracking-wider">100%</div>
                  <div className="font-display font-bold text-navy-900">{t("fabricSafe")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <a href="#about" className="flex flex-col items-center gap-2 text-gold-300/80 hover:text-gold-300">
          <span className="text-[10px] tracking-[0.3em] uppercase">{t("scrollText")}</span>
          <div className="w-px h-10 bg-gradient-to-b from-gold-400 to-transparent" />
        </a>
      </div>
    </section>
  );
}

/* ─── Marquee Strip ─── */
function MarqueeStrip() {
  const { t } = useLang();
  const items = [t("marquee1"),t("marquee2"),t("marquee3"),t("marquee4"),t("marquee5"),t("marquee6"),t("marquee7"),t("marquee8")];
  return (
    <div className="bg-navy-gradient border-y border-gold-500/20 overflow-hidden">
      <div className="flex animate-[marquee_30s_linear_infinite] gap-12 py-4 whitespace-nowrap">
        {[...items,...items,...items].map((it,i) => (
          <div key={i} className="flex items-center gap-12 text-gold-300/80">
            <Diamond className="w-4 h-4" />
            <span className="font-display text-lg tracking-wider">{it}</span>
          </div>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-33.333%); } }`}</style>
    </div>
  );
}

/* ─── About ─── */
function About() {
  const { t } = useLang();
  return (
    <section id="about" className="py-24 bg-luxury-mesh relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="reveal relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 border-l-2 border-t-2 border-gold-500 rounded-tl-3xl" />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-r-2 border-b-2 border-gold-500 rounded-br-3xl" />
            <div className="relative grid grid-cols-2 gap-4">
              <img src="/images/shop.jpg" alt="Shop interior" className="rounded-2xl object-cover h-64 sm:h-80 w-full shadow-2xl" />
              <img src="/images/clothes.jpg" alt="Clean folded clothes" className="rounded-2xl object-cover h-64 sm:h-80 w-full shadow-2xl mt-8" />
              <div className="col-span-2 glass-light rounded-2xl p-5 flex items-center gap-4 shadow-xl gold-border">
                <div className="w-14 h-14 rounded-xl bg-gold-gradient flex items-center justify-center flex-shrink-0"><Heart className="w-7 h-7 text-navy-900" /></div>
                <div>
                  <div className="font-display font-bold text-navy-900 text-lg">{t("aboutCust")}</div>
                  <div className="text-navy-700 text-sm">{t("aboutCustSub")}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="reveal">
            <div className="inline-flex items-center gap-2 text-gold-600 text-xs tracking-[0.3em] uppercase font-semibold mb-3"><span className="w-8 h-px bg-gold-500" />{t("aboutTag")}</div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-navy-900 leading-tight">
              {t("aboutTitle1")} <span className="text-gold-gradient">{t("aboutTitle2")}</span> {t("aboutTitle3")}
            </h2>
            <p className="mt-6 text-navy-700 text-lg leading-relaxed">
              <span className="font-semibold text-navy-900">Ajay Dry Cleaners</span> {t("aboutP1")}{" "}
              <span className="text-gold-700 font-semibold">{t("aboutP1HL")}</span> {t("aboutP1End")}
            </p>
            <p className="mt-4 text-navy-700 leading-relaxed">{t("aboutP2")}</p>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {([t("aboutCheck1"),t("aboutCheck2"),t("aboutCheck3"),t("aboutCheck4")]).map((txt) => (
                <div key={txt} className="flex items-center gap-3 glass-light rounded-xl px-4 py-3">
                  <div className="w-8 h-8 rounded-lg bg-navy-gradient flex items-center justify-center flex-shrink-0"><Check className="w-4 h-4 text-gold-400" /></div>
                  <span className="text-navy-800 font-medium text-sm">{txt}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex gap-4">
              <a href="#services" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-navy-900 text-white font-semibold hover:bg-navy-800 transition-all hover:shadow-xl">{t("exploreServices")} <ArrowRight className="w-4 h-4" /></a>
              <a href="#book" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-navy-900 text-navy-900 font-semibold hover:bg-navy-900 hover:text-white transition-all">{t("bookPickup")}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Services ─── */
function Services() {
  const { t } = useLang();
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-gold-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-navy-500/5 rounded-full blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative">
        <div className="text-center max-w-3xl mx-auto reveal">
          <div className="inline-flex items-center gap-2 text-gold-600 text-xs tracking-[0.3em] uppercase font-semibold mb-3"><span className="w-8 h-px bg-gold-500" />{t("svcTag")}<span className="w-8 h-px bg-gold-500" /></div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-navy-900 leading-tight">{t("svcTitle1")}<br /><span className="text-gold-gradient">{t("svcTitle2")}</span></h2>
          <p className="mt-5 text-navy-700 text-lg">{t("svcSub")}</p>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {serviceDefs.map((s, i) => (
            <div key={s.key} className="reveal group relative bg-white rounded-3xl p-6 card-lift border border-navy-100 overflow-hidden" style={{ transitionDelay: `${i * 40}ms` }}>
              <div className="absolute inset-0 bg-gradient-to-br from-navy-50/0 via-gold-50/0 to-gold-100/0 group-hover:from-navy-50 group-hover:via-white group-hover:to-gold-50 transition-all duration-500" />
              {s.tagKey && <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-gold-gradient text-navy-900 shadow-lg">{t(s.tagKey)}</div>}
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-navy-900 to-navy-700 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg"><s.icon className="w-8 h-8 text-gold-400" /></div>
                <h3 className="font-display font-bold text-xl text-navy-900">{t(s.key)}</h3>
                <p className="text-navy-600 text-sm mt-1">{t("svcCard")}</p>
                <div className="mt-5 flex items-end justify-between">
                  {s.custom ? (
                    <div><div className="text-xs text-navy-500 uppercase tracking-wider">{t("svcGet")}</div><div className="font-display text-2xl font-bold text-gold-gradient">{t("svcQuote")}</div></div>
                  ) : (
                    <div><div className="text-xs text-navy-500 uppercase tracking-wider">{t("svcStarting")}</div><div className="font-display text-3xl font-bold text-navy-900">₹{s.price}</div></div>
                  )}
                  <a href={WA_LINK} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-navy-50 group-hover:bg-gold-gradient flex items-center justify-center transition-all" aria-label={`Book ${t(s.key)}`}><ArrowRight className="w-4 h-4 text-navy-900" /></a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center reveal">
          <p className="text-navy-700">{t("svcNotFound")} <span className="font-semibold">{t("svcWeClean")}</span></p>
          <a href={WA_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 mt-4 px-7 py-4 rounded-2xl bg-gold-gradient text-navy-900 font-semibold hover:shadow-xl hover:shadow-gold-500/30 transition-all"><WhatsApp className="w-5 h-5" />{t("svcCustomQuote")}</a>
        </div>
      </div>
    </section>
  );
}

/* ─── Why Choose Us ─── */
function WhyUs() {
  const { t } = useLang();
  return (
    <section id="why" className="py-24 bg-dark-mesh relative overflow-hidden">
      <div className="absolute inset-0 opacity-30"><div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/20 rounded-full blur-3xl" /><div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-navy-500/30 rounded-full blur-3xl" /></div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto reveal">
          <div className="inline-flex items-center gap-2 text-gold-400 text-xs tracking-[0.3em] uppercase font-semibold mb-3"><span className="w-8 h-px bg-gold-500" />{t("whyTag")}<span className="w-8 h-px bg-gold-500" /></div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white leading-tight">
            {t("whyTitle1")}<br />{t("whyTitle2")} <span className="text-gold-gradient">{t("whyTitle3")}</span>.
          </h2>
          <p className="mt-5 text-navy-200 text-lg">{t("whySub")}</p>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featureDefs.map((f, i) => (
            <div key={f.titleKey} className="reveal group relative glass rounded-3xl p-6 hover:bg-white/[0.13] transition-all duration-500 hover:-translate-y-2" style={{ transitionDelay: `${i * 50}ms` }}>
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gold-500/0 to-gold-500/0 group-hover:from-gold-500/10 group-hover:to-transparent transition-all" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gold-gradient flex items-center justify-center mb-5 group-hover:rotate-6 transition-transform"><f.icon className="w-7 h-7 text-navy-900" /></div>
                <h3 className="font-display font-bold text-xl text-white">{t(f.titleKey)}</h3>
                <p className="text-navy-200/80 text-sm mt-2 leading-relaxed">{t(f.descKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Booking Form with multi-select ─── */
function BookingForm() {
  const { t } = useLang();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [cart, setCart] = useState<Record<string, number>>({});
  const [sent, setSent] = useState(false);

  const addItem = (key: string) => setCart((c) => ({ ...c, [key]: (c[key] || 0) + 1 }));
  const removeItem = (key: string) => setCart((c) => { const n = { ...c }; if (n[key] > 1) n[key]--; else delete n[key]; return n; });
  const clearCart = () => setCart({});

  const cartKeys = Object.keys(cart);
  const totalPrice = cartKeys.reduce((sum, k) => {
    const svc = serviceDefs.find((s) => s.key === k);
    return sum + (svc && !svc.custom ? svc.price * cart[k] : 0);
  }, 0);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cartKeys.length === 0) return;
    const itemLines = cartKeys.map((k) => {
      const svc = serviceDefs.find((s) => s.key === k);
      const nm = svc ? t(svc.key) : k;
      const pr = svc && !svc.custom ? ` × ₹${svc.price}` : "";
      return `  • ${nm} × ${cart[k]}${pr} = ₹${svc && !svc.custom ? svc.price * cart[k] : "Custom"}`;
    }).join("%0A");
    const msg = `*New Booking — Ajay Dry Cleaners*%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Phone:* ${encodeURIComponent(phone)}%0A%0A*Services:*%0A${itemLines}%0A%0A*Total Estimate:* ₹${totalPrice}%0A%0A*Pickup Address:* ${encodeURIComponent(address)}`;
    window.open(`${WA_LINK}?text=${msg}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="book" className="py-24 bg-luxury-mesh relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left info */}
          <div className="lg:col-span-5 reveal">
            <div className="inline-flex items-center gap-2 text-gold-600 text-xs tracking-[0.3em] uppercase font-semibold mb-3"><span className="w-8 h-px bg-gold-500" />{t("bookTag")}</div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-navy-900 leading-tight">{t("bookTitle1")}<br /><span className="text-gold-gradient">{t("bookTitle2")}</span></h2>
            <p className="mt-5 text-navy-700 text-lg">{t("bookSub")}</p>
            <div className="mt-8 space-y-4">
              <a href={WA_LINK} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:shadow-2xl hover:shadow-emerald-500/30 transition-all hover:-translate-y-0.5">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0"><WhatsApp className="w-6 h-6" /></div>
                <div className="flex-1"><div className="text-xs uppercase tracking-wider opacity-90">{t("quickBooking")}</div><div className="font-display font-bold text-lg">{t("chatWhatsApp")}</div></div>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href={TEL_LINK} className="flex items-center gap-4 p-5 rounded-2xl bg-navy-gradient text-white hover:shadow-2xl hover:shadow-navy-900/30 transition-all hover:-translate-y-0.5">
                <div className="w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center flex-shrink-0"><Phone className="w-6 h-6 text-navy-900" /></div>
                <div className="flex-1"><div className="text-xs uppercase tracking-wider opacity-80">{t("callDirect")}</div><div className="font-display font-bold text-lg">+91 {PHONE}</div></div>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-navy-700"><Clock className="w-5 h-5 text-gold-500" /><span>{t("openHours")}</span></div>
              <div className="flex items-center gap-2 text-navy-700"><Shield className="w-5 h-5 text-gold-500" /><span>{t("safe100")}</span></div>
            </div>
          </div>

          {/* Right form */}
          <div className="lg:col-span-7 reveal">
            <form onSubmit={submit} className="relative bg-white rounded-3xl p-6 sm:p-10 shadow-2xl shadow-navy-900/10 border border-navy-100">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold-gradient rounded-full blur-2xl opacity-40" />
              <h3 className="font-display text-2xl font-bold text-navy-900 mb-1">{t("formTitle")}</h3>
              <p className="text-navy-600 text-sm mb-6">{t("formSub")}</p>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-semibold text-navy-700 uppercase tracking-wider">{t("formName")}</label>
                  <input required type="text" value={name} onChange={e => setName(e.target.value)} placeholder={t("formNamePH")} className="mt-2 w-full px-4 py-3 rounded-xl bg-navy-50/50 border border-navy-100 focus:border-gold-500 focus:bg-white focus:ring-2 focus:ring-gold-500/20 outline-none transition-all text-navy-900" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-navy-700 uppercase tracking-wider">{t("formPhone")}</label>
                  <input required type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder={t("formPhonePH")} className="mt-2 w-full px-4 py-3 rounded-xl bg-navy-50/50 border border-navy-100 focus:border-gold-500 focus:bg-white focus:ring-2 focus:ring-gold-500/20 outline-none transition-all text-navy-900" />
                </div>
              </div>

              {/* Multi-select service grid */}
              <div className="mt-5">
                <label className="text-xs font-semibold text-navy-700 uppercase tracking-wider">{t("formServices")}</label>
                <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {serviceDefs.filter(s => !s.custom).map((s) => {
                    const qty = cart[s.key] || 0;
                    const active = qty > 0;
                    return (
                      <div
                        key={s.key}
                        className={`relative rounded-xl border-2 p-3 transition-all cursor-pointer select-none ${active ? "border-gold-500 bg-gold-50 shadow-md shadow-gold-500/10" : "border-navy-100 bg-navy-50/30 hover:border-navy-200 hover:bg-navy-50"}`}
                      >
                        <div className="flex items-center justify-between mb-1.5" onClick={() => !active && addItem(s.key)}>
                          <div className="flex items-center gap-2">
                            <s.icon className={`w-4 h-4 ${active ? "text-gold-600" : "text-navy-500"}`} />
                            <span className={`text-sm font-semibold ${active ? "text-navy-900" : "text-navy-700"}`}>{t(s.key)}</span>
                          </div>
                          <span className={`text-xs font-bold ${active ? "text-gold-700" : "text-navy-500"}`}>₹{s.price}</span>
                        </div>
                        {/* Qty controls */}
                        <div className="flex items-center justify-between">
                          {active ? (
                            <div className="flex items-center gap-2">
                              <button type="button" onClick={() => removeItem(s.key)} className="w-7 h-7 rounded-lg bg-navy-900 text-gold-400 flex items-center justify-center hover:bg-navy-800 transition-all"><Minus className="w-3.5 h-3.5" /></button>
                              <span className="text-sm font-bold text-navy-900 w-6 text-center">{qty}</span>
                              <button type="button" onClick={() => addItem(s.key)} className="w-7 h-7 rounded-lg bg-navy-900 text-gold-400 flex items-center justify-center hover:bg-navy-800 transition-all"><Plus className="w-3.5 h-3.5" /></button>
                            </div>
                          ) : (
                            <button type="button" onClick={() => addItem(s.key)} className="text-xs font-semibold text-navy-500 hover:text-gold-600 transition-colors flex items-center gap-1"><Plus className="w-3 h-3" /> {t("qty")}</button>
                          )}
                          {active && <span className="text-xs font-bold text-gold-700">₹{s.price * qty}</span>}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Cart summary */}
              {cartKeys.length > 0 && (
                <div className="mt-4 p-4 rounded-2xl bg-gradient-to-r from-navy-50 to-gold-50 border border-gold-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-navy-700 uppercase tracking-wider">{t("selectedItems")} ({cartKeys.length})</span>
                    <button type="button" onClick={clearCart} className="text-xs text-red-500 hover:text-red-700 font-semibold">{t("clearAll")}</button>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {cartKeys.map(k => {
                      const svc = serviceDefs.find(s => s.key === k);
                      return svc ? (
                        <span key={k} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-gold-200 text-xs font-semibold text-navy-800">
                          {t(svc.key)} × {cart[k]}
                          <button type="button" onClick={() => { setCart(c => { const n = { ...c }; delete n[k]; return n; }); }} className="ml-1 text-navy-400 hover:text-red-500"><Close className="w-3 h-3" /></button>
                        </span>
                      ) : null;
                    })}
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-gold-200">
                    <span className="text-sm font-bold text-navy-900">{t("totalEstimate")}</span>
                    <span className="font-display text-2xl font-bold text-gold-gradient">₹{totalPrice}</span>
                  </div>
                </div>
              )}

              <div className="mt-5">
                <label className="text-xs font-semibold text-navy-700 uppercase tracking-wider">{t("formAddress")}</label>
                <textarea required rows={3} value={address} onChange={e => setAddress(e.target.value)} placeholder={t("formAddressPH")} className="mt-2 w-full px-4 py-3 rounded-xl bg-navy-50/50 border border-navy-100 focus:border-gold-500 focus:bg-white focus:ring-2 focus:ring-gold-500/20 outline-none transition-all text-navy-900 resize-none" />
              </div>

              <button
                type="submit"
                disabled={cartKeys.length === 0}
                className="mt-7 w-full inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl bg-navy-gradient text-white font-bold text-lg hover:shadow-2xl hover:shadow-navy-900/40 transition-all hover:-translate-y-0.5 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Sparkles className="w-5 h-5 text-gold-400" />
                {sent ? t("formSent") : t("formSubmit")}
                {cartKeys.length > 0 && <span className="text-gold-400 font-normal text-base">— ₹{totalPrice}</span>}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="mt-4 text-xs text-navy-500 text-center">{t("formDisclaimer")}</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ─── */
function Testimonials() {
  const { lang, t } = useLang();
  const [page, setPage] = useState(0);
  const perPage = 4;
  const totalPages = Math.ceil(testimonialDefs.length / perPage);
  const shown = testimonialDefs.slice(page * perPage, page * perPage + perPage);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto reveal">
          <div className="inline-flex items-center gap-2 text-gold-600 text-xs tracking-[0.3em] uppercase font-semibold mb-3"><span className="w-8 h-px bg-gold-500" />{t("testTag")}<span className="w-8 h-px bg-gold-500" /></div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-navy-900 leading-tight">
            {t("testTitle1")} <span className="text-gold-gradient">{t("testTitle2")}</span> {t("testTitle3")}
          </h2>
          <div className="mt-5 flex items-center justify-center gap-2">
            <div className="flex">{[1,2,3,4,5].map(i=><Star key={i} className="w-6 h-6 text-gold-500" />)}</div>
            <span className="text-navy-700 font-semibold">{t("testAvg")}</span>
          </div>
        </div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {shown.map((tm, i) => (
            <div key={tm.name + page} className="reveal group relative bg-gradient-to-br from-navy-50 to-white rounded-3xl p-7 card-lift border border-navy-100 overflow-hidden" style={{ transitionDelay: `${i * 60}ms` }}>
              <Quote className="absolute top-5 right-5 w-12 h-12 text-gold-500/15 group-hover:text-gold-500/30 transition-colors" />
              <div className="flex mb-4">{Array.from({ length: tm.rating }).map((_, j)=><Star key={j} className="w-4 h-4 text-gold-500" />)}</div>
              <p className="text-navy-800 leading-relaxed relative">"{lang === "hi" ? tm.textHi : tm.textEn}"</p>
              <div className="mt-6 pt-5 border-t border-navy-100 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-navy-gradient flex items-center justify-center text-gold-400 font-display font-bold">{tm.name[0]}</div>
                <div>
                  <div className="font-semibold text-navy-900 text-sm">{tm.name}</div>
                  <div className="text-xs text-navy-600">{tm.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination dots */}
        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-3">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setPage(idx)}
                className={`transition-all rounded-full ${idx === page ? "w-10 h-3 bg-gold-gradient" : "w-3 h-3 bg-navy-200 hover:bg-navy-300"}`}
                aria-label={`Page ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* ─── Contact ─── */
function Contact() {
  const { t } = useLang();
  return (
    <section id="contact" className="py-24 bg-luxury-mesh relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto reveal">
          <div className="inline-flex items-center gap-2 text-gold-600 text-xs tracking-[0.3em] uppercase font-semibold mb-3"><span className="w-8 h-px bg-gold-500" />{t("contactTag")}<span className="w-8 h-px bg-gold-500" /></div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-navy-900 leading-tight">{t("contactTitle1")} <span className="text-gold-gradient">{t("contactTitle2")}</span></h2>
          <p className="mt-5 text-navy-700 text-lg">{t("contactSub")}</p>
        </div>
        <div className="mt-14 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 space-y-4">
            {[
              { icon: Phone, title: t("callUs"), desc: `+91 ${PHONE}`, href: TEL_LINK, color: "from-navy-900 to-navy-700" },
              { icon: WhatsApp, title: t("whatsapp"), desc: `+91 ${PHONE}`, href: WA_LINK, color: "from-emerald-500 to-emerald-600" },
              { icon: Instagram, title: t("instagram"), desc: "@ajaydrycleaners", href: INSTA, color: "from-pink-500 via-fuchsia-500 to-orange-400" },
              { icon: MapPin, title: t("location"), desc: ADDRESS, href: "#map", color: "from-gold-500 to-gold-600" },
            ].map((c) => (
              <a key={c.title} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="reveal group flex items-center gap-5 p-5 bg-white rounded-2xl shadow-lg shadow-navy-900/5 hover:shadow-2xl hover:shadow-navy-900/15 border border-navy-100 hover:border-gold-300 transition-all hover:-translate-y-0.5">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${c.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}><c.icon className="w-7 h-7 text-white" /></div>
                <div className="flex-1 min-w-0"><div className="text-xs text-navy-500 uppercase tracking-wider">{c.title}</div><div className="font-display font-bold text-navy-900 truncate">{c.desc}</div></div>
                <ArrowRight className="w-5 h-5 text-navy-400 group-hover:text-gold-500 group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </div>
          <div id="map" className="lg:col-span-7 reveal">
            <div className="relative h-full min-h-[420px] rounded-3xl overflow-hidden shadow-2xl shadow-navy-900/15 gold-border">
              <iframe title="Ajay Dry Cleaners Location" src="https://www.google.com/maps?q=Balaji+Mandir+Phida+Mod+Gayatri+Puram+Devaria&output=embed" className="w-full h-full min-h-[420px] border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              <div className="absolute top-4 left-4 glass-light rounded-2xl px-4 py-3 shadow-xl max-w-xs">
                <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-gold-600" /><div className="text-xs font-bold text-navy-900 uppercase tracking-wider">Ajay Dry Cleaners</div></div>
                <div className="text-xs text-navy-700 mt-1">{ADDRESS}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  const { t } = useLang();
  return (
    <footer className="bg-navy-gradient text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none"><div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/20 rounded-full blur-3xl" /></div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center"><Diamond className="w-6 h-6 text-navy-900" /></div>
              <div><div className="font-display font-bold text-xl">Ajay Dry Cleaners</div><div className="text-[10px] tracking-[0.25em] text-gold-300 uppercase">{t("premiumFabricCare")}</div></div>
            </div>
            <p className="text-navy-200/80 text-sm leading-relaxed">{t("footerDesc")}</p>
            <div className="mt-5 flex gap-3">
              <a href={WA_LINK} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-emerald-500 transition-all"><WhatsApp className="w-5 h-5" /></a>
              <a href={INSTA} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-gradient-to-br hover:from-pink-500 hover:to-orange-400 transition-all"><Instagram className="w-5 h-5" /></a>
              <a href={TEL_LINK} className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 transition-all"><Phone className="w-5 h-5" /></a>
            </div>
          </div>
          <div>
            <h4 className="font-display font-bold text-gold-400 mb-4 text-lg">{t("quickLinks")}</h4>
            <ul className="space-y-2 text-sm">
              {[
                { l: t("navHome"), h: "#home" }, { l: t("navAbout"), h: "#about" }, { l: t("navServices"), h: "#services" },
                { l: t("whyChooseUs"), h: "#why" }, { l: t("bookPickup"), h: "#book" }, { l: t("navContact"), h: "#contact" },
              ].map(it => (
                <li key={it.l}><a href={it.h} className="text-navy-200/80 hover:text-gold-400 transition-colors inline-flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-gold-500 group-hover:w-3 transition-all" />{it.l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold text-gold-400 mb-4 text-lg">{t("ourServices")}</h4>
            <ul className="space-y-2 text-sm">
              {[t("footerSvc1"),t("footerSvc2"),t("footerSvc3"),t("footerSvc4"),t("footerSvc5"),t("footerSvc6")].map(s => (
                <li key={s} className="text-navy-200/80 flex items-center gap-2"><Check className="w-3.5 h-3.5 text-gold-500" />{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold text-gold-400 mb-4 text-lg">{t("contactInfo")}</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3 text-navy-200/80"><MapPin className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" /><span>{ADDRESS}</span></li>
              <li className="flex gap-3 text-navy-200/80"><Phone className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" /><a href={TEL_LINK} className="hover:text-gold-400">+91 {PHONE}</a></li>
              <li className="flex gap-3 text-navy-200/80"><WhatsApp className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" /><a href={WA_LINK} target="_blank" rel="noreferrer" className="hover:text-gold-400">+91 {PHONE}</a></li>
              <li className="flex gap-3 text-navy-200/80"><Clock className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" /><span>{t("openTime")}</span></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-navy-200/70">
          <div>© {new Date().getFullYear()} Ajay Dry Cleaners. {t("footerCopyright")}</div>
          <div className="flex items-center gap-2"><span>{t("footerLove1")}</span><Heart className="w-4 h-4 text-gold-500" /><span>{t("footerLove2")}</span></div>
        </div>
      </div>
    </footer>
  );
}

/* ─── Floating Buttons ─── */
function FloatingButtons() {
  const { t } = useLang();
  return (
    <>
      <a href={WA_LINK} target="_blank" rel="noreferrer" className="fixed bottom-5 right-5 z-40 group" aria-label="WhatsApp Chat">
        <div className="relative">
          <span className="absolute inset-0 rounded-full bg-emerald-500 animate-pulse-ring" />
          <span className="absolute inset-0 rounded-full bg-emerald-500/30 animate-pulse-ring" style={{ animationDelay: "0.5s" }} />
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-2xl shadow-emerald-500/40 flex items-center justify-center group-hover:scale-110 transition-transform"><WhatsApp className="w-7 h-7 sm:w-8 sm:h-8 text-white" /></div>
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2 rounded-xl bg-navy-900 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all pointer-events-none">{t("chatWithUs")}</div>
        </div>
      </a>
      <a href={TEL_LINK} className="fixed bottom-5 left-5 z-40 sm:hidden" aria-label="Call Now">
        <div className="relative">
          <span className="absolute inset-0 rounded-full bg-gold-500 animate-pulse-ring" />
          <div className="relative w-14 h-14 rounded-full bg-gold-gradient shadow-2xl shadow-gold-500/40 flex items-center justify-center"><Phone className="w-6 h-6 text-navy-900" /></div>
        </div>
      </a>
    </>
  );
}

/* ─── App ─── */
export default function App() {
  const [loading, setLoading] = useState(true);
  const ran = useRef(false);

  useEffect(() => {
    if (ran.current) return;
    ran.current = true;
    const tmr = setTimeout(() => setLoading(false), 1100);
    return () => clearTimeout(tmr);
  }, []);

  useReveal();

  return (
    <LangProvider>
      {loading && <Loader />}
      <div className={loading ? "opacity-0" : "opacity-100 transition-opacity duration-500"}>
        <Navbar />
        <main>
          <Hero />
          <MarqueeStrip />
          <About />
          <Services />
          <WhyUs />
          <BookingForm />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <FloatingButtons />
        <SettingsPanel />
      </div>
    </LangProvider>
  );
}
