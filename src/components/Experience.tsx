import './styles.css';
import { useTranslation } from 'react-i18next';
import { Card, Divider } from 'antd';

const Experience = () => {
  const { t } = useTranslation();

  return (
    <div className="experienceSection">
      <div className="expBlockTitle">{t('experience')}:</div>

      <Card title="BetTV (July 2023 / July 2024 - Junior Front-end Developer)" className='experienceCard'>
        <p className="expText">
          <b>Responsibilities & Contributions:</b>
          <br/>
          • Developed and maintained a large-scale web platform for online betting
          <br/>
          • Implemented custom frontend functionality using React
          <br/>
          • Integrated REST APIs and handled dynamic data flows
          <br/>
          • Implemented internationalization (i18n)
          <br/>
          • Built page layouts and reusable UI components from scratch
          <br/>
          • Participated in development of both client-facing and admin panel interfaces
          <br/>
          • Collaborated with backend developers and designers
        </p>
        <p className="expText">
          <b>Product Scope:</b>
          <br/>
          • Client application
          <br/>
          • Admin panel
          <br/>
          • Betting zone
          <br/>
          • Affiliate program
          <br/>
          • Streaming (Bet TV) module
        </p>
      </Card>

      <Divider />

      <Card title="Qulisoft (March 2023 / July 2023 - Junior React Native Developer)" className='experienceCard'>
        <p className="expText">
          <b>Responsibilities & Contributions:</b>
          <br/>
          • Refactored and updated existing React Native applications
          <br/>
          • Migrated projects to newer library versions and updated UI designs
          <br/>
          • Prepared and published application updates to the App Store
          <br/>
          • Worked with Xcode and iOS build configurations
          <br/>
          • Maintained and improved existing codebases
        </p>
        <p className="expText">
          • Knots 3D — mobile application refactoring and UI updates
          <br/>
          • VPN App — library updates and App Store releases
          <br/>
          • Finance Calculator — design updates and maintenance
        </p>
      </Card>

      <Divider />

      <Card title="NerdLab (March 2022 / July 2023 - Intern Front-end Developer)" className='experienceCard'>
        <p className="expText">
          <b>Responsibilities & Contributions:</b>
          <br/>
          • Developed and maintained web applications using React and TypeScript
          <br/>
          • Implemented UI components (tables, forms, dropdowns, buttons)
          <br/>
          • Integrated frontend with backend services (Node.js APIs)
          <br/>
          • Worked with MongoDB and MySQL data sources
          <br/>
          • Participated in optimization and support of existing projects
          <br/>
          • Collaborated closely with a mentor and development team
        </p>
        <p className="expText">
          <b>Projects:</b>
          <br/>
          • NerdLab Zeus — Admin panel for managing and viewing 3D assets
          <br/>
          Stack: React, TypeScript
          <br/>
          Contribution: UI components, forms, tables, settings panels
          <br/>
          <br/>
          • Synergy Hub — Full-stack application
          <br/>
          Stack: Node.js, TypeORM, Docker
          <br/>
          Contribution: backend integration, parallel development with senior developer
          <br/>
          <br/>
          • BetHead — Sports betting frontend
          <br/>
          Stack: React
          <br/>
          Contribution: customization of interactive and graphical UI components
          <br/>
          <br/>
          • Truck Loading — Mobile calculator app
          <br/>
          Stack: React Native
          <br/>
          Contribution: implementation of calculation logic and UI
        </p>
      </Card>
    </div>
  );
};

export default Experience;
