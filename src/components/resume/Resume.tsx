import React from 'react';
import Photo from '../../assets/photo.png';
import { About, Skills, Experience, Education, Langs } from '../index.tsx';
import './styles.css';
import { useTranslation } from 'react-i18next';
import { Card, Row, Col, Typography } from 'antd';

const { Title } = Typography;

const Resume: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className='mainContainer'>
      <div className='contentContainer'>
        <Card className='headerCvComponent' id="hero">
          <Row gutter={[28, 24]} align="middle">
            <Col>
              <img src={Photo} alt="photo" className='cvLogo' />
            </Col>
            <Col flex="1" className="heroCopy">
              <Title level={5} className='headerTextElement heroEyebrow'>{t('hello-world')}</Title>
              <Title level={1} className='headerTextElement heroName'>{t('me')}</Title>
              <Title level={4} className='headerTextElement heroRole'>{t('frontend-dev')}</Title>
              <Typography.Paragraph className='heroDescription'>{t('introduce')}</Typography.Paragraph>
              <Typography.Paragraph className='heroLocation'>{t('location')}</Typography.Paragraph>
            </Col>
          </Row>
        </Card>

        <About />
        <Skills />
        <Experience />
        <Education />
        <Langs />
      </div>
    </div>
  );
};

export default Resume;
