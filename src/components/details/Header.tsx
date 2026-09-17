import React from "react";
import { useActiveSection } from "../../hooks/useActiveSection";
import { sectionIds } from "../../data/profile";

import "./styles.css";
import { useTheme } from "../../hooks/useTheme";
import { useTranslation } from "react-i18next";
import { Dropdown } from "antd";
import en from "../../assets/enFlag.png";
import ua from "../../assets/uaFlag.png";
import pl from "../../assets/plFlag.png";

const languages = {
  en: { flag: en, label: "English" },
  ua: { flag: ua, label: "Українська" },
  pl: { flag: pl, label: "Polski" },
};

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const activeSection = useActiveSection(sectionIds);
  const currentLanguage =
    languages[i18n.resolvedLanguage as keyof typeof languages] || languages.en;

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const languageMenu = {
    selectedKeys: [i18n.resolvedLanguage || "en"],
    onClick: ({ key }: { key: string }) => changeLanguage(key),
    items: Object.entries(languages).map(([key, language]) => ({
      key,
      label: (
        <span className="langElTitle">
          <img src={language.flag} alt="" className="changeButton" />
          {language.label}
        </span>
      ),
    })),
  };

  return (
    <header className="headerContainer">
      <a className="skipLink" href="#main-content">
        {t("skip")}
      </a>
      <div className="headerContent">
        <a href="#hero" className="navLink">
          {t("name")}
        </a>
        <nav className="linksContainer" aria-label={t("navigation")}>
          {sectionIds.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="navLink sectionLink"
              aria-current={activeSection === id ? "location" : undefined}
            >
              {t(id)}
            </a>
          ))}
        </nav>
      </div>
      <div className="rightControls">
        <div className="mobileNavigation">
          <Dropdown
            menu={{
              selectedKeys: [activeSection],
              items: sectionIds.map((id) => ({
                key: id,
                label: (
                  <a
                    href={`#${id}`}
                    aria-current={activeSection === id ? "location" : undefined}
                  >
                    {t(id)}
                  </a>
                ),
              })),
            }}
            overlayClassName="languageDropdown"
            trigger={["click"]}
          >
            <button
              type="button"
              className="headerIconButton"
              aria-label={t("navigation")}
              title={t("navigation")}
              aria-haspopup="menu"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </Dropdown>
        </div>
        <button
          type="button"
          onClick={toggleTheme}
          className="headerIconButton"
          aria-label={t("themeLabel")}
          title={t("themeLabel")}
        >
          <svg
            className="themeIcon"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {theme === "dark" ? (
              <>
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
              </>
            ) : (
              <path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z" />
            )}
          </svg>
        </button>
        <Dropdown
          menu={languageMenu}
          overlayClassName="languageDropdown"
          trigger={["click"]}
        >
          <button
            type="button"
            className="headerIconButton"
            aria-label={`${t("lang")}: ${currentLanguage.label}`}
            title={currentLanguage.label}
            aria-haspopup="menu"
          >
            <img src={currentLanguage.flag} alt="" className="changeButton" />
          </button>
        </Dropdown>
      </div>
    </header>
  );
};

export default Header;
