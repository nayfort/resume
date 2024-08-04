import React from 'react';
import Photo from '../../assets/photo.png';
import { About, Skills, Experience, Education, Langs } from '../index.tsx';
import './styles.css';
import { useTranslation } from 'react-i18next';
import { Card, Row, Col, Typography, Divider } from 'antd';

const { Title, Text } = Typography;

const Resume: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className='mainContainer'>
      <div className='contentContainer'>
        <Card className='headerCvComponent'>
          <Row gutter={[16, 16]} align="middle">
            <Col>
              <img src={Photo} alt="photo" className='cvLogo' />
            </Col>
            <Col>
              <Title level={3} className='headerTextElement'>{t('hello-world')}</Title>
              <Title level={4} className='headerTextElement'>{t('me')}</Title>
              <Title level={5} className='headerTextElement'>{t('frontend-dev')}</Title>
            </Col>
          </Row>
        </Card>

        <About />
        <Skills />
        <Experience />
        <Education />
        <Langs />

        <Divider />

        <Text className='footerTextElement'>{t('greeting')}</Text>
      </div>
    </div>
  );
};

export default Resume;
