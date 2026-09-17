import ExternalLink from "../ui/ExternalLink";
import { useTranslation } from "react-i18next";
import { useClipboard } from "../../hooks/useClipboard";
import { profile } from "../../data/profile";
import SectionCard from "../ui/SectionCard";

export default function About() {
  const { t } = useTranslation();
  const { copy, status } = useClipboard();
  const links = [
    { label: t("email"), text: profile.email, href: `mailto:${profile.email}` },
    {
      label: "LinkedIn",
      text: "linkedin.com/in/nayfort",
      href: profile.linkedin,
    },
    { label: "GitHub", text: "github.com/nayfort", href: profile.github },
    { label: "Telegram", text: "@nayfort", href: profile.telegram },
  ];
  return (
    <SectionCard id="contacts" title={t("contacts")} className="aboutCard">
      <div className="contactGrid">
        {links.map((link) => (
          <div className="contactItem" key={link.label}>
            <span>{link.label}</span>
            <ExternalLink href={link.href} className="profileLinks">
              {link.text}
            </ExternalLink>
          </div>
        ))}
      </div>
      <div className="copyEmailRow">
        <button
          className="actionButton"
          type="button"
          onClick={() => copy(profile.email)}
        >
          {t("copyEmail")}
        </button>
        <span role="status">
          {status === "copied"
            ? t("copied")
            : status === "error"
              ? t("copyFailed")
              : ""}
        </span>
      </div>
    </SectionCard>
  );
}
