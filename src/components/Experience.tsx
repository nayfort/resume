import './styles.css';
import { useTranslation } from 'react-i18next';
import { Card, Divider, List } from 'antd';

const Experience = () => {
  const { t } = useTranslation();

  const nerdLabProjects = [
    'NerdLab Zeus - large project, part of the front-end, an admin panel for users who create collections of 3D files (.obj, .gltf, .glb) with the ability to manage the settings of these files and their viewing. I helped with the development of drop-down menu components, forms, tables, buttons, etc. Written in TypeScript.',
    'Synergy Hub - full-stack with Docker and TypeORM connectivity. I worked on the connection in parallel with the developer.',
    'BetHead - front-end, the sports betting display page. I helped with the customization of graphic and interactive components on the website.',
    'Truck Loading - calculator for calculating the average load of trucks written in react-native for mobile phones.',
  ];

  const nerdLabResponsibilities = [
    'Development and optimization of web pages and web applications',
    'Working with third-party libraries and frameworks (e.g., React, Angular, Vue.js)',
    'Use of backend technologies such as Node.js',
    'Working with databases such as MySQL and MongoDB',
    'Parallel development of functional components',
    'Support and optimization of existing projects',
  ];

  return (
    <div className="experienceSection">
      <div className="expBlockTitle">{t('experience')}:</div>

      <Card title="BetTV (2023 / 2024 - Junior Frontend Developer)" className='experienceCard'>
        <p className="expText">
          This vacancy was very impactful and productive in every sense for me like qualitative developer. Here we were developing an online casino. I worked on developing various custom functionality using React, connecting APIs, bidding functionality, internationalization, layout of pages and elements from the beginning. I improved my skills, got acquainted with a new set of knowledge and current technology stacks. It was a wonderful experience and gaining confidence in the tasks assigned, this is a great contribution to the formation of me as a full-fledged combat unit.
        </p>
        <p className="expText">
          In the end we had a product with an admin panel, client part, betting area, partners program and bet TV for broadcasts.
        </p>
      </Card>

      <Divider />

      <Card title="NerdLab (2022 / 2023 - Intern)" className='experienceCard'>
        <p className="expText">
          Right after school and developer courses, I got an internship at the Ukrainian IT company NerdLab. Worked there for a year as an intern under the guidance of an experienced full-stack JavaScript developer.
        </p>
        <p className="expText">
          I was usually engaged in web application development and gained practical skills in JavaScript programming. My responsibilities included:
        </p>
        <List
          dataSource={nerdLabResponsibilities}
          renderItem={(item) => <List.Item className="expText">{item}</List.Item>}
          className='responsibilitiesList'
        />
        <p className="expText">Here are some examples of projects I worked on alongside my mentor:</p>
        <List
          dataSource={nerdLabProjects}
          renderItem={(item) => <List.Item className="expText">{item}</List.Item>}
          className='projectsList'
        />
      </Card>
    </div>
  );
};

export default Experience;
