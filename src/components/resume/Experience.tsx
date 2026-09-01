import '../styles.css';
import { useTranslation } from 'react-i18next';
import { Card, Divider } from 'antd';

const Experience = () => {
  const { t } = useTranslation();

  return (
    <div className="experienceSection" id="experience">
      <div className="expBlockTitle">{t('experience')}:</div>

      <Card title="TapOk (December 2024 - June 2026 — Frontend Developer)" className='experienceCard'>
        <p className="expText">
          <b>Responsibilities & Contributions:</b>
          <br/>
          <br/>
          • Developed and maintained internal scripts.
          <br/>
          • Designed and refined prompts for AI-powered tools and workflows.
          <br/>
          • Built and maintained workflows using n8n.
          <br/>
          • Contributed to AI initiatives by exploring and implementing practical AI solutions.
        </p>
      </Card>

      <Divider />

      <Card title="BetTV (July 2023 - July 2024 — Frontend Developer)" className='experienceCard'>
        <p className="expText">
          <b>Responsibilities & Contributions:</b>
          <br/>
          <br/>
          • Developed and maintained a large-scale betting platform using React.
          <br/>
          • Built reusable UI components and responsive page layouts.
          <br/>
          • Integrated REST APIs and handled dynamic client-side data.
          <br/>
          • Implemented internationalization (i18n).
          <br/>
          • Collaborated with backend developers and designers.
        </p>
      </Card>

      <Divider />

      <Card title="Qulisoft (March 2023 - July 2023 — React Native Developer)" className='experienceCard'>
        <p className="expText">
          <b>Responsibilities & Contributions:</b>
          <br/>
          <br/>
          • Modernized legacy React Native applications through refactoring and dependency upgrades.
          <br/>
          • Delivered UI improvements and resolved compatibility issues.
          <br/>
          • Managed iOS builds and production releases via Xcode and App Store Connect.
          <br/>
          • Maintained and enhanced existing mobile applications.
        </p>
      </Card>

      <Divider />

      <Card title="NerdLab (March 2022 - July 2023 — Frontend Developer)" className='experienceCard'>
        <p className="expText">
          <b>Responsibilities & Contributions:</b>
          <br/>
          <br/>
          • Built and maintained web and mobile apps using React, TypeScript, and React Native.
          <br/>
          • Developed reusable UI components, interactive forms, and responsive layouts.
          <br/>
          • Integrated REST APIs and backend services using Node.js and TypeORM.
          <br/>
          • Implemented core calculation algorithms and business logic.
          <br/>
          • Optimized performance, refactored code, and improved UI consistency.
          <br/>
          • Collaborated with backend developers and senior engineers on feature delivery.
        </p>
      </Card>
    </div>
  );
};

export default Experience;
