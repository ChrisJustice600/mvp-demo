/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "./menuData";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const usePathName = usePathname();

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Empêcher le défilement du body quand le modal est ouvert
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isModalOpen]);

  return (
    <>
      <header
        className={`header left-0 top-0 z-40 flex w-full items-center ${
          sticky
            ? "fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition dark:bg-gray-dark dark:shadow-sticky-dark"
            : "absolute bg-transparent"
        }`}
      >
        <div className="container">
          <div className="relative flex items-center justify-between -mx-4">
            <div className="max-w-full px-4 w-60 xl:mr-12">
              <Link
                href="/"
                className={`header-logo block w-full ${
                  sticky ? "py-5 lg:py-2" : "py-8"
                } `}
              >
                <img
                  src="/INBTP.png"
                  alt="logo"
                  className="w-10 h-auto dark:hidden"
                />
                <img
                  src="/INBTP.png"
                  alt="logo"
                  className="hidden w-10 h-auto dark:block"
                />
              </Link>
            </div>
            <div className="flex items-center justify-between w-full px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0 " : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="block lg:flex lg:space-x-12">
                    {menuData.map((menuItem, index) => (
                      <li key={index} className="relative group">
                        {menuItem.path ? (
                          <Link
                            href={menuItem.path}
                            className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
                              usePathName === menuItem.path
                                ? "text-primary dark:text-white"
                                : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                            }`}
                          >
                            {menuItem.title}
                          </Link>
                        ) : (
                          <>
                            <p
                              onClick={() => handleSubmenu(index)}
                              className="flex items-center justify-between py-2 text-base cursor-pointer text-dark group-hover:text-primary dark:text-white/70 dark:group-hover:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6"
                            >
                              {menuItem.title}
                              <span className="pl-3">
                                <svg width="25" height="24" viewBox="0 0 25 24">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </p>
                            <div
                              className={`submenu relative left-0 top-full rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                                openIndex === index ? "block" : "hidden"
                              }`}
                            >
                              {menuItem.submenu.map((submenuItem, index) => (
                                <Link
                                  href={submenuItem.path}
                                  key={index}
                                  className="block rounded py-2.5 text-sm text-dark hover:text-primary dark:text-white/70 dark:hover:text-white lg:px-3"
                                >
                                  {submenuItem.title}
                                </Link>
                              ))}
                            </div>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="flex items-center justify-end gap-2 pr-16 ml-2 lg:pr-0">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="hidden px-4 py-3 text-sm font-medium text-white transition duration-300 rounded-sm ease-in-up bg-primary shadow-btn hover:bg-opacity-90 hover:shadow-btn-hover md:block md:px-9 lg:px-6 xl:px-9"
                >
                  ZONE ETUDIANT
                </button>

                <Link
                  href="/admission"
                  className="hidden px-4 py-3 text-sm font-medium text-white transition duration-300 rounded-sm ease-in-up bg-primary shadow-btn hover:bg-opacity-90 hover:shadow-btn-hover md:block md:px-9 lg:px-6 xl:px-9"
                >
                  ADMISSION
                </Link>
                {/* <div>
                  <ThemeToggler />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Modal personnalisé */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Overlay avec effet de flou */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />

          {/* Contenu du modal avec animation */}
          <div className="animate-modal-enter relative w-[90%] max-w-3xl transform rounded-xl bg-white shadow-2xl transition-all duration-300 ease-in-out dark:bg-gray-800">
            {/* Bouton de fermeture */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute p-2 transition-colors duration-200 rounded-full right-4 top-4 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <svg
                className="w-6 h-6 text-gray-500 dark:text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Contenu principal */}
            <div className="flex flex-col md:flex-row">
              {/* Section QR Code */}
              <div className="flex items-center justify-center p-8 border-b border-gray-200 dark:border-gray-700 md:w-1/2 md:border-b-0 md:border-r">
                <div className="relative group">
                  <Image
                    src="/qrcode1.png"
                    alt="QR Code Application"
                    width={250}
                    height={250}
                    className="transition-transform duration-300 shadow-lg rounded-xl group-hover:scale-105"
                  />
                  <div className="absolute inset-0 transition-opacity duration-300 opacity-0 rounded-xl bg-primary/10 group-hover:opacity-100" />
                </div>
              </div>

              {/* Section Description */}
              <div className="p-8 md:w-1/2">
                <h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white">
                  Application Mobile Étudiante
                </h2>
                <p className="mb-6 text-gray-600 dark:text-gray-300">
                  Scannez ce QR code pour télécharger notre application mobile
                  dédiée aux étudiants. Accédez à votre espace personnel en
                  quelques secondes !
                </p>

                {/* Liste des fonctionnalités */}
                <ul className="space-y-4">
                  {[
                    "Accès à votre emploi du temps",
                    "Consultation des notes",
                    "Communication avec les professeurs",
                    "Notifications en temps réel",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 mt-1 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Badge téléchargement */}
                <div className="inline-block mt-8">
                  <span className="px-4 py-2 text-sm font-medium rounded-full bg-primary/10 text-primary">
                    Disponible sur iOS et Android
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
