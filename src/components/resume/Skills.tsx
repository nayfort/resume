import { Card, Timeline } from 'antd';
import '../styles.css';
import {useTranslation} from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();
  const skills = [
    'Frontend: React · Next.js · TypeScript · JavaScript · Redux Toolkit',
    'Styling: Tailwind CSS • SCSS',
    'Testing: Jest · React Testing Library · Playwright',
    'Backend & Data: Node.js · REST APIs · WebSockets · PostgreSQL · MongoDB',
    'Authentication: JWT · OAuth 2.0 · Session-based authentication',
    'Infrastructure & Build: Docker · Kubernetes · Linux · Bash · Vite · Webpack',
    'Tools: Git · Postman · Figma · Jira',
    'Mobile: React Native · Flutter · Store deployment',
    'AI & Automation: LLM APIs · n8n · Prompt engineering'
  ];

  return (
    <Card title={t('skills')} style={{ width: '100%' }} className='skillsCard'>
      <Timeline>
        {skills.map((skill, index) => (
          <Timeline.Item key={index}>{skill}</Timeline.Item>
        ))}
      </Timeline>
    </Card>
  );
};

export default Skills;
