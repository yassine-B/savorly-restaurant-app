import React from 'react';
import { useTranslation } from 'next-i18next';
import { Styles } from './Styles';

import { Wrapper } from '@src/Components/Wrapper';
import { Overlay } from '@src/Components/Overlay';
import { ColorfulTitle } from '@src/Components/Title';

function Hero() {
  const { t, i18n } = useTranslation('common');
  return (
    <Wrapper size="medium">
      <div className={Styles.hero_container}>
        <Overlay opacity={60} />
        <div className={`${Styles.hero_content} lg:w-${i18n.language === 'en' ? 2 : 3}/5`}>
          <ColorfulTitle
            size="x_large"
            title={t('hero.hero_title')}
            titleWithColor={t('hero.hero_title_with_color')}
          />
        </div>
      </div>
    </Wrapper>
  );
}

export default Hero;
