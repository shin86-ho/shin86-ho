"use client";

import { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ChevronDown,
  Star,
  Users,
  Clock,
  Award,
} from "lucide-react";

const translations = {
  ckb: {
    title: "Rix Printing - خزمەتگوزاری چاپەمەنی",
    selectLanguage: "تکایە زمانێک هەڵبژێرە",
    nav: {
      home: "سەرەتا",
      services: "خزمەتگوزارییەکان",
      about: "دەربارەی ئێمە",
      contact: "پەیوەندی",
      blog: "بلاگ",
      visit: "سەردان",
    },
    hero: {
      title: "چاپخانەی ریکس بۆ چاپەمەنی گشتی",
      subtitle:
        "ئێمە یارمەتی براندەکان دەدەین بۆ دروستکردنی چاپی جیاواز و سەرنجڕاکێش.",
      trust: "متمانە",
      quality: "کواڵیتی",
      speed: "خێرایی",
      getStarted: "دەستپێبکە",
    },
    services: {
      title: "خزمەتگوزارییەکانمان",
      subtitle: "چاپخانەی ڕیکس ئەم خزمەتگوزارییانە پێشکەش دەکات",
      types: {
        offset: "چاپی ئۆفسێت",
        digital: "چاپی دیجیتال",
        embossed: "حەرف بارز",
        uvdtf: "UV DTF چاپی",
        dtf: "DTF چاپی",
        pad: "چاپی تامپۆ",
        laser: "چاپی لێزەر",
        thermal: "چاپی حەراری",
        screen: "چاپی سکڕین",
        fabric: "چاپی دروومان",
      },
      poster: {
        title: "چاپکردنی پۆستەر و بانەر",
        design: "دیزاین و چاپ",
        large: "چاپکردنی قەبارە گەورە",
        highQuality: "کوالێتی بەرز",
      },
      books: {
        title: "چاپکردنی کتێب و گۆڤار",
        designSizes: "دیزاین و قەبارەی جیاواز",
        printing: "چاپکردنی ناوەوە و بەرگ",
      },
      cards: {
        title: "چاپکردنی کارتی بانگهێشت و بزنس",
        customDesign: "دیزاینی تایبەت",
        precision: "بڕینی ورد",
      },
      clothing: {
        title: "چاپکردنی جل و بەرگ",
        direct: "دروومان و چاپکردنی ڕاستەوخۆ",
        colors: "ڕەنگ و دیزاینی جیاواز",
      },
    },
    custom: {
      title: "چاپکردنی کارتۆنی تایبەت بە کڕیار",
      subtitle:
        "چاپخانەی ڕیکس ڕێگەت پێدەدات چاپکراوی تایبەت بە براندەکەت دیزاین بکەیت و چاپی بکەیت.",
      step1: {
        title: "قۆناغی یەکەم: دیزاین و چاپکردن",
        desc: "هەڵبژاردنی جۆری دیزاین و ماددەکان بۆ چاپکراوی دیاریکراو.",
      },
      step2: {
        title: "قۆناغی دووەم: نموونە و پەسەندکردن",
        desc: "پێشکەشکردنی نموونە بۆ پێداچوونەوە و پەسەندکردنی کۆتایی.",
      },
      step3: {
        title: "قۆناغی سێیەم: چاپکردن و گەیاندن",
        desc: "دەستپێکردنی پڕۆسەی چاپ و گەیاندن بە کوالێتی بەرز.",
      },
    },
    premium: {
      title: "چاپکردنی تایبەت بە کوالێتی بەرز",
      subtitle:
        "لە Rix Printing، ئێمە بژاردەی چاپکردنی زۆر بە کوالێتی بەرز پێشکەش دەکەین.",
      tags: {
        paper: "کاغەز — چاپکردنی کاغەز",
        design: "دیزاین — چاپکردنی دیزاینی تایبەت",
        premium: "پریمیم — چاپکراوی کوالێتی بەرز",
        materials: "ئاڵاکان — چاپکردنی ئاڵاکان",
      },
    },
    about: {
      title: "دەربارەی ئێمە",
      content:
        "ئێمە، لە چاپخانەی ڕیکس، شانازی دەکەین بە پێشکەشکردنی خزمەتگوزارییەکانی چاپ بە کڕیارە بەڕێزەکانمان. بۆ چەندین ساڵ، پشتگیری کڕیارەکانمان کردووە لە بوارە جیاوازەکانی چاپدا، بە هەوڵدان بۆ بەکارهێنانی تەواوی تواناکانمان بۆ پێشکەشکردنی خزمەتگوزاری چاپکردنی گشتیی کوالێتی بەرز و پێشکەوتوو.",
      vision: "بینینمان:",
      values: {
        trusted: "متمانەپێکراوی",
        quality: "کوالێتی",
        speed: "خێرایی",
      },
    },
    learn: {
      title: "فێربە چۆن سەرکەوتوو بیت بە چاپکردن",
      subtitle:
        "ئێمە چارەسەری چاپکردنی داهێنەرانە پێشکەش دەکەین کە یارمەتی براندەکان دەدات سەرنجڕاکێش بن.",
    },
    customers: {
      title: "بۆ کڕیارەکانمان",
      content:
        "کڕیارەکانمان سەرچاوەی هێز و سەرکەوتنمانن. متمانە و پشت بەستنتان بە ئێمە هێزێکی گەورەیە لە پاڵنانی گەشە و پێشکەوتنماندا. ئێمە پابەندین بە پێشکەشکردنی خزمەتگوزارییەکی نایاب و بێهاوتا لە هەموو کاتێکدا. ئامانجمان تەنها فرۆشتنی بەرهەم و خزمەتگوزاری نییە، بەڵکو دروستکردنی پەیوەندییەکی متمانەپێکراو و درێژخایەنە لەگەڵ تاک تاکی ئێوە.",
    },
    partners: {
      title: "هاوبەش و کڕیارەکانمان",
    },
    location: {
      title: "شوێنی چاپخانەکەمان",
      subtitle: "بماندۆزەرەوە لە نەخشەدا.",
    },
    contact: {
      title: "پەیوەندی لەگەڵمان",
      subtitle: "بۆ هەر پرسیارێک یان داواکارییەک پەیوەندیمان پێوە بکەن.",
      form: {
        name: "ناوت",
        phone: "ژمارەی مۆبایل",
        description: "وەسفێک لەسەر داواکارییەکەت",
        submit: "ناردن",
      },
    },
    footer: {
      info: "زانیاری",
      contact: "پەیوەندی",
      address: "Bahrka - 150m overpass, Erbil, Iraq",
      rights: "© 2025 Rix Printing. هەموو مافەکانی پارێزراون.",
    },
  },
  ar: {
    title: "Rix Printing - خدمات الطباعة",
    selectLanguage: "الرجاء اختيار اللغة",
    nav: {
      home: "الرئيسية",
      services: "الخدمات",
      about: "من نحن",
      contact: "اتصل بنا",
      blog: "المدونة",
      visit: "زيارة",
    },
    hero: {
      title: "مطبعة ريكس للطباعة العامة",
      subtitle: "نحن نساعد العلامات التجارية في إنتاج مطبوعات متنوعة وجذابة.",
      trust: "الثقة",
      quality: "الجودة",
      speed: "السرعة",
      getStarted: "ابدأ الآن",
    },
    services: {
      title: "خدماتنا",
      subtitle: "مطبعة ريكس تقدم هذه الخدمات",
      types: {
        offset: "طباعة أوفست",
        digital: "طباعة رقمية",
        embossed: "طباعة بارزة",
        uvdtf: "طباعة UV DTF",
        dtf: "طباعة DTF",
        pad: "طباعة تامبو",
        laser: "طباعة ليزر",
        thermal: "طباعة حرارية",
        screen: "طباعة شاشة حريرية",
        fabric: "طباعة أقمشة",
      },
      poster: {
        title: "طباعة البوسترات واللافتات",
        design: "تصميم وطباعة",
        large: "طباعة بأحجام كبيرة",
        highQuality: "جودة عالية",
      },
      books: {
        title: "طباعة الكتب والمجلات",
        designSizes: "تصميم وأحجام مختلفة",
        printing: "طباعة المحتوى والغلاف",
      },
      cards: {
        title: "طباعة بطاقات الدعوة والأعمال",
        customDesign: "تصميم خاص",
        precision: "قطع دقيق",
      },
      clothing: {
        title: "طباعة الملابس",
        direct: "أقمشة وطباعة مباشرة",
        colors: "ألوان وتصاميم مختلفة",
      },
    },
    custom: {
      title: "طباعة مخصصة للعملاء",
      subtitle:
        "مطبعة ريكس تمكنك من تصميم وطباعة مطبوعات خاصة بعلامتك التجارية.",
      step1: {
        title: "المرحلة الأولى: التصميم والطباعة",
        desc: "اختيار نوع التصميم والمواد للمطبوعة المحددة.",
      },
      step2: {
        title: "المرحلة الثانية: العينة والموافقة",
        desc: "تقديم عينة للمراجعة والموافقة النهائية.",
      },
      step3: {
        title: "المرحلة الثالثة: الطباعة والتسليم",
        desc: "بدء عملية الطباعة والتسليم بجودة عالية.",
      },
    },
    premium: {
      title: "طباعة مخصصة بجودة عالية",
      subtitle: "في Rix Printing، نقدم خيارات طباعة متنوعة بجودة عالية.",
      tags: {
        paper: "ورق — طباعة الورق",
        design: "تصميم — طباعة تصميم خاص",
        premium: "بريمي — مطبوعات عالية الجودة",
        materials: "مواد — طباعة المواد",
      },
    },
    about: {
      title: "من نحن",
      content:
        "نحن في مطبعة ريكس نفتخر بتقديم خدمات الطباعة لعملائنا الكرام. لسنوات عديدة، دعمنا عملاءنا في مجالات الطباعة المختلفة، مجتهدين لاستخدام كامل قدراتنا لتقديم خدمة طباعة عامة عالية الجودة ومتطورة.",
      vision: "رؤيتنا:",
      values: {
        trusted: "موثوق",
        quality: "جودة",
        speed: "سرعة",
      },
    },
    learn: {
      title: "تعلم كيف تنجح في الطباعة",
      subtitle:
        "نقدم حلول طباعة إبداعية تساعد العلامات التجارية على أن تكون جذابة.",
    },
    customers: {
      title: "لعملائنا",
      content:
        "عملاؤنا هم مصدر قوتنا ونجاحنا. ثقتكم واعتمادكم علينا قوة كبيرة في دعم نمونا وتقدمنا. نحن ملتزمون بتقديم خدمة استثنائية لا مثيل لها في جميع الأوقات. هدفنا ليس فقط بيع المنتجات والخدمات، بل إقامة علاقة موثوقة وطويلة المدى مع كل واحد منكم.",
    },
    partners: {
      title: "شركاؤنا وعملاؤنا",
    },
    location: {
      title: "موقع مطبعتنا",
      subtitle: "ابحث عنا على الخريطة.",
    },
    contact: {
      title: "اتصل بنا",
      subtitle: "لأي سؤال أو طلب يرجى التواصل معنا.",
      form: {
        name: "اسمك",
        phone: "رقم الجوال",
        description: "وصف لطلبك",
        submit: "إرسال",
      },
    },
    footer: {
      info: "معلومات",
      contact: "اتصل بنا",
      address: "Bahrka - 150m overpass, Erbil, Iraq",
      rights: "© 2025 Rix Printing. جميع الحقوق محفوظة.",
    },
  },
  en: {
    title: "Rix Printing - Printing Services",
    selectLanguage: "Please select a language",
    nav: {
      home: "Home",
      services: "Services",
      about: "About Us",
      contact: "Contact",
      blog: "Blog",
      visit: "Visit",
    },
    hero: {
      title: "Rix Printing for General Printing",
      subtitle: "We help brands create diverse and attractive prints.",
      trust: "Trust",
      quality: "Quality",
      speed: "Speed",
      getStarted: "Get Started",
    },
    services: {
      title: "Our Services",
      subtitle: "Rix Printing offers these services",
      types: {
        offset: "Offset Printing",
        digital: "Digital Printing",
        embossed: "Embossed Printing",
        uvdtf: "UV DTF Printing",
        dtf: "DTF Printing",
        pad: "Pad Printing",
        laser: "Laser Printing",
        thermal: "Thermal Printing",
        screen: "Screen Printing",
        fabric: "Fabric Printing",
      },
      poster: {
        title: "Poster & Banner Printing",
        design: "Design & Print",
        large: "Large Format Printing",
        highQuality: "High Quality",
      },
      books: {
        title: "Book & Magazine Printing",
        designSizes: "Design & Various Sizes",
        printing: "Interior & Cover Printing",
      },
      cards: {
        title: "Invitation & Business Card Printing",
        customDesign: "Custom Design",
        precision: "Precision Cutting",
      },
      clothing: {
        title: "Clothing Printing",
        direct: "Fabric & Direct Printing",
        colors: "Various Colors & Designs",
      },
    },
    custom: {
      title: "Custom Client Printing",
      subtitle:
        "Rix Printing allows you to design and print custom materials for your brand.",
      step1: {
        title: "Phase One: Design & Printing",
        desc: "Selection of design type and materials for the specified print.",
      },
      step2: {
        title: "Phase Two: Sample & Approval",
        desc: "Providing sample for review and final approval.",
      },
      step3: {
        title: "Phase Three: Printing & Delivery",
        desc: "Starting the print process and delivery with high quality.",
      },
    },
    premium: {
      title: "High Quality Custom Printing",
      subtitle: "At Rix Printing, we offer many high-quality printing options.",
      tags: {
        paper: "Paper — Paper Printing",
        design: "Design — Custom Design Printing",
        premium: "Premium — High Quality Prints",
        materials: "Materials — Material Printing",
      },
    },
    about: {
      title: "About Us",
      content:
        "We at Rix Printing take pride in providing printing services to our valued customers. For several years, we have supported our customers in various printing fields, striving to use all our capabilities to provide high-quality and advanced general printing services.",
      vision: "Our Vision:",
      values: {
        trusted: "Trusted",
        quality: "Quality",
        speed: "Speed",
      },
    },
    learn: {
      title: "Learn How to Succeed in Printing",
      subtitle:
        "We provide creative printing solutions that help brands become attractive.",
    },
    customers: {
      title: "For Our Customers",
      content:
        "Our customers are the source of our strength and success. Your trust and reliance on us is a great force in supporting our growth and progress. We are committed to providing exceptional and unparalleled service at all times. Our goal is not only to sell products and services, but to build a trusted and long-term relationship with each of you.",
    },
    partners: {
      title: "Our Partners & Customers",
    },
    location: {
      title: "Our Printing Location",
      subtitle: "Find us on the map.",
    },
    contact: {
      title: "Contact Us",
      subtitle: "For any question or request please contact us.",
      form: {
        name: "Your Name",
        phone: "Mobile Number",
        description: "Description of your request",
        submit: "Submit",
      },
    },
    footer: {
      info: "Information",
      contact: "Contact",
      address: "Bahrka - 150m overpass, Erbil, Iraq",
      rights: "© 2025 Rix Printing. All rights reserved.",
    },
  },
};

export default function RixPrintingHomepage() {
  const [currentLang, setCurrentLang] = useState("en");
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("rix-printing-lang");
    if (savedLang && translations[savedLang]) {
      setCurrentLang(savedLang);
    } else {
      setShowLanguageModal(true);
    }
  }, []);

  const t = translations[currentLang];
  const isRTL = currentLang === "ckb" || currentLang === "ar";

  const switchLanguage = (lang) => {
    setCurrentLang(lang);
    localStorage.setItem("rix-printing-lang", lang);
    setShowLanguageModal(false);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          language: currentLang,
        }),
      });

      if (response.ok) {
        alert(
          currentLang === "en"
            ? "Message sent successfully!"
            : currentLang === "ar"
              ? "تم إرسال الرسالة بنجاح!"
              : "پەیامەکەت بە سەرکەوتووی نێردرا!",
        );
        setFormData({ name: "", phone: "", description: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      alert(
        currentLang === "en"
          ? "Error sending message. Please try again."
          : currentLang === "ar"
            ? "خطأ في إرسال الرسالة. يرجى المحاولة مرة أخرى."
            : "هەڵەیەک ڕوویدا لە ناردنی پەیامدا. تکایە دووبارە هەوڵ بدەوە.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={`min-h-screen bg-white ${isRTL ? "text-right" : "text-left"}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Language Selection Modal */}
      {showLanguageModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full">
            <h2 className="text-lg font-semibold mb-4 text-center">
              {currentLang === "en"
                ? "Please select a language"
                : currentLang === "ar"
                  ? "الرجاء اختيار اللغة"
                  : "تکایە زمانێک هەڵبژێرە"}{" "}
              / الرجاء اختيار اللغة / Please select a language
            </h2>
            <div className="space-y-3">
              <button
                onClick={() => switchLanguage("ckb")}
                className="w-full p-3 text-left bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
              >
                کوردی
              </button>
              <button
                onClick={() => switchLanguage("ar")}
                className="w-full p-3 text-right bg-green-50 hover:bg-green-100 rounded-lg transition-colors"
              >
                العربية
              </button>
              <button
                onClick={() => switchLanguage("en")}
                className="w-full p-3 text-left bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
              >
                English
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="https://e1a4c9d0d2f9f737c5e1.ucr.io/-/preview/https://api.urlbox.io/v1/NTYqWgJv5s0qDIxN/jpeg?url=https%3A%2F%2Fblogger.googleusercontent.com%2Fimg%2Fb%2FR29vZ2xl%2FAVvXsEh6DQ8...%2Fs320%2Frix%2520logo.png&full_page=true&width=1024&max_height=2048&quality=80"
                alt="Rix Printing Logo"
                className="h-8 w-auto"
              />
              <span className="ml-2 text-xl font-bold text-blue-600">
                Rix Printing
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                {t.nav.home}
              </a>
              <a
                href="#services"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                {t.nav.services}
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                {t.nav.about}
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                {t.nav.contact}
              </a>
              <a
                href="#blog"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                {t.nav.blog}
              </a>
              <a
                href="#visit"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                {t.nav.visit}
              </a>
            </nav>

            {/* Language Switcher & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button
                  onClick={() => setShowLanguageModal(true)}
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <span className="text-sm font-medium">
                    {currentLang === "ckb"
                      ? "کوردی"
                      : currentLang === "ar"
                        ? "العربية"
                        : "English"}
                  </span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t pt-4 pb-4">
              <nav className="flex flex-col space-y-3">
                <a
                  href="#home"
                  className="text-gray-600 hover:text-blue-600 py-2"
                >
                  {t.nav.home}
                </a>
                <a
                  href="#services"
                  className="text-gray-600 hover:text-blue-600 py-2"
                >
                  {t.nav.services}
                </a>
                <a
                  href="#about"
                  className="text-gray-600 hover:text-blue-600 py-2"
                >
                  {t.nav.about}
                </a>
                <a
                  href="#contact"
                  className="text-gray-600 hover:text-blue-600 py-2"
                >
                  {t.nav.contact}
                </a>
                <a
                  href="#blog"
                  className="text-gray-600 hover:text-blue-600 py-2"
                >
                  {t.nav.blog}
                </a>
                <a
                  href="#visit"
                  className="text-gray-600 hover:text-blue-600 py-2"
                >
                  {t.nav.visit}
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {t.hero.title}
              </h1>
              <p className="text-xl mb-8 text-blue-100">{t.hero.subtitle}</p>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <Award className="w-8 h-8 mx-auto mb-2 text-blue-200" />
                  <span className="text-sm font-medium">{t.hero.trust}</span>
                </div>
                <div className="text-center">
                  <Star className="w-8 h-8 mx-auto mb-2 text-blue-200" />
                  <span className="text-sm font-medium">{t.hero.quality}</span>
                </div>
                <div className="text-center">
                  <Clock className="w-8 h-8 mx-auto mb-2 text-blue-200" />
                  <span className="text-sm font-medium">{t.hero.speed}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  {t.hero.getStarted}
                </button>
                <a
                  href="https://api.whatsapp.com/send/?phone=9647504222282&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://e1a4c9d0d2f9f737c5e1.ucr.io/-/preview/https://api.urlbox.io/v1/NTYqWgJv5s0qDIxN/jpeg?url=https%3A%2F%2Fblogger.googleusercontent.com%2Fimg%2Fb%2FR29vZ2xl%2FAVvXsEj73Meo...%2Fs600%2F1111%25D8%25AB.jpg&full_page=true&width=1024&max_height=2048&quality=80"
                alt="Printing Sample 1"
                className="rounded-lg shadow-lg"
              />
              <img
                src="https://e1a4c9d0d2f9f737c5e1.ucr.io/-/preview/https://api.urlbox.io/v1/NTYqWgJv5s0qDIxN/jpeg?url=https%3A%2F%2Fblogger.googleusercontent.com%2Fimg%2Fb%2FR29vZ2xl%2FAVvXsEibm75...%2Fs300%2F357%25D8%25B95%25D8%25B9.jpg&full_page=true&width=1024&max_height=2048&quality=80"
                alt="Printing Sample 2"
                className="rounded-lg shadow-lg mt-8"
              />
              <img
                src="https://e1a4c9d0d2f9f737c5e1.ucr.io/-/preview/https://api.urlbox.io/v1/NTYqWgJv5s0qDIxN/jpeg?url=https%3A%2F%2Fblogger.googleusercontent.com%2Fimg%2Fb%2FR29vZ2xl%2FAVvXsEit9gM...%2Fs300%2F34634576.jpg&full_page=true&width=1024&max_height=2048&quality=80"
                alt="Printing Sample 3"
                className="rounded-lg shadow-lg -mt-8"
              />
              <img
                src="https://img1.wsimg.com/isteam/stock/2650"
                alt="Printing Sample 4"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {t.services.title}
            </h2>
            <p className="text-xl text-gray-600">{t.services.subtitle}</p>
          </div>

          {/* Printing Types Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
            {Object.entries(t.services.types).map(([key, value]) => (
              <div
                key={key}
                className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Star className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-800">{value}</h3>
              </div>
            ))}
          </div>

          {/* Service Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Poster & Banner */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://www.sprinter.com.au/wp-content/uploads/2019/07/Large_format_digital_printer.jpg"
                alt="Large Format Printing"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">
                  {t.services.poster.title}
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• {t.services.poster.design}</li>
                  <li>• {t.services.poster.large}</li>
                  <li>• {t.services.poster.highQuality}</li>
                </ul>
              </div>
            </div>

            {/* Books & Magazines */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://www.airmark.com/cdn/shop/articles/BlogPost-3_1.jpg?v=1710262485"
                alt="Book Printing"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">
                  {t.services.books.title}
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• {t.services.books.designSizes}</li>
                  <li>• {t.services.books.printing}</li>
                </ul>
              </div>
            </div>

            {/* Cards */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://img1.wsimg.com/isteam/stock/2650"
                alt="Card Printing"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">
                  {t.services.cards.title}
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• {t.services.cards.customDesign}</li>
                  <li>• {t.services.cards.precision}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Printing Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {t.custom.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.custom.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold mb-4">{t.custom.step1.title}</h3>
              <p className="text-gray-600">{t.custom.step1.desc}</p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold mb-4">{t.custom.step2.title}</h3>
              <p className="text-gray-600">{t.custom.step2.desc}</p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold mb-4">{t.custom.step3.title}</h3>
              <p className="text-gray-600">{t.custom.step3.desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                {t.premium.title}
              </h2>
              <p className="text-xl text-gray-600 mb-8">{t.premium.subtitle}</p>

              <div className="grid grid-cols-2 gap-4">
                {Object.entries(t.premium.tags).map(([key, value]) => (
                  <div key={key} className="bg-white p-4 rounded-lg shadow-sm">
                    <span className="text-sm font-medium text-gray-800">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://e1a4c9d0d2f9f737c5e1.ucr.io/-/preview/https://api.urlbox.io/v1/NTYqWgJv5s0qDIxN/jpeg?url=https%3A%2F%2Fblogger.googleusercontent.com%2F...%2Fs1709%2F%25D8%25B5%25D8%25B3%25D8%25AB%25D9%2582%25D8%25A7%25D9%2582.jpg&full_page=true&width=1024&max_height=2048&quality=80"
                alt="Product Sample 1"
                className="rounded-lg shadow-md"
              />
              <img
                src="https://e1a4c9d0d2f9f737c5e1.ucr.io/-/preview/https://api.urlbox.io/v1/NTYqWgJv5s0qDIxN/jpeg?url=https%3A%2F%2Fblogger.googleusercontent.com%2F...%2Fs1709%2F%25D8%25B4%25D8%25AB%25D8%25A7.jpg&full_page=true&width=1024&max_height=2048&quality=80"
                alt="Product Sample 2"
                className="rounded-lg shadow-md mt-8"
              />
              <img
                src="https://e1a4c9d0d2f9f737c5e1.ucr.io/-/preview/https://api.urlbox.io/v1/NTYqWgJv5s0qDIxN/jpeg?url=https%3A%2F%2Fblogger.googleusercontent.com%2F...%2Fs1709%2F%25D8%25B4%25D8%25B3%25D8%25AA%25D8%25A7%25D9%2584%25D8%25B4%25D8%25B3%25D8%25AA%25D8%25A7%25D9%2584.jpg&full_page=true&width=1024&max_height=2048&quality=80"
                alt="Product Sample 3"
                className="rounded-lg shadow-md -mt-8"
              />
              <img
                src="https://e1a4c9d0d2f9f737c5e1.ucr.io/-/preview/https://api.urlbox.io/v1/NTYqWgJv5s0qDIxN/jpeg?url=https%3A%2F%2Fblogger.googleusercontent.com%2F...%2Fs300%2F4235.jpg&full_page=true&width=1024&max_height=2048&quality=80"
                alt="Product Sample 4"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              {t.about.title}
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {t.about.content}
            </p>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {t.about.vision}
              </h3>
              <div className="flex justify-center items-center space-x-8 text-center">
                <div>
                  <Award className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                  <span className="font-semibold">
                    {t.about.values.trusted}
                  </span>
                </div>
                <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
                <div>
                  <Star className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                  <span className="font-semibold">
                    {t.about.values.quality}
                  </span>
                </div>
                <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
                <div>
                  <Clock className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                  <span className="font-semibold">{t.about.values.speed}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learn Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t.learn.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.learn.subtitle}
          </p>
        </div>
      </section>

      {/* Customers Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              {t.customers.title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t.customers.content}
            </p>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            {t.partners.title}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-70">
            {/* Partner logos would go here - using placeholder boxes for now */}
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center"
              >
                <Users className="w-8 h-8 text-gray-400" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="visit" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {t.location.title}
            </h2>
            <p className="text-xl text-gray-600">{t.location.subtitle}</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3128.0!2d44.018319059200046!3d36.296006049345785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzYuMjk2MDA2MDQ5MzQ1Nzg1LCA0NC4wMTgzMTkwNTkyMDAwNDY!5e0!3m2!1sen!2s!4v1234567890123"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 bg-gradient-to-br from-blue-50 to-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {t.contact.title}
            </h2>
            <p className="text-xl text-gray-600">{t.contact.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder={t.contact.form.name}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder={t.contact.form.phone}
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <textarea
                    placeholder={t.contact.form.description}
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    rows="5"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? "..." : t.contact.form.submit}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6">
                  {t.footer.contact}
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-blue-600" />
                    <div>
                      <a
                        href="tel:+9647506151617"
                        className="text-gray-800 hover:text-blue-600"
                      >
                        +964 750 615 1617
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-blue-600" />
                    <div>
                      <a
                        href="tel:+9647506121314"
                        className="text-gray-800 hover:text-blue-600"
                      >
                        +964 750 612 1314
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-blue-600" />
                    <div>
                      <a
                        href="mailto:info@rixprinting.com"
                        className="text-gray-800 hover:text-blue-600"
                      >
                        info@rixprinting.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <p className="text-gray-800">{t.footer.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-500 text-white rounded-lg shadow-lg p-8 text-center">
                <Phone className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">WhatsApp</h3>
                <a
                  href="https://api.whatsapp.com/send/?phone=9647504222282&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-green-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
                >
                  {currentLang === "en"
                    ? "Chat Now"
                    : currentLang === "ar"
                      ? "تحدث الآن"
                      : "ئێستا قسە بکە"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center mb-4">
                <img
                  src="https://e1a4c9d0d2f9f737c5e1.ucr.io/-/preview/https://api.urlbox.io/v1/NTYqWgJv5s0qDIxN/jpeg?url=https%3A%2F%2Fblogger.googleusercontent.com%2Fimg%2Fb%2FR29vZ2xl%2FAVvXsEh6DQ8...%2Fs320%2Frix%2520logo.png&full_page=true&width=1024&max_height=2048&quality=80"
                  alt="Rix Printing Logo"
                  className="h-8 w-auto"
                />
                <span className="ml-2 text-xl font-bold">Rix Printing</span>
              </div>
              <p className="text-gray-300">
                {currentLang === "en"
                  ? "Professional printing services in Erbil, Iraq"
                  : currentLang === "ar"
                    ? "خدمات طباعة احترافية في أربيل، العراق"
                    : "خزمەتگوزاریی چاپی پیشەیی لە هەولێر، عێراق"}
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">{t.footer.contact}</h3>
              <div className="space-y-2 text-gray-300">
                <p>+964 750 615 1617</p>
                <p>+964 750 612 1314</p>
                <p>info@rixprinting.com</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">{t.footer.info}</h3>
              <div className="space-y-2">
                <a
                  href="#services"
                  className="text-gray-300 hover:text-white block"
                >
                  {t.nav.services}
                </a>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-white block"
                >
                  {t.nav.about}
                </a>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-white block"
                >
                  {t.nav.contact}
                </a>
                <a
                  href="https://www.instagram.com/rix_printing/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white block"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-300">{t.footer.rights}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
