import { Card, Timeline } from 'antd';
import './styles.css';

const Skills = () => {
  const skills = [
    'HTML, CSS, Scss, Sass',
    'Bootstrap 5, Tailwind CSS',
    'JavaScript, TypeScript',
    'React, Next.js',
    'Redux + Redux Tool Kit, MobX',
    'React Native, Flutter, Dart',
    'Angular',
    'Node.js, API',
    'MongoDB, PostgreSQL, DBeaver',
    'Postman, Swagger',
    'Git/GitHub, GitLab',
    'Docker',
    'i18n',
    'Figma, Pixso',
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
