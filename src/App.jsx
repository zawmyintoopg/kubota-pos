import { useState } from "react";

function App() {
  const [activeView, setActiveView] = useState("store");
  const [language, setLanguage] = useState("my");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

      <div className="bg-[var(--ink)] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2 text-xs sm:text-sm">
          <div>
            {isMyanmar
              ? "ကျောက်တန်းမြို့နယ် · ဝဲကြီးကျေးရွာ"
              : "Kyaik Tan Township · Wai Gyi Village"}
          </div>

          <a
            href="tel:+959799862006"
            className="transition hover:text-[var(--rust)]"
          >
            Ph: 09-799862006
          </a>
        </div>
      </div>

      {/* ==================================================
          MAIN HEADER
      ================================================== */}

      <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-white/95 backdrop-blur">

        <div className="mx-auto max-w-7xl px-5">

          {/* ==================================================
              BRAND ROW
          ================================================== */}

          <div className="relative flex min-h-32 items-center justify-center py-5 sm:min-h-36">

            {/* LEFT DECORATION */}

            <div className="absolute left-0 hidden items-center gap-3 lg:flex">
              <div className="h-px w-8 bg-[var(--line)]" />

              <span className="eng text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--ink-2)]">
                Since 25+ Years
              </span>
            </div>

            {/* CENTER BRAND */}

            <a
              href="#home"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("#home");
              }}
              className="group flex flex-col items-center text-center"
            >
              <div className="flex h-12 w-12 items-center justify-center bg-[var(--ink)] text-base font-bold tracking-wider text-white transition duration-300 group-hover:bg-[var(--rust)] sm:h-14 sm:w-14 sm:text-lg">
                TNH
              </div>

              <div className="mt-3 text-xl font-bold leading-tight text-[var(--ink)] sm:text-2xl">
                {isMyanmar ? "မိဘာဂတ်ရှိန်" : "Mi Bar Gat Shin"}
              </div>

              <div className="mt-1 text-xs font-semibold leading-5 text-[var(--ink-2)] sm:text-sm">
                {isMyanmar
                  ? "Kubota ကိုသက်နိုင်ထူး နှင့် ညီများ"
                  : "Kubota Ko Thet Naing Htoo & Brothers"}
              </div>

              <div className="mt-1 hidden text-xs leading-5 text-[var(--charcoal)] sm:block">
                {isMyanmar
                  ? "ကူဘိုတာစပါးရိတ်ချွေစက် ၊ ပဲရိတ်ချွေစက် ပြုပြင်ရောင်းဝယ်ရေး"
                  : "Kubota Rice & Bean Harvester Service and Sales"}
              </div>
            </a>

            {/* RIGHT ACTIONS */}

            <div className="absolute right-0 hidden items-center gap-2 lg:flex">

              {/* PHONE */}

              <a
                href="tel:+959799862006"
                className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-[var(--ink)] transition hover:text-[var(--rust)]"
              >
                <span className="text-base">☎</span>
                <span>09-799862006</span>
              </a>

              {/* LANGUAGE */}

              <div className="flex items-center border border-[var(--line)]">
                <button
                  type="button"
                  onClick={() => setLanguage("my")}
                  className={`px-3 py-2 text-xs font-bold transition ${
                    isMyanmar
                      ? "bg-[var(--ink)] text-white"
                      : "text-[var(--ink)] hover:bg-[var(--paper-2)]"
                  }`}
                >
                  မြန်မာ
                </button>

                <button
                  type="button"
                  onClick={() => setLanguage("en")}
                  className={`px-3 py-2 text-xs font-bold transition ${
                    !isMyanmar
                      ? "bg-[var(--ink)] text-white"
                      : "text-[var(--ink)] hover:bg-[var(--paper-2)]"
                  }`}
                >
                  EN
                </button>
              </div>

              {/* CART */}

              <button
                type="button"
                className="relative flex h-10 w-10 items-center justify-center border border-[var(--line)] text-lg text-[var(--ink)] transition hover:border-[var(--ink)] hover:bg-[var(--paper-2)]"
                aria-label={isMyanmar ? "ခြင်းတောင်း" : "Shopping cart"}
              >
                🛒

                <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[var(--rust)] px-1 text-[10px] font-bold text-white">
                  0
                </span>
              </button>

            </div>

            {/* MOBILE ACTIONS */}

            <div className="absolute right-0 flex items-center gap-2 lg:hidden">

              <button
                type="button"
                onClick={() => setLanguage(isMyanmar ? "en" : "my")}
                className="flex h-10 min-w-10 items-center justify-center border border-[var(--line)] px-2 text-xs font-bold text-[var(--ink)]"
              >
                {isMyanmar ? "EN" : "MM"}
              </button>

              <button
                type="button"
                className="relative flex h-10 w-10 items-center justify-center border border-[var(--line)] text-lg text-[var(--ink)]"
                aria-label={isMyanmar ? "ခြင်းတောင်း" : "Shopping cart"}
              >
                🛒

                <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[var(--rust)] px-1 text-[10px] font-bold text-white">
                  0
                </span>
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex h-10 w-10 items-center justify-center border border-[var(--line)] text-xl text-[var(--ink)]"
                aria-label={isMyanmar ? "မီနူးဖွင့်ရန်" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? "×" : "☰"}
              </button>

            </div>

          </div>

          {/* ==================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <div className="hidden border-t border-[var(--line)] lg:block">

            <div className="flex min-h-14 items-center justify-center">

              <nav className="flex items-center">

                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => scrollToSection(item.href)}
                    className="group relative px-5 py-4 text-sm font-semibold text-[var(--ink)] transition hover:text-[var(--rust)]"
                  >
                    {isMyanmar ? item.my : item.en}

                    <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-[var(--rust)] transition-all duration-300 group-hover:w-7" />
                  </button>
                ))}

                {/* STORE */}

                <button
                  type="button"
                  onClick={() => setActiveView("store")}
                  className="ml-3 flex items-center gap-2 bg-[var(--rust)] px-5 py-3 text-sm font-bold text-white transition hover:bg-[var(--rust-dark)]"
                >
                  <span>
                    {isMyanmar ? "စတိုးဆိုင်" : "Store"}
                  </span>

                  <span>↗</span>
                </button>

              </nav>

            </div>

          </div>

          {/* ==================================================
              MOBILE MENU
          ================================================== */}

          {mobileMenuOpen && (
            <div className="border-t border-[var(--line)] py-4 lg:hidden">

              {/* LANGUAGE */}

              <div className="mb-4 flex border border-[var(--line)]">

                <button
                  type="button"
                  onClick={() => setLanguage("my")}
                  className={`flex-1 py-3 text-sm font-bold ${
                    isMyanmar
                      ? "bg-[var(--ink)] text-white"
                      : "text-[var(--ink)]"
                  }`}
                >
                  မြန်မာ
                </button>

                <button
                  type="button"
                  onClick={() => setLanguage("en")}
                  className={`flex-1 py-3 text-sm font-bold ${
                    !isMyanmar
                      ? "bg-[var(--ink)] text-white"
                      : "text-[var(--ink)]"
                  }`}
                >
                  English
                </button>

              </div>

              {/* MENU LINKS */}

              <nav className="flex flex-col">

                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => scrollToSection(item.href)}
                    className="border-b border-[var(--line)] px-3 py-4 text-left text-sm font-semibold text-[var(--ink)] transition hover:bg-[var(--paper-2)]"
                  >
                    {isMyanmar ? item.my : item.en}
                  </button>
                ))}

              </nav>

              {/* MOBILE STORE */}

              <button
                type="button"
                onClick={() => {
                  setActiveView("store");
                  setMobileMenuOpen(false);
                }}
                className="mt-4 w-full bg-[var(--rust)] px-4 py-4 text-left text-sm font-bold text-white"
              >
                {isMyanmar
                  ? "စတိုးဆိုင်သို့ ဝင်ရန် →"
                  : "Visit Store →"}
              </button>

            </div>
          )}

        </div>

      </header>

      {/* ==================================================
          STORE VIEW
      ================================================== */}

      {activeView === "store" && (
        <main>

          {/* ==================================================
              HERO
          ================================================== */}

          <section
            id="home"
            className="relative overflow-hidden border-b border-[var(--line)]"
          >

            <div className="absolute inset-0">

              <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[var(--paper-2)] opacity-70" />

              <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-[var(--paper-2)] opacity-60" />

            </div>

            <div className="relative mx-auto max-w-7xl px-5 py-20 sm:py-24 lg:py-28">

              <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

                <div>

                  <div className="mb-6 flex items-center gap-3">

                    <span className="h-px w-10 bg-[var(--rust)]" />

                    <span className="eng text-sm font-semibold uppercase tracking-[0.18em] text-[var(--rust)]">
                      Kubota Harvester Service & Spare Parts
                    </span>

                  </div>

                  <h1 className="max-w-3xl text-4xl font-bold leading-[1.35] text-[var(--ink)] sm:text-5xl lg:text-6xl">

                    {isMyanmar ? (
                      <>
                        ရိတ်သိမ်းချိန်မှာ
                        <br />

                        <span className="text-[var(--rust)]">
                          စက်ရပ်တာ မခံစားရအောင်
                        </span>

                        <br />

                        ကူညီပါတယ်
                      </>
                    ) : (
                      <>
                        Keep Your
                        <br />

                        <span className="text-[var(--rust)]">
                          Harvest Running
                        </span>

                        <br />

                        When It Matters Most
                      </>
                    )}

                  </h1>

                  <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--charcoal)] sm:text-lg">
                    {isMyanmar
                      ? "ကူဘိုတာ ရိတ်သိမ်းခွေလှေ့စက်နှင့် ပဲရိတ်စက်များအတွက် မူရင်းအပိုပစ္စည်းများ၊ ပြင်ဆင်မှုဝန်ဆောင်မှုနှင့် ၂၅ နှစ်ကျော် အတွေ့အကြုံ။ လိုအပ်တဲ့ ပစ္စည်းကို ဖုန်း (သို့) Viber နဲ့ တိုက်ရိုက်မှာယူနိုင်ပါတယ်။"
                      : "Genuine spare parts, repair services and more than 25 years of experience for Kubota combine and bean harvesters. Order the parts you need directly by phone or Viber."}
                  </p>

                  <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                    <a
                      href="tel:+959799862006"
                      className="inline-flex items-center justify-center bg-[var(--rust)] px-7 py-4 text-sm font-bold text-white transition hover:bg-[var(--rust-dark)]"
                    >
                      {isMyanmar
                        ? "ဖုန်းခေါ်ရန် — 09-799862006"
                        : "Call Us — 09-799862006"}
                    </a>

                    <button
                      type="button"
                      onClick={() => scrollToSection("#parts")}
                      className="inline-flex items-center justify-center border border-[var(--ink)] px-7 py-4 text-sm font-bold text-[var(--ink)] transition hover:bg-[var(--ink)] hover:text-white"
                    >
                      {isMyanmar
                        ? "အပိုပစ္စည်းများ ကြည့်ရန်"
                        : "View Spare Parts"}
                    </button>

                  </div>

                  <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-[var(--line)] pt-7">

                    <div>
                      <div className="eng text-3xl font-semibold text-[var(--ink)]">
                        25+
                      </div>

                      <div className="mt-1 text-sm text-[var(--charcoal)]">
                        {isMyanmar
                          ? "နှစ်ကျော် အတွေ့အကြုံ"
                          : "Years of Experience"}
                      </div>
                    </div>

                    <div className="h-12 w-px bg-[var(--line)]" />

                    <div>
                      <div className="eng text-3xl font-semibold text-[var(--ink)]">
                        Kubota
                      </div>

                      <div className="mt-1 text-sm text-[var(--charcoal)]">
                        Harvester Service
                      </div>
                    </div>

                  </div>

                </div>

                {/* ==================================================
                    HERO VISUAL
                ================================================== */}

                <div className="relative">

                  <div className="relative mx-auto max-w-lg">

                    <div className="relative aspect-[4/3] overflow-hidden bg-[var(--ink)]">

                      <div className="absolute inset-0 opacity-20">

                        <div className="absolute left-8 top-8 h-32 w-32 border border-white" />

                        <div className="absolute bottom-8 right-8 h-44 w-44 border border-white" />

                        <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white" />

                      </div>

                      <div className="absolute inset-0 flex items-center justify-center">

                        <div className="text-center">

                          <div className="mx-auto flex h-28 w-28 items-center justify-center border-2 border-[var(--rust)] text-4xl font-bold text-white">
                            K
                          </div>

                          <div className="mt-6 eng text-2xl font-semibold tracking-wide text-white">
                            KUBOTA
                          </div>

                          <div className="mt-2 text-sm text-white/70">
                            HARVESTER SERVICE
                          </div>

                        </div>

                      </div>

                      <div className="absolute bottom-0 left-0 h-2 w-32 bg-[var(--rust)]" />

                    </div>

                    <div className="absolute -bottom-7 -left-5 bg-white p-5 shadow-xl sm:-left-8">

                      <div className="flex items-center gap-4">

                        <div className="flex h-12 w-12 items-center justify-center bg-[var(--paper-2)] text-xl font-bold text-[var(--rust)]">
                          ✓
                        </div>

                        <div>

                          <div className="text-sm font-bold text-[var(--ink)]">
                            Genuine Spare Parts
                          </div>

                          <div className="mt-1 text-xs text-[var(--charcoal)]">
                            {isMyanmar
                              ? "မူရင်း အပိုပစ္စည်းများ"
                              : "Original Kubota Parts"}
                          </div>

                        </div>

                      </div>

                    </div>

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

          <section
            id="parts"
            className="mx-auto max-w-7xl px-5 py-20"
          >
            <div className="border border-[var(--line)] bg-white p-10 text-center">
              <h2 className="text-3xl font-bold text-[var(--ink)]">
                {isMyanmar ? "အပိုပစ္စည်းများ" : "Spare Parts"}
              </h2>
            </div>
          </section>

          {/* ==================================================
              CONTACT
          ================================================== */}

          <section
            id="contact"
            className="mx-auto max-w-7xl px-5 py-20"
          >
            <div className="border border-[var(--line)] bg-white p-10 text-center">
              <h2 className="text-3xl font-bold text-[var(--ink)]">
                {isMyanmar ? "ဆက်သွယ်ရန်" : "Contact Us"}
              </h2>
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

    </div>
  );
}

export default App;