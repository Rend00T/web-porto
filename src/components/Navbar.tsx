import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, Sun, Moon } from 'lucide-react';
import { useSmoothScroll } from '../context/SmoothScrollContext';
import { useTheme } from '../context/ThemeContext';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollTo } = useSmoothScroll();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'work', 'technical-profile', 'contact'];
      const scrollPosition = window.scrollY + 220;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Portfolio', href: '#work' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (href === '#home') {
      scrollTo('#home');
      window.history.pushState(null, '', '#home');
      return;
    }

    scrollTo(href);
    window.history.pushState(null, '', href);
  };

  return (
    <header className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1.5rem)] sm:w-auto max-w-5xl">
      <div className="bg-white/85 dark:bg-[#141414]/90 backdrop-blur-xl border border-[#E5E5E5] dark:border-[#282828] rounded-full px-3 sm:px-5 py-2 sm:py-2.5 flex items-center justify-between gap-2 sm:gap-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-200">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center space-x-2 pl-1 pr-2 py-1 rounded-full group focus:outline-none"
          aria-label="Raihan Fahri - Home"
        >
          <span className="w-6 h-6 rounded-full bg-[#171717] dark:bg-white text-white dark:text-[#171717] flex items-center justify-center font-bold text-[10px] tracking-tight transition-transform group-hover:scale-105">
            RF
          </span>
          <span className="font-mono text-xs font-semibold tracking-tight text-[#171717] dark:text-[#F5F5F5]">
            raihan<span className="text-[#858585] dark:text-[#737373]">.dev</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3 py-1.5 rounded-full text-xs font-mono tracking-tight transition-all duration-150 ${
                  isActive
                    ? 'bg-[#171717] dark:bg-white text-white dark:text-[#171717] font-semibold shadow-xs'
                    : 'text-[#666666] dark:text-[#A3A3A3] hover:text-[#171717] dark:hover:text-white hover:bg-[#F2F2F2] dark:hover:bg-[#202020]'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center space-x-1 sm:space-x-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-1.5 sm:p-2 rounded-full text-[#666666] dark:text-[#A3A3A3] hover:text-[#171717] dark:hover:text-white hover:bg-[#F2F2F2] dark:hover:bg-[#222222] transition-colors focus:outline-none"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-neutral-300 hover:text-white transition-colors" />
            ) : (
              <Moon className="w-4 h-4 text-neutral-700 hover:text-black transition-colors" />
            )}
          </button>

          <a
            href="/CV_Raihan_Fahri_Ghazali.pdf"
            download="CV_Raihan_Fahri_Ghazali.pdf"
            className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-[#F2F2F2] dark:bg-[#202020] hover:bg-[#EBEBEB] dark:hover:bg-[#2A2A2A] text-[#171717] dark:text-[#F5F5F5] text-xs font-mono font-medium border border-[#E5E5E5] dark:border-[#333333] transition-colors"
          >
            <FileDown className="w-3.5 h-3.5 text-[#666666] dark:text-[#A3A3A3]" />
            <span>CV</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-full text-[#171717] dark:text-[#F5F5F5] hover:bg-[#F2F2F2] dark:hover:bg-[#222222] border border-[#E5E5E5] dark:border-[#282828] focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden mt-2 bg-white/95 dark:bg-[#141414]/95 backdrop-blur-xl border border-[#E5E5E5] dark:border-[#282828] rounded-2xl p-4 shadow-xl animate-fadeIn">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-2 rounded-xl text-xs font-mono transition-colors ${
                    isActive
                      ? 'bg-[#171717] dark:bg-white text-white dark:text-[#171717] font-semibold'
                      : 'text-[#666666] dark:text-[#A3A3A3] hover:text-[#171717] dark:hover:text-white hover:bg-[#F2F2F2] dark:hover:bg-[#202020]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-2 mt-1 border-t border-[#E5E5E5] dark:border-[#282828] flex items-center justify-between">
              <a
                href="/CV_Raihan_Fahri_Ghazali.pdf"
                download="CV_Raihan_Fahri_Ghazali.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#F2F2F2] dark:bg-[#202020] text-[#171717] dark:text-[#F5F5F5] text-xs font-mono border border-[#E5E5E5] dark:border-[#333333]"
              >
                <FileDown className="w-3.5 h-3.5 text-[#666666] dark:text-[#A3A3A3]" />
                <span>Download CV</span>
              </a>

              <span className="text-[11px] font-mono text-[#858585] dark:text-[#737373]">
                ITS Surabaya
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
