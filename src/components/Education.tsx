import './styles.css';
import { useTranslation } from 'react-i18next';
import { Card, Divider } from 'antd';

const Education = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Card className='educationCard'>
        <div className='educationTextTitle'>{t('education')}:</div>
        <div className='blockHeader'>
          <div className='educationText'>Kharkiv Polytechnic Institute (2023 / 2027 - Incomplete)</div>
          <div className='educationText'>SOFTWARE ENGINEERING OF COMPUTER SYSTEMS</div>
        </div>

        <Divider />

        <div>
          <div className='educationTextTitle'>{t('plus-education')} (2019 - 2022)</div>
          <div className='educationText'>STEP: IT Academy</div>
          <ul>
            <li className='educationText'>Website design and layout</li>
            <li className='educationText'>2D game modeling (Construct2)</li>
            <li className='educationText'>3D modeling (Blender)</li>
            <li className='educationText'>Video editing (Premiere Pro)</li>
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
