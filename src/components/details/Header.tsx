import React from 'react';
import './styles.css';
import { useTheme } from '../../hooks/useTheme';
import { useTranslation } from 'react-i18next';
import { Menu, Dropdown } from 'antd';
import en from '../../assets/enFlag.png';
import ua from '../../assets/uaFlag.png';
import pl from '../../assets/plFlag.png';

const Header: React.FC = () => {
    const { t, i18n } = useTranslation();
    const { theme, toggleTheme } = useTheme();
    const languages = {
        en: { flag: en, label: 'English' },
        ua: { flag: ua, label: 'Українська' },
        pl: { flag: pl, label: 'Polski' },
    };
    const currentLanguage = languages[i18n.resolvedLanguage as keyof typeof languages] || languages.en;

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    const languageMenu = (
        <Menu selectedKeys={[i18n.resolvedLanguage || 'en']}>
            <Menu.Item key="en" onClick={() => changeLanguage('en')}>
                <div className='langElTitle'>
                    <img src={en} alt="English" className="changeButton" /> English
                </div>
            </Menu.Item>
            <Menu.Item key="ua" onClick={() => changeLanguage('ua')}>
                <div className='langElTitle'>
                    <img src={ua} alt="Ukrainian" className="changeButton" /> Українська
                </div>
            </Menu.Item>
            <Menu.Item key="pl" onClick={() => changeLanguage('pl')}>
                <div className='langElTitle'>
                    <img src={pl} alt="Polski" className="changeButton" /> Polski
                </div>
            </Menu.Item>
        </Menu>
    );

    return (
        <div className="headerContainer">
            <div className="headerContent">
                <a href="#hero" className="navLink">
                    {t('name')}
                </a>
                <div className="linksContainer">
                    <a href="#experience" className="navLink">
                        {t('about')}
                    </a>
                </div>
            </div>
            <div className="rightControls">
                <button type="button" onClick={toggleTheme} className="headerIconButton" aria-label="Toggle color theme" title="Toggle color theme">
                    <svg className="themeIcon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        {theme === 'dark' ? <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" /></> : <path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z" />}
                    </svg>
                </button>
                <Dropdown overlay={languageMenu} overlayClassName="languageDropdown" trigger={['click']}>
                    <button type="button" className="headerIconButton" aria-label={`${t('lang')}: ${currentLanguage.label}`} title={currentLanguage.label} aria-haspopup="menu">
                        <img src={currentLanguage.flag} alt="" className="changeButton" />
                    </button>
                </Dropdown>
            </div>
        </div>
    );
};

export default Header;