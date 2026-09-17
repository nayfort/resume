import { useTranslation } from "react-i18next";
import SectionCard from "../ui/SectionCard";
export default function Langs() {
  const { t } = useTranslation();
  return (
    <SectionCard
      id="languages"
      title={t("languages")}
      className="languagesCard"
    >
      <dl className="languageLevels">
        {(["english", "polish", "ukrainian"] as const).map((key) => (
          <div key={key}>
            <dt>{t(`spoken.${key}.name`)}</dt>
            <dd>{t(`spoken.${key}.level`)}</dd>
          </div>
        ))}
      </dl>
    </SectionCard>
  );
}
