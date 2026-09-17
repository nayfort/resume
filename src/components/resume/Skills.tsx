import SectionCard from "../ui/SectionCard";
import TagList from "../ui/TagList";
import { skillGroups } from "../../data/skills";
import { useTranslation } from "react-i18next";

export default function Skills() {
  const { t } = useTranslation();
  return (
    <SectionCard id="skills" title={t("skills")} className="skillsCard">
      <div className="skillsGrid">
        {skillGroups.map(([key, skills]) => (
          <div
            key={key}
            className={key === "core" ? "skillGroup coreSkills" : "skillGroup"}
          >
            <h3>{t(`skillGroups.${key}`)}</h3>
            <TagList items={skills} />
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
