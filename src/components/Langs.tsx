import './styles.css';
import { useTranslation } from 'react-i18next';
import { Card, List } from 'antd';

const Langs = () => {
  const { t } = useTranslation();

  const languages = [
    'Ukrainian - Native',
    'English - Upper-Intermediate',
    'Czech - Beginner',
  ];

  return (
    <Card title={t('languages')} className='languagesCard'>
      <List
        dataSource={languages}
        renderItem={(item) => <List.Item className='langText'>{item}</List.Item>}
      />
    </Card>
  );
};

export default Langs;
