import ExternalLink from "../ui/ExternalLink";
import { useTranslation } from "react-i18next";
import SectionCard from "../ui/SectionCard";
export default function Education() {
  const { t } = useTranslation();
  return (
    <SectionCard
      id="education"
      title={t("education")}
      className="educationCard"
    >
      <div className="educationEntry">
        <span className="jobDates">2023 — 2027 · {t("expected")}</span>
        <h3>
          <ExternalLink href="https://www.kpi.kharkov.ua/eng/">
            {t("university")}
          </ExternalLink>
        </h3>
        <p>{t("degree")}</p>
        <p className="mutedText">{t("schedule")}</p>
      </div>
      <div className="educationEntry">
        <span className="jobDates">2019 — 2022</span>
        <h3>
          <ExternalLink href="https://kr.itstep.org/">
            STEP: IT Academy
          </ExternalLink>
        </h3>
        <p>{t("courses")}</p>
      </div>
    </SectionCard>
  );
}
