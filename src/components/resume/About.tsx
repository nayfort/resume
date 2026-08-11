import { useTranslation } from 'react-i18next';
import '../styles.css';
import { Card, Typography, Space } from 'antd';

const { Text, Link } = Typography;

const About = () => {
  const { t } = useTranslation();

  return (
    <Card title={t('contacts')} className='aboutCard'>
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
        <div className='contactsElement'>
          <Text className='aboutText'>{t('email')}:</Text>
          <Text className='aboutText'>mitrofanovvladislav2004@gmail.com</Text>
        </div>
        <div className='contactsElement'>
          <Text className='aboutText'>{t('LinkedIn')}:</Text>
          <Link href="https://linkedin.com/in/nayfort" target="_blank" className='aboutText'><a className='profileLinks'>nayfort</a></Link>
        </div>
        <div className='contactsElement'>
          <Text className='aboutText'>{t('telegram')}:</Text>
          <Link href="https://t.me/nayfort" target="_blank" className='aboutText'><a className='profileLinks'>nayfort</a></Link>
        </div>
        <div className='contactsElement'>
          <Text className='aboutText'>{t('git')}:</Text>
          <Link href="https://github.com/nayfort" target="_blank" className='aboutText'><a className='profileLinks'>nayfort</a></Link>
        </div>
      </Space>
    </Card>
  );
};

export default About;
