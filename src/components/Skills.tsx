import { Card, Timeline } from 'antd';
import './styles.css';

const Skills = () => {
  const skills = [
    'HTML5, CSS3 (SCSS)',
    'Tailwind CSS',
    'JavaScript, TypeScript',
    'React, Next.js',
    'Redux + Redux Tool Kit',
    'React Native, Flutter',
    'Node.js',
    'MongoDB, PostgreSQL',
    'Git/GitHub',
    'Docker'
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
