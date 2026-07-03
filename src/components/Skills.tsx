import { Card, Timeline } from 'antd';
import './styles.css';

const Skills = () => {
  const skills = [
    'Frontend: React • Next.js • TypeScript • JavaScript • HTML5 • CSS3',
    'Styling: Tailwind CSS • SCSS',
    'State: Redux Toolkit',
    'Backend: Node.js • REST APIs',
    'Databases: MongoDB • PostgreSQL',
    'Mobile: React Native • Flutter',
    'AI: n8n Workflows • Prompt Engineering • OpenAI Codex • Cursor',
    'Tools: Git • Docker • Postman'
  ];

  return (
    <Card title="Skills" style={{ width: '100%' }} className='skillsCard'>
      <Timeline>
        {skills.map((skill, index) => (
          <Timeline.Item key={index}>{skill}</Timeline.Item>
        ))}
      </Timeline>
    </Card>
  );
};

export default Skills;
