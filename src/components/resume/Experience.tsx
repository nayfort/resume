import { useTranslation } from "react-i18next";
import { Card } from "antd";
import { jobs } from "../../data/experience";
import TagList from "../ui/TagList";

export default function Experience() {
  const { t } = useTranslation();
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="experienceSection"
    >
      <h2 id="experience-title" className="sectionTitle">
        {t("experience")}
      </h2>
      <div className="experienceGrid">
        {jobs.map((job) => (
          <Card key={job.id} className="experienceCard">
            <div className="jobHeading">
              <div>
                <h3>{job.company}</h3>
                <p className="jobRole">{job.role}</p>
              </div>
              <span className="jobDates">{job.dates}</span>
            </div>
            <ul className="contributionList">
              {t(`jobs.${job.id}`, { returnObjects: true }).map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <TagList items={job.stack} label={t("technologies")} />
          </Card>
        ))}
      </div>
    </section>
  );
}
