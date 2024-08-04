import './styles.css';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Layout, Typography } from 'antd';

const { Footer: AntFooter } = Layout;
const { Text } = Typography;

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <AntFooter className="footerContainer">
      <Text className="footerCopyright">© 2004–2024 {t('name')}</Text>
    </AntFooter>
  );
};

export default Footer;
