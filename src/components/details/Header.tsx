import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import { useTheme } from '../../hooks/useTheme';
import { useTranslation } from 'react-i18next';
import { Button, Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import en from '../../assets/enFlag.png';
import uk from '../../assets/ukFlag.png';
import themeLogo from '../../assets/theme.png';
import { useIsMobile } from '../../hooks/useIsMobile.tsx';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { toggleTheme } = useTheme();
  const isMobile = useIsMobile();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const languageMenu = (
    <Menu>
      <Menu.Item key="en" onClick={() => changeLanguage('en')}>
        <div className='langElTitle'>
          <img src={en} alt="English" className="changeButton" /> English
        </div>
      </Menu.Item>
      <Menu.Item key="uk" onClick={() => changeLanguage('uk')}>
        <div className='langElTitle'>
          <img src={uk} alt="Ukrainian" className="changeButton" /> Українська
        </div>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="headerContainer">
      <div className="headerContent">
        <Link to="/" className="navLink">
          {t('name')}
        </Link>
        <div className="linksContainer">
          <Link to="/home" className="navLink">
            {t('home')}
          </Link>
          <Link to="/about" className="navLink">
            {t('about')}
          </Link>
        </div>
      </div>
      <div className="rightControls">
        <Button onClick={toggleTheme} className="themeButton" icon={<img src={themeLogo} alt="Theme" className="changeButton" />} />
        <Dropdown overlay={languageMenu} trigger={['click']}>
          <Button className="ant-dropdown-link" onClick={e => e.preventDefault()} style={{ width: isMobile ? 80 : 'auto', height: isMobile ? 30 : 'auto' }}>
            {t('lang')} {!isMobile && <DownOutlined />}
          </Button>
        </Dropdown>
      </div>
    </div>
  );
};

export default Header;
