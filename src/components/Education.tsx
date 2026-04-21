import './styles.css';
import { useTranslation } from 'react-i18next';
import {Card, Divider, Typography} from 'antd';

const { Link } = Typography;

const Education = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Card className='educationCard'>
        <div className='educationTextTitle'>{t('education')}:</div>
        <div className='educationText'>(2023 / 2027 - Expected, flexible academic schedule)</div>
        <div className='blockHeader'>
          <Link href="https://www.kpi.kharkov.ua/eng/" target="_blank" className='educationText'><a className='educationLinks'>Kharkiv Polytechnic Institute</a></Link>
          <div className='educationText'>SOFTWARE ENGINEERING OF COMPUTER SYSTEMS</div>
        </div>

        <Divider />

        <div>
          <div className='educationTextTitle'>{t('plus-education')}</div>
          <div className='educationText'>(2019 - 2022)</div>
          <div className='blockHeader'>
            <Link href="https://kr.itstep.org/" target="_blank" className='educationText'><a className='educationLinks'>STEP: IT Academy</a></Link>
          </div>
          <ul>
            <li className='educationText'>Website design and layout</li>
            <li className='educationText'>HTML / CSS course</li>
            <li className='educationText'>JavaScript course</li>
            <li className='educationText'>Python course</li>
          </ul>
        </div>
      </Card>
    </div>
  );
};

export default Education;
