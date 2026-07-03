import './styles.css';
import { useTranslation } from 'react-i18next';
import { Card, Divider } from 'antd';

const Experience = () => {
  const { t } = useTranslation();

  return (
    <div className="experienceSection" id="experience">
      <div className="expBlockTitle">{t('experience')}:</div>

      <Card title="TapOk (December 2024 / June 2026 - Frontend Developer)" className='experienceCard'>
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

      <Card title="BetTV (July 2023 / July 2024 - Frontend Developer)" className='experienceCard'>
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

      <Card title="Qulisoft (March 2023 / July 2023 - React Native Developer)" className='experienceCard'>
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
        <p className="expText">
          • Knots 3D – Refactoring, UI modernization, dependency updates.
          <br/>
          • VPN App – Library migration, iOS releases, App Store deployment.
          <br/>
          • Finance Calculator – UI improvements, maintenance, bug fixes.
        </p>
      </Card>

      <Divider />

      <Card title="NerdLab (March 2022 / July 2023 - Frontend Developer)" className='experienceCard'>
        <p className="expText">
          <b>Responsibilities & Contributions:</b>
          <br/>
          <br/>
          • Developed and maintained React and TypeScript web applications.
          <br/>
          • Built reusable UI components and integrated REST APIs.
          <br/>
          • Worked with MongoDB and MySQL databases.
          <br/>
          • Improved existing features through optimization and refactoring.
          <br/>
          • Collaborated with senior developers on feature delivery.
        </p>
        <p className="expText">
          <b>Projects:</b>
          <br/>
          • NerdLab Zeus — Admin panel for managing and viewing 3D assets
          <br/>
          <br/>
          Highlights:
          • Developed reusable UI components for the admin panel.
          <br/>
          • Implemented forms, tables, and settings pages.
          <br/>
          • Collaborated with backend developers to integrate APIs.
          <br/>
          <br/>
          • Synergy Hub — Full-stack application
          <br/>
          <br/>
          Highlights:
          <br/>
          • Integrated backend services using Node.js and TypeORM.
          <br/>
          • Implemented REST API endpoints and business logic.
          <br/>
          • Collaborated with senior developers on architecture and feature delivery.
          <br/>
          <br/>
          • BetHead — Sports betting frontend
          <br/>
          <br/>
          Highlights:
          <br/>
          • Customized interactive UI components for the betting platform.
          <br/>
          • Implemented responsive layouts and graphical interface elements.
          <br/>
          • Improved usability and consistency across application screens.
          <br/>
          <br/>
          • Truck Loading — Mobile calculator app
          <br/>
          <br/>
          Highlights:
          <br/>
          • Implemented calculation algorithms for truck loading scenarios.
          <br/>
          • Developed responsive mobile UI using React Native.
          <br/>
          • Integrated business logic with user-friendly input forms.
        </p>
      </Card>
    </div>
  );
};

export default Experience;
