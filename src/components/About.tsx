import { useTranslation } from 'react-i18next';
import './styles.css';
import { Card, Typography, Space } from 'antd';

const { Text, Link } = Typography;

const About = () => {
  const { t } = useTranslation();

  return (
    <Card className='aboutCard'>
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
        <div className='contactsElement'>
          <Text className='aboutText'>{t('date-of-birth')}:</Text>
          <Text className='aboutText'>26.07.2004</Text>
        </div>
        <div className='contactsElement'>
          <Text className='aboutText'>{t('tel')}:</Text>
          <Text className='aboutText'>+380 67 539 85 17</Text>
        </div>
        <div className='contactsElement'>
          <Text className='aboutText'>{t('email')}:</Text>
          <Text className='aboutText'>mitrofanovvladislav2004@gmail.com</Text>
        </div>
        <div className='contactsElement'>
          <Text className='aboutText'>{t('LinkedIn')}:</Text>
          <Link href="https://linkedin.com/in/nayfort" target="_blank" className='aboutText'>nayfort</Link>
        </div>
        <div className='contactsElement'>
          <Text className='aboutText'>{t('telegram')}:</Text>
          <Link href="https://t.me/nayfort" target="_blank" className='aboutText'>nayfort</Link>
        </div>
        <div className='contactsElement'>
          <Text className='aboutText'>{t('portfolio')}:</Text>
          <Link href="https://github.com/nayfort" target="_blank" className='aboutText'>github.com/nayfort</Link>
        </div>
      </Space>
    </Card>
  );
};

export default About;
