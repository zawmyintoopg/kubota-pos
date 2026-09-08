import { useState } from "react";
const DummyProductImage = ({ category }) => {
  const renderShape = () => {
    if (category === "Blade") {
      return (
        <svg
          viewBox="0 0 220 140"
          className="h-32 w-48 transition-transform duration-500 group-hover:scale-110"
        >
          <path
            d="M25 105 C65 55 120 30 195 28 L205 45 C140 58 90 78 48 120 Z"
            fill="none"
            stroke="var(--ink)"
            strokeWidth="12"
            strokeLinecap="round"
          />
          <path
            d="M48 120 L28 108"
            stroke="var(--rust)"
            strokeWidth="10"
            strokeLinecap="round"
          />
        </svg>
      );
    }

    if (category === "Belt") {
      return (
        <svg
          viewBox="0 0 220 140"
          className="h-32 w-48 transition-transform duration-500 group-hover:scale-110"
        >
          <ellipse
            cx="110"
            cy="70"
            rx="75"
            ry="42"
            fill="none"
            stroke="var(--ink)"
            strokeWidth="18"
          />
          <ellipse
            cx="110"
            cy="70"
            rx="48"
            ry="22"
            fill="none"
            stroke="var(--rust)"
            strokeWidth="6"
          />
        </svg>
      );
    }

    if (category === "Filter") {
      return (
        <svg
          viewBox="0 0 220 140"
          className="h-32 w-48 transition-transform duration-500 group-hover:scale-110"
        >
          <ellipse
            cx="110"
            cy="35"
            rx="42"
            ry="16"
            fill="var(--rust)"
          />
          <rect
            x="68"
            y="35"
            width="84"
            height="70"
            fill="var(--ink)"
          />
          <ellipse
            cx="110"
            cy="105"
            rx="42"
            ry="16"
            fill="var(--ink-2)"
          />

          <path
            d="M82 45 V98 M96 45 V100 M110 45 V100 M124 45 V100 M138 45 V98"
            stroke="var(--paper)"
            strokeWidth="4"
            opacity="0.65"
          />
        </svg>
      );
    }

    return (
      <svg
        viewBox="0 0 220 140"
        className="h-32 w-48 transition-transform duration-500 group-hover:scale-110"
      >
        <circle
          cx="110"
          cy="70"
          r="48"
          fill="none"
          stroke="var(--ink)"
          strokeWidth="18"
        />

        <circle
          cx="110"
          cy="70"
          r="25"
          fill="var(--paper-2)"
          stroke="var(--rust)"
          strokeWidth="8"
        />

        <circle
          cx="110"
          cy="70"
          r="8"
          fill="var(--ink)"
        />

        <circle cx="110" cy="35" r="5" fill="var(--rust)" />
        <circle cx="145" cy="70" r="5" fill="var(--rust)" />
        <circle cx="110" cy="105" r="5" fill="var(--rust)" />
        <circle cx="75" cy="70" r="5" fill="var(--rust)" />
      </svg>
    );
  };

  return (
    <div className="relative flex h-56 items-center justify-center overflow-hidden bg-[var(--paper-2)]">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full border border-[var(--line)]" />
        <div className="absolute -bottom-16 -right-10 h-48 w-48 rounded-full border border-[var(--line)]" />
      </div>

      <div className="relative">
        {renderShape()}
      </div>
    </div>
  );
};
function App() {
  const [activeView, setActiveView] = useState("store");
  const [language, setLanguage] = useState("my");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
const [selectedCategory, setSelectedCategory] = useState("All");
const [cartOpen, setCartOpen] = useState(false);
const [cartItems, setCartItems] = useState([]);

const products = [
  {
  id: 1,
  name: "Combine Blade Set",
  category: "Blade",
  meta: "DC70 / DC93 အတွက်",
  price: 185000,
  stock: "yes",
  icon: "K"
},
  {
    id: 2,
    name: "Cutting Belt B-95",
    category: "Belt",
    meta: "Standard size",
    price: 42000,
    stock: "yes",
    icon: "B",
  },
  {
    id: 3,
    name: "Air Filter Element",
    category: "Filter",
    meta: "Engine intake",
    price: 18500,
    stock: "low",
    icon: "F",
  },
  {
    id: 4,
    name: "Oil Filter",
    category: "Filter",
    meta: "Engine oil",
    price: 9500,
    stock: "yes",
    icon: "O",
  },
  {
    id: 5,
    name: "Thresher Bearing 6205",
    category: "Bearing",
    meta: "Sealed type",
    price: 12000,
    stock: "yes",
    icon: "B",
  },
  {
    id: 6,
    name: "Reel Belt",
    category: "Belt",
    meta: "Reduction gear",
    price: 36000,
    stock: "no",
    icon: "R",
  },
  {
    id: 7,
    name: "Chain Blade (Rice Kit)",
    category: "Blade",
    meta: "Rice cutting kit",
    price: 95000,
    stock: "yes",
    icon: "C",
  },
  {
    id: 8,
    name: "Track Roller Bearing",
    category: "Bearing",
    meta: "Crawler undercarriage",
    price: 28000,
    stock: "low",
    icon: "T",
  },
];

const categories = [
  "All",
  "Blade",
  "Belt",
  "Filter",
  "Bearing",
];
const categoryLabels = {
  All: {
    my: "အားလုံး",
    en: "All",
  },
  Blade: {
    my: "ဓား",
    en: "Blade",
  },
  Belt: {
    my: "ကြိုး",
    en: "Belt",
  },
  Filter: {
    my: "Filter",
    en: "Filter",
  },
  Bearing: {
    my: "Bearing",
    en: "Bearing",
  },
};

const filteredProducts = products.filter((product) => {
  const matchesCategory =
    selectedCategory === "All" ||
    product.category === selectedCategory;

  const search = searchTerm.toLowerCase().trim();

  const matchesSearch =
    product.name.toLowerCase().includes(search) ||
    product.category.toLowerCase().includes(search) ||
    product.meta.toLowerCase().includes(search);

  return matchesCategory && matchesSearch;
});

const addToCart = (product) => {
  if (product.stock === "no") {
    return;
  }

  setCartItems((currentItems) => {
    const existingItem = currentItems.find(
      (item) => item.id === product.id
    );

    if (existingItem) {
      return currentItems.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );
    }

    return [
      ...currentItems,
      {
        ...product,
        quantity: 1,
      },
    ];
  });

  setCartOpen(true);
};

const increaseQuantity = (productId) => {
  setCartItems((currentItems) =>
    currentItems.map((item) =>
      item.id === productId
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item
    )
  );
};

const decreaseQuantity = (productId) => {
  setCartItems((currentItems) =>
    currentItems
      .map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      )
      .filter((item) => item.quantity > 0)
  );
};

const removeFromCart = (productId) => {
  setCartItems((currentItems) =>
    currentItems.filter((item) => item.id !== productId)
  );
};

const cartCount = cartItems.reduce(
  (total, item) => total + item.quantity,
  0
);

const cartTotal = cartItems.reduce(
  (total, item) => total + item.price * item.quantity,
  0
);

const formatPrice = (price) =>
  new Intl.NumberFormat("en-US").format(price);
  const isMyanmar = language === "my";

  const menuItems = [
    {
      id: "home",
      my: "ပင်မစာမျက်နှာ",
      en: "Home",
      href: "#home",
    },
    {
      id: "about",
      my: "ကျွန်ုပ်တို့အကြောင်း",
      en: "About Us",
      href: "#about",
    },
    {
      id: "services",
      my: "ဝန်ဆောင်မှုများ",
      en: "Services",
      href: "#services",
    },
    {
      id: "parts",
      my: "အပိုပစ္စည်းများ",
      en: "Spare Parts",
      href: "#parts",
    },
    {
      id: "contact",
      my: "ဆက်သွယ်ရန်",
      en: "Contact",
      href: "#contact",
    },
  ];

  const scrollToSection = (href) => {
    setMobileMenuOpen(false);

    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="min-h-screen bg-[var(--paper)] text-[var(--charcoal)]">

      {/* ==================================================
          TOPBAR
      ================================================== */}

      {/* ==================================================
          MAIN HEADER
      ================================================== */}

                {/* MAIN HEADER */}
           {/* ==================================================
    MAIN HEADER
================================================== */}
{/* MAIN HEADER */}
<header className="sticky top-0 z-50 bg-white/95 backdrop-blur">

  {/* TOP BRAND / ACTION BAR */}
  {/* ================================================
    BRAND + MENU + ACTIONS
================================================= */}

<div className="border-b border-[var(--line)]">
  <div className="flex min-h-24 w-full items-center">

    {/* BRAND */}
    <div className="flex shrink-0 items-center px-5 lg:px-7">
      <a
        href="#home"
        onClick={(event) => {
          event.preventDefault();
          scrollToSection("#home");
        }}
        className="flex items-center gap-3"
      >
        <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[var(--ink)] text-lg font-bold tracking-wide text-white">
          TNH
        </div>

        <div className="hidden sm:block">
          <div className="text-lg font-bold leading-tight text-[var(--ink)]">
            {isMyanmar ? "မိဘဂုဏ်ရှိန်" : "Mi Ba Gome Shin"}
          </div>

          <div className="mt-1 text-[10px] font-semibold leading-tight text-[var(--ink-2)]">
            {isMyanmar
              ? "Kubota ကိုသက်နိုင်ထူး နှင့် ညီများ"
              : "Kubota Ko Thet Naing Htoo & Brothers"}
          </div>
        </div>
      </a>
    </div>

    {/* DESKTOP MENU */}
    <nav className="hidden min-w-0 flex-1 items-center justify-center lg:flex">
      {menuItems.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => scrollToSection(item.href)}
          className="whitespace-nowrap px-4 py-7 text-sm font-semibold text-[var(--ink)] transition hover:bg-[var(--paper-2)] hover:text-[var(--rust)] xl:px-5"
        >
          {isMyanmar ? item.my : item.en}
        </button>
      ))}

      {/* STORE */}
      <button
        type="button"
        onClick={() => setActiveView("store")}
        className="ml-2 bg-[var(--rust)] px-5 py-3 text-sm font-bold text-white transition hover:bg-[var(--rust-dark)]"
      >
        {isMyanmar ? "စတိုးဆိုင်" : "Store"}
      </button>
    </nav>

    {/* RIGHT ACTIONS */}
    <div className="hidden shrink-0 items-center gap-2 px-5 lg:flex">

      {/* LANGUAGE DROPDOWN */}
      <div className="relative">
        <select
          value={language}
          onChange={(event) => setLanguage(event.target.value)}
          className="h-10 cursor-pointer appearance-none border border-[var(--line)] bg-white py-2 pl-3 pr-8 text-xs font-bold text-[var(--ink)] outline-none transition hover:border-[var(--ink)] focus:border-[var(--ink)]"
          aria-label="Language"
        >
          <option value="my">မြန်မာ</option>
          <option value="en">English</option>
        </select>

        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[var(--ink)]">
          ▾
        </span>
      </div>

      {/* CART */}
      <button
        type="button"
        onClick={() => setCartOpen(true)}
        className="relative flex h-10 w-10 items-center justify-center border border-[var(--line)] text-base text-[var(--ink)] transition hover:border-[var(--ink)] hover:bg-[var(--paper-2)]"
        aria-label={isMyanmar ? "ခြင်းတောင်း" : "Shopping cart"}
      >
        🛒

        {cartCount > 0 && (
          <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[var(--rust)] px-1 text-[10px] font-bold text-white">
            {cartCount}
          </span>
        )}
      </button>

    </div>

    {/* MOBILE ACTIONS */}
    <div className="ml-auto flex items-center gap-2 px-4 lg:hidden">

      {/* MOBILE CART */}
      <button
        type="button"
        onClick={() => setCartOpen(true)}
        className="relative flex h-9 w-9 items-center justify-center border border-[var(--line)] text-base text-[var(--ink)]"
        aria-label={isMyanmar ? "ခြင်းတောင်း" : "Shopping cart"}
      >
        🛒

        {cartCount > 0 && (
          <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[var(--rust)] px-1 text-[10px] font-bold text-white">
            {cartCount}
          </span>
        )}
      </button>

      {/* MOBILE MENU */}
      <button
        type="button"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="flex h-9 w-9 items-center justify-center border border-[var(--line)] text-lg text-[var(--ink)]"
        aria-label={isMyanmar ? "မီနူးဖွင့်ရန်" : "Open menu"}
        aria-expanded={mobileMenuOpen}
      >
        {mobileMenuOpen ? "×" : "☰"}
      </button>

    </div>

  </div>
</div>

{/* ================================================
    CONTACT / ADDRESS BAR
================================================= */}

<div className="border-b border-[var(--line)] bg-[var(--paper)]">
  <div className="flex min-h-11 w-full items-center justify-between gap-4 px-5 lg:px-7">

    {/* ADDRESS */}
    <div className="flex min-w-0 items-center gap-2 text-xs font-medium text-[var(--ink-2)]">
      <span className="text-sm text-[var(--rust)]">
        📍
      </span>

      <span className="truncate">
        {isMyanmar
          ? "ကျောက်တန်းမြို့နယ် · ဝဲကြီးကျေးရွာ"
          : "Kyauktan Township · Wel Gyi Village"}
      </span>
    </div>

    {/* PHONE */}
    <a
      href="tel:+959799862006"
      className="hidden shrink-0 items-center gap-2 text-xs font-bold text-[var(--ink)] transition hover:text-[var(--rust)] sm:flex"
    >
      <span className="text-sm text-[var(--rust)]">
        ☎
      </span>

      <span>
        09-799862006
      </span>
    </a>

  </div>
</div>

{/* ================================================
    MOBILE MENU
================================================= */}

{mobileMenuOpen && (
  <div className="border-b border-[var(--line)] bg-white px-5 py-4 lg:hidden">

    {/* LANGUAGE */}
    <div className="mb-4">
      <label className="mb-2 block text-[10px] font-bold uppercase tracking-wider text-[var(--ink-2)]">
        Language
      </label>

      <div className="relative">
        <select
          value={language}
          onChange={(event) => setLanguage(event.target.value)}
          className="w-full appearance-none border border-[var(--line)] bg-white px-4 py-3 text-sm font-bold text-[var(--ink)] outline-none"
        >
          <option value="my">မြန်မာ</option>
          <option value="en">English</option>
        </select>

        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[var(--ink)]">
          ▾
        </span>
      </div>
    </div>

    {/* MENU ITEMS */}
    <div className="flex flex-col">

      {menuItems.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => scrollToSection(item.href)}
          className="border-b border-[var(--line)] px-2 py-4 text-left text-sm font-semibold text-[var(--ink)] transition hover:text-[var(--rust)]"
        >
          {isMyanmar ? item.my : item.en}
        </button>
      ))}

      {/* STORE */}
      <button
        type="button"
        onClick={() => {
          setActiveView("store");
          setMobileMenuOpen(false);
        }}
        className="mt-4 bg-[var(--rust)] px-4 py-4 text-left text-sm font-bold text-white"
      >
        {isMyanmar ? "စတိုးဆိုင်" : "Store"}
      </button>

    </div>

    {/* MOBILE PHONE */}
    <a
      href="tel:+959799862006"
      className="mt-4 flex items-center justify-center gap-2 border border-[var(--ink)] px-4 py-3 text-sm font-bold text-[var(--ink)]"
    >
      ☎ 09-799862006
    </a>

  </div>
)}


</header>
      {/* ==================================================
          STORE VIEW
      ================================================== */}

      {activeView === "store" && (
        <main>

          {/* ==================================================
              HERO
          ================================================== */}

          {/* ==================================================
    PARTS
================================================== */}
        <section
  id="home"
  className="relative overflow-hidden border-b border-[var(--line)] bg-[var(--paper)] py-20 sm:py-24 lg:py-28"
>
  <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[var(--paper-2)] opacity-70" />
  <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-[var(--paper-2)] opacity-50" />

  <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">

    {/* HERO CONTENT */}
    <div className="max-w-3xl">

      <div className="animate-fade-in mb-6 flex items-center gap-3">
        <span className="h-px w-12 bg-[var(--rust)]" />
        <span className="eng text-xs font-semibold uppercase tracking-[0.22em] text-[var(--rust)]">
          Kubota Harvester Service & Spare Parts
        </span>
      </div>

      <h1 className="animate-fade-up text-4xl font-bold leading-[1.45] text-[var(--ink)] sm:text-5xl lg:text-6xl">
        ရိတ်သိမ်းချိန်မှာ စက်ရပ်တာ မခံစားရအောင် ကူညီပါတယ်
      </h1>

      <p className="animate-fade-up mt-7 max-w-2xl text-base leading-8 text-[var(--charcoal)] sm:text-lg">
        ကူဘိုတာ ရိတ်သိမ်းခွေလှေ့စက်နှင့် ပဲရိတ်စက်များအတွက်
        မူရင်းအပိုပစ္စည်းများ၊ ပြင်ဆင်မှုဝန်ဆောင်မှုနှင့်
        ၂၅ နှစ်ကျော် အတွေ့အကြုံ။ လိုအပ်တဲ့ ပစ္စည်းကို
        ဖုန်း (သို့) Viber နဲ့ တိုက်ရိုက်မှာယူနိုင်ပါတယ်။
      </p>

      <div className="animate-fade-up mt-9 flex flex-col gap-3 sm:flex-row">

        <a
          href="tel:+959799862006"
          className="premium-button inline-flex items-center justify-center bg-[var(--rust)] px-7 py-4 text-sm font-bold text-white transition hover:bg-[var(--rust-dark)]"
        >
          ဖုန်းခေါ်ရန် — 09-799862006
        </a>

        <button
          type="button"
          onClick={() => scrollToSection("#parts")}
          className="inline-flex items-center justify-center border border-[var(--ink)] bg-white px-7 py-4 text-sm font-bold text-[var(--ink)] transition hover:bg-[var(--ink)] hover:text-white"
        >
          အပိုပစ္စည်းများ ကြည့်ရန်
        </button>

      </div>

      <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-[var(--line)] pt-6 text-xs font-semibold text-[var(--ink-2)]">
        <span>25+ Years Experience</span>
        <span>Genuine Spare Parts</span>
        <span>Field Service</span>
      </div>

    </div>

    {/* HERO VISUAL */}
    <div className="animate-scale-in relative">

      <div className="relative overflow-hidden border border-[var(--line)] bg-[var(--ink)] p-5 shadow-xl sm:p-7">

        <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[var(--rust)] opacity-20" />

        <div className="relative flex min-h-[360px] flex-col justify-between border border-white/15 p-6 sm:min-h-[420px] sm:p-8">

          <div className="flex items-start justify-between">
            <div>
              <div className="eng text-xs font-semibold uppercase tracking-[0.2em] text-[var(--rust)]">
                KUBOTA
              </div>

              <div className="mt-2 text-sm font-semibold text-white/70">
                Harvester Service
              </div>
            </div>

            <div className="flex h-12 w-12 items-center justify-center border border-white/20 text-sm font-bold text-white">
              TNH
            </div>
          </div>

          <div>
            <div className="eng text-7xl font-semibold tracking-tight text-white sm:text-8xl">
              K
            </div>

            <div className="mt-4 h-px w-16 bg-[var(--rust)]" />

            <h2 className="mt-5 text-2xl font-bold leading-relaxed text-white sm:text-3xl">
              Kubota
              <br />
              Spare Parts
            </h2>

            <p className="mt-4 max-w-xs text-sm leading-7 text-white/65">
              Genuine parts, repair service and field support for harvesting machines.
            </p>
          </div>

          <div className="flex items-end justify-between border-t border-white/15 pt-5">
            <div>
              <div className="text-[10px] uppercase tracking-widest text-white/50">
                SERVICE AREA
              </div>

              <div className="mt-1 text-sm font-semibold text-white">
                ကျောက်တန်း · ဝဲကြီး
              </div>
            </div>

            <div className="eng text-xs tracking-widest text-[var(--rust)]">
              TNH / KUBOTA
            </div>
          </div>

        </div>
      </div>

      <div className="absolute -bottom-4 -left-4 hidden border border-[var(--line)] bg-white px-5 py-4 shadow-lg sm:block">
        <div className="text-[10px] font-bold uppercase tracking-widest text-[var(--rust)]">
          Direct Order
        </div>

        <div className="mt-1 text-sm font-bold text-[var(--ink)]">
          Phone / Viber
        </div>
      </div>

    </div>

  </div>
</section>

          {/* ==================================================
              ABOUT
          ================================================== */}

          <section
            id="about"
            className="mx-auto max-w-7xl px-5 py-20"
          >
            <div className="border border-[var(--line)] bg-white p-10 text-center">
              <h2 className="text-3xl font-bold text-[var(--ink)]">
                {isMyanmar ? "ကျွန်ုပ်တို့အကြောင်း" : "About Us"}
              </h2>
            </div>
          </section>

          {/* ==================================================
              SERVICES
          ================================================== */}

          <section
            id="services"
            className="relative overflow-hidden bg-white py-24 sm:py-28"
          >

            <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[var(--paper)]" />

            <div className="relative mx-auto max-w-7xl px-5">

              <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_2fr] lg:items-end">

                <div>

                  <div className="mb-5 flex items-center gap-3">

                    <span className="h-px w-10 bg-[var(--rust)]" />

                    <span className="eng text-xs font-semibold uppercase tracking-[0.22em] text-[var(--rust)]">
                      Our Services
                    </span>

                  </div>

                  <h2 className="text-3xl font-bold leading-tight text-[var(--ink)] sm:text-4xl lg:text-5xl">
                    {isMyanmar
                      ? "ဝန်ဆောင်မှုများ"
                      : "Services We Provide"}
                  </h2>

                </div>

                <div className="max-w-2xl lg:justify-self-end">

                  <p className="text-base leading-8 text-[var(--charcoal)] sm:text-lg">
                    {isMyanmar
                      ? "Kubota ရိတ်သိမ်းစက်များအတွက် အဓိက ဝန်ဆောင်မှု ၄ မျိုး"
                      : "Four essential services to keep your Kubota harvesting equipment ready for the field."}
                  </p>

                </div>

              </div>

              <div className="grid gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-4">

                <article className="group relative bg-[var(--paper)] p-7 transition duration-300 hover:bg-[var(--ink)] sm:p-8">

                  <div className="flex items-start justify-between">

                    <span className="eng text-sm font-semibold tracking-widest text-[var(--rust)]">
                      01
                    </span>

                    <div className="flex h-11 w-11 items-center justify-center border border-[var(--line)] text-lg text-[var(--ink)] transition duration-300 group-hover:border-white/30 group-hover:text-white">
                      ⚙
                    </div>

                  </div>

                  <div className="mt-12">

                    <div className="eng mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--ink-2)] transition group-hover:text-white/60">
                      HARVESTER SERVICE
                    </div>

                    <h3 className="text-xl font-bold leading-relaxed text-[var(--ink)] transition group-hover:text-white">
                      {isMyanmar
                        ? "Combine Harvester ပြင်ဆင်ရေး"
                        : "Combine Harvester Repair"}
                    </h3>

                    <p className="mt-5 text-sm leading-7 text-[var(--charcoal)] transition group-hover:text-white/75">
                      {isMyanmar
                        ? "အင်ဂျင်၊ ရိတ်သိမ်းဌာနနှင့် ခွေလှေ့စနစ် ပြင်ဆင်ခြင်း — နေရာချထားပေးခြင်း ပါဝင်"
                        : "Engine, harvesting and threshing system repairs, including on-site service and setup."}
                    </p>

                  </div>

                  <div className="mt-10 h-px w-10 bg-[var(--rust)] transition-all duration-300 group-hover:w-20" />

                </article>

                <article className="group relative bg-[var(--paper)] p-7 transition duration-300 hover:bg-[var(--ink)] sm:p-8">

                  <div className="flex items-start justify-between">

                    <span className="eng text-sm font-semibold tracking-widest text-[var(--rust)]">
                      02
                    </span>

                    <div className="flex h-11 w-11 items-center justify-center border border-[var(--line)] text-lg text-[var(--ink)] transition duration-300 group-hover:border-white/30 group-hover:text-white">
                      ◈
                    </div>

                  </div>

                  <div className="mt-12">

                    <div className="eng mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--ink-2)] transition group-hover:text-white/60">
                      GENUINE PARTS
                    </div>

                    <h3 className="text-xl font-bold leading-relaxed text-[var(--ink)] transition group-hover:text-white">
                      Genuine Spare Parts
                    </h3>

                    <p className="mt-5 text-sm leading-7 text-[var(--charcoal)] transition group-hover:text-white/75">
                      {isMyanmar
                        ? "Kubota မူရင်း အပိုပစ္စည်းများ — bearing, belt, blade, filter စသည်"
                        : "Genuine Kubota parts including bearings, belts, blades, filters and more."}
                    </p>

                  </div>

                  <div className="mt-10 h-px w-10 bg-[var(--rust)] transition-all duration-300 group-hover:w-20" />

                </article>

                <article className="group relative bg-[var(--paper)] p-7 transition duration-300 hover:bg-[var(--ink)] sm:p-8">

                  <div className="flex items-start justify-between">

                    <span className="eng text-sm font-semibold tracking-widest text-[var(--rust)]">
                      03
                    </span>

                    <div className="flex h-11 w-11 items-center justify-center border border-[var(--line)] text-lg text-[var(--ink)] transition duration-300 group-hover:border-white/30 group-hover:text-white">
                      ↗
                    </div>

                  </div>

                  <div className="mt-12">

                    <div className="eng mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--ink-2)] transition group-hover:text-white/60">
                      FIELD SERVICE
                    </div>

                    <h3 className="text-xl font-bold leading-relaxed text-[var(--ink)] transition group-hover:text-white">
                      {isMyanmar
                        ? "လယ်ကွင်းထွက် ဝန်ဆောင်မှု"
                        : "Field Service"}
                    </h3>

                    <p className="mt-5 text-sm leading-7 text-[var(--charcoal)] transition group-hover:text-white/75">
                      {isMyanmar
                        ? "ရိတ်သိမ်းချိန်တွင် လယ်ကွင်းအထိ ပြင်ဆင်ရေးအဖွဲ့ ရောက်ရှိပေးခြင်း"
                        : "Our repair team can reach the field when your machine needs support during harvest season."}
                    </p>

                  </div>

                  <div className="mt-10 h-px w-10 bg-[var(--rust)] transition-all duration-300 group-hover:w-20" />

                </article>

                <article className="group relative bg-[var(--paper)] p-7 transition duration-300 hover:bg-[var(--ink)] sm:p-8">

                  <div className="flex items-start justify-between">

                    <span className="eng text-sm font-semibold tracking-widest text-[var(--rust)]">
                      04
                    </span>

                    <div className="flex h-11 w-11 items-center justify-center border border-[var(--line)] text-lg text-[var(--ink)] transition duration-300 group-hover:border-white/30 group-hover:text-white">
                      +
                    </div>

                  </div>

                  <div className="mt-12">

                    <div className="eng mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--ink-2)] transition group-hover:text-white/60">
                      SALES & RENTAL
                    </div>

                    <h3 className="text-xl font-bold leading-relaxed text-[var(--ink)] transition group-hover:text-white">
                      {isMyanmar
                        ? "ငှားရမ်း / ရောင်းချ"
                        : "Sales & Rental"}
                    </h3>

                    <p className="mt-5 text-sm leading-7 text-[var(--charcoal)] transition group-hover:text-white/75">
                      {isMyanmar
                        ? "စက်အသစ် ရောင်းချခြင်းနှင့် ရာသီအလိုက် ငှားရမ်းခြင်း ဝန်ဆောင်မှု"
                        : "New machine sales together with seasonal rental services for harvesting needs."}
                    </p>

                  </div>

                  <div className="mt-10 h-px w-10 bg-[var(--rust)] transition-all duration-300 group-hover:w-20" />

                </article>

              </div>

              <div className="mt-8 flex flex-col gap-4 border-t border-[var(--line)] pt-7 sm:flex-row sm:items-center sm:justify-between">

                <p className="max-w-2xl text-sm leading-7 text-[var(--charcoal)]">
                  {isMyanmar
                    ? "လိုအပ်တဲ့ ဝန်ဆောင်မှုအတွက် တိုက်ရိုက်ဆက်သွယ်မေးမြန်းနိုင်ပါတယ်။"
                    : "Contact us directly to discuss the service your machine needs."}
                </p>

                <a
                  href="tel:+959799862006"
                  className="inline-flex w-fit items-center bg-[var(--rust)] px-6 py-3 text-sm font-bold text-white transition hover:bg-[var(--rust-dark)]"
                >
                  {isMyanmar
                    ? "ဝန်ဆောင်မှု မေးရန်"
                    : "Ask About Service"}
                </a>

              </div>

            </div>

          </section>

          {/* ==================================================
              PARTS
          ================================================== */}

           {/*
    PARTS
*/}
<section
  id="parts"
  className="relative scroll-mt-52 overflow-hidden bg-[var(--paper)] py-24 sm:py-28"
>
  <div className="relative mx-auto max-w-7xl px-5">

    <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

      <div>
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-10 bg-[var(--rust)]" />

          <span className="eng text-xs font-semibold uppercase tracking-[0.22em] text-[var(--rust)]">
            Spare Parts
          </span>
        </div>

        <h2 className="text-3xl font-bold leading-tight text-[var(--ink)] sm:text-4xl lg:text-5xl">
          {isMyanmar
            ? "အပိုပစ္စည်း စာရင်း"
            : "Spare Parts"}
        </h2>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--charcoal)] sm:text-base">
          {isMyanmar
            ? "နမူနာ ပစ္စည်း ၈ မျိုး — အမှန်တကယ် ပစ္စည်းစာရင်းနှင့် ဓာတ်ပုံများ အစားထိုးနိုင်ပါသည်"
            : "Sample spare parts — actual product information and images can be added later."}
        </p>
      </div>

      <div className="w-full lg:max-w-sm">
        <label
          htmlFor="parts-search"
          className="mb-2 block text-xs font-bold uppercase tracking-wider text-[var(--ink-2)]"
        >
          {isMyanmar ? "ပစ္စည်းရှာရန်" : "Search Parts"}
        </label>

        <input
          id="parts-search"
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder={
            isMyanmar
              ? "ပစ္စည်းအမည် ရှာရန်..."
              : "Search product..."
          }
          className="w-full border border-[var(--line)] bg-white px-4 py-3 text-sm text-[var(--charcoal)] outline-none transition focus:border-[var(--ink)]"
        />
      </div>

    </div>

    <div className="mb-10 flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => setSelectedCategory(category)}
          className={
            selectedCategory === category
              ? "bg-[var(--ink)] px-5 py-2.5 text-xs font-bold text-white transition hover:bg-[var(--rust)]"
              : "border border-[var(--line)] bg-white px-5 py-2.5 text-xs font-bold text-[var(--ink)] transition hover:border-[var(--ink)] hover:bg-[var(--paper-2)]"
          }
        >
          {isMyanmar
            ? categoryLabels[category].my
            : categoryLabels[category].en}
        </button>
      ))}
    </div>

    {filteredProducts.length > 0 ? (
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

        {filteredProducts.map((product, index) => (
  <article
    key={product.id}
    className="group flex flex-col overflow-hidden border border-[var(--line)] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
  >
    <div className="relative overflow-hidden">
      <DummyProductImage category={product.category} />

      <div className="absolute left-4 top-4">
        <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[var(--ink)] shadow-sm backdrop-blur">
          {isMyanmar
            ? categoryLabels[product.category].my
            : categoryLabels[product.category].en}
        </span>
      </div>

      <div className="absolute right-4 top-4">
        <span className="bg-[var(--ink)] px-2.5 py-1 text-[10px] font-bold text-white">
          0{index + 1}
        </span>
      </div>

      <div className="absolute bottom-4 left-4">
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            product.stock === "yes"
              ? "bg-[var(--green)] text-white"
              : product.stock === "low"
                ? "bg-[var(--rust)] text-white"
                : "bg-[var(--charcoal)] text-white"
          }`}
        >
          {product.stock === "yes"
            ? "● ရှိပါသည်"
            : product.stock === "low"
              ? "● အနည်းငယ်ကျန်"
              : "● ကုန်သွားပါပြီ"}
        </span>
      </div>
    </div>

    <div className="flex flex-1 flex-col p-5">
      <div className="text-[10px] font-semibold uppercase tracking-widest text-[var(--ink-2)]">
        {product.category}
      </div>

      <h3 className="mt-2 text-lg font-bold leading-relaxed text-[var(--ink)]">
        {product.name}
      </h3>

      <p className="mt-2 text-xs leading-6 text-[var(--charcoal)]">
        {product.meta}
      </p>

      <div className="mt-auto pt-6">
        <div className="flex items-end justify-between gap-3">
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-wider text-[var(--ink-2)]">
              {isMyanmar ? "ဈေးနှုန်း" : "Price"}
            </div>

            <div className="eng mt-1 text-xl font-semibold text-[var(--ink)]">
              {formatPrice(product.price)}
              <span className="ml-1 text-xs">
                MMK
              </span>
            </div>
          </div>

          <button
            type="button"
            disabled={product.stock === "no"}
            onClick={() => addToCart(product)}
            className={
              product.stock === "no"
                ? "cursor-not-allowed border border-[var(--line)] bg-[var(--paper-2)] px-4 py-3 text-xs font-bold text-[var(--charcoal)] opacity-60"
                : "bg-[var(--rust)] px-4 py-3 text-xs font-bold text-white transition hover:bg-[var(--rust-dark)]"
            }
          >
            {product.stock === "no"
              ? isMyanmar
                ? "ကုန်နေပါသည်"
                : "Out of Stock"
              : isMyanmar
                ? "ခြင်းတောင်းထဲထည့်"
                : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  </article>
))}

      </div>
    ) : (
      <div className="border border-[var(--line)] bg-white px-6 py-16 text-center">
        <div className="eng text-4xl font-semibold text-[var(--ink)] opacity-20">
          K
        </div>

        <h3 className="mt-4 text-lg font-bold text-[var(--ink)]">
          {isMyanmar
            ? "ပစ္စည်း မတွေ့ပါ"
            : "No products found"}
        </h3>

        <p className="mt-2 text-sm text-[var(--charcoal)]">
          {isMyanmar
            ? "ရှာဖွေမှု သို့မဟုတ် အမျိုးအစားကို ပြန်လည်ရွေးချယ်ကြည့်ပါ။"
            : "Try another search term or category."}
        </p>

        <button
          type="button"
          onClick={() => {
            setSearchTerm("");
            setSelectedCategory("All");
          }}
          className="mt-5 border border-[var(--ink)] px-5 py-3 text-xs font-bold text-[var(--ink)] transition hover:bg-[var(--ink)] hover:text-white"
        >
          {isMyanmar ? "အားလုံးပြရန်" : "Show All"}
        </button>
      </div>
    )}

  </div>
</section>

        </main>
      )}

      {/* ==================================================
          INVOICE VIEW
      ================================================== */}

      {activeView === "invoice" && (
        <main className="mx-auto max-w-7xl px-5 py-16">

          <div className="border border-[var(--line)] bg-white p-10 text-center">

            <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-[var(--rust)]">
              Invoice
            </div>

            <h1 className="text-3xl font-bold text-[var(--ink)]">
              {isMyanmar
                ? "ပြေစာရေးရန်"
                : "Create Invoice"}
            </h1>

            <p className="mt-4 text-[var(--charcoal)]">
              {isMyanmar
                ? "ပြေစာစနစ်ကို နောက်အဆင့်တွင် ထည့်သွင်းမည်။"
                : "The invoice system will be added in the next step."}
            </p>

          </div>

        </main>
      )}
      {cartOpen && (
  <div className="fixed inset-0 z-[100]">
    {/* BACKDROP */}
    <button
      type="button"
      aria-label="Close cart"
      onClick={() => setCartOpen(false)}
      className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
    />

    {/* CART PANEL */}
    <aside className="animate-fade-in absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white shadow-2xl">

      {/* HEADER */}
      <div className="flex items-center justify-between border-b border-[var(--line)] px-6 py-5">
        <div>
          <div className="eng text-xs font-bold uppercase tracking-widest text-[var(--rust)]">
            Shopping Cart
          </div>

          <h2 className="mt-1 text-xl font-bold text-[var(--ink)]">
            {isMyanmar ? "ခြင်းတောင်း" : "Your Cart"}
          </h2>
        </div>

        <button
          type="button"
          onClick={() => setCartOpen(false)}
          className="flex h-9 w-9 items-center justify-center border border-[var(--line)] text-lg text-[var(--ink)] transition hover:bg-[var(--paper-2)]"
        >
          ×
        </button>
      </div>

      {/* ITEMS */}
      <div className="flex-1 overflow-y-auto px-6 py-5">
        {cartItems.length === 0 ? (
          <div className="flex h-full flex-col items-center justify-center text-center">
            <div className="text-5xl">
              🛒
            </div>

            <h3 className="mt-5 text-lg font-bold text-[var(--ink)]">
              {isMyanmar
                ? "ခြင်းတောင်းထဲမှာ ပစ္စည်းမရှိသေးပါ"
                : "Your cart is empty"}
            </h3>

            <p className="mt-2 max-w-xs text-sm leading-7 text-[var(--charcoal)]">
              {isMyanmar
                ? "လိုအပ်တဲ့ အပိုပစ္စည်းတွေကို ရွေးပြီး ခြင်းတောင်းထဲ ထည့်နိုင်ပါတယ်။"
                : "Add the spare parts you need to your cart."}
            </p>

            <button
              type="button"
              onClick={() => setCartOpen(false)}
              className="mt-6 bg-[var(--rust)] px-6 py-3 text-sm font-bold text-white transition hover:bg-[var(--rust-dark)]"
            >
              {isMyanmar
                ? "ပစ္စည်းများကြည့်ရန်"
                : "Browse Parts"}
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="border border-[var(--line)] p-4"
              >
                <div className="flex gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center bg-[var(--paper-2)]">
                    <span className="eng text-2xl font-semibold text-[var(--ink)]">
                      {item.icon}
                    </span>
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-bold text-[var(--ink)]">
                      {item.name}
                    </div>

                    <div className="mt-1 text-xs text-[var(--charcoal)]">
                      {formatPrice(item.price)} MMK
                    </div>

                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center border border-[var(--line)]">
                        <button
                          type="button"
                          onClick={() =>
                            decreaseQuantity(item.id)
                          }
                          className="flex h-8 w-8 items-center justify-center text-[var(--ink)] transition hover:bg-[var(--paper-2)]"
                        >
                          −
                        </button>

                        <span className="flex h-8 min-w-9 items-center justify-center border-x border-[var(--line)] text-xs font-bold">
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            increaseQuantity(item.id)
                          }
                          className="flex h-8 w-8 items-center justify-center text-[var(--ink)] transition hover:bg-[var(--paper-2)]"
                        >
                          +
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          removeFromCart(item.id)
                        }
                        className="text-xs font-semibold text-[var(--rust)] hover:underline"
                      >
                        {isMyanmar
                          ? "ဖျက်ရန်"
                          : "Remove"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* FOOTER */}
      {cartItems.length > 0 && (
        <div className="border-t border-[var(--line)] bg-[var(--paper)] px-6 py-5">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-[var(--charcoal)]">
              {isMyanmar
                ? "စုစုပေါင်း"
                : "Total"}
            </span>

            <span className="eng text-xl font-semibold text-[var(--ink)]">
              {formatPrice(cartTotal)} MMK
            </span>
          </div>

          <div className="mt-5 grid gap-3">
            <a
              href="tel:+959799862006"
              className="flex items-center justify-center bg-[var(--rust)] px-6 py-4 text-sm font-bold text-white transition hover:bg-[var(--rust-dark)]"
            >
              {isMyanmar
                ? "ဖုန်းဖြင့် မှာယူရန်"
                : "Order by Phone"}
            </a>

            <a
              href="viber://chat?number=%2B959799862006"
              className="flex items-center justify-center border border-[var(--ink)] px-6 py-4 text-sm font-bold text-[var(--ink)] transition hover:bg-[var(--ink)] hover:text-white"
            >
              {isMyanmar
                ? "Viber ဖြင့် မှာယူရန်"
                : "Order via Viber"}
            </a>
          </div>

          <p className="mt-4 text-center text-[11px] leading-5 text-[var(--charcoal)]">
            {isMyanmar
              ? "Website မှ တိုက်ရိုက်ငွေပေးချေမှု မပြုလုပ်ပါ။ ဖုန်း / Viber ဖြင့် အတည်ပြုပြီး ဆိုင်တွင် ငွေချေနိုင်ပါသည်။"
              : "No online payment is required. Confirm your order by phone or Viber and pay at the shop."}
          </p>
        </div>
      )}
    </aside>
  </div>
)}
    </div>
  );
}

export default App;