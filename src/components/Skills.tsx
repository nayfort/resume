import { Card, Timeline } from 'antd';
import './styles.css';

const Skills = () => {
  const skills = [
    'HTML, CSS, Scss, Sass',
    'Bootstrap 5',
    'Tailwind CSS',
    'JavaScript/TypeScript',
    'React, React Native + Redux Tool Kit',
    'MobX',
    'Node.js, API',
    'Postman',
    'Git/GitHub',
    'Docker',
    'i18n',
    'Flutter, Dart',
    'OOP',
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
