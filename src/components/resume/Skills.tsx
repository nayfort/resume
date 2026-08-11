import { Card, Timeline } from 'antd';
import '../styles.css';
import {useTranslation} from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();
  const skills = [
    'Frontend: React • Next.js • TypeScript • JavaScript',
    'Styling: Tailwind CSS • SCSS',
    'State: Redux Toolkit',
    'Backend: Node.js • REST APIs',
    'Testing: Jest · React Testing Library · Playwright',
    'Databases: MongoDB • PostgreSQL',
    'Mobile: React Native • Flutter',
    'AI: n8n Workflows • Prompt Engineering • OpenAI Codex • Cursor',
    'Tools: Git • Docker • Postman'
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
