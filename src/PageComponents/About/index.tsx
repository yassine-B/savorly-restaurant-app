import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { Styles } from './Styles';
import { PlusIcon } from '@public/dummyData/Icons';
import aboutImg from '@public/assets/about.png';

import { Text } from '@src/Components/Text';
import { Title } from '@src/Components/Title';
import { Button } from '@src/Components/Button';
import { Wrapper } from '@src/Components/Wrapper';

import { useResize } from '@src/utils/hooks/useResize';

// Utility to determine outer div height based on language and width
const getAboutHeight = (isFrench: boolean, width: number): string | undefined => {
  if (isFrench) {
    if (width <= 1070 && width >= 1024) return '28rem';
    if (width <= 1024 && width >= 688) return '32rem';
    if (width <= 688 && width >= 603) return '34rem';
    if (width <= 603 && width >= 584) return '36rem';
    if (width <= 584 && width >= 510) return '39rem';
    if (width <= 510 && width >= 455) return '42rem';
    if (width <= 455 && width >= 380) return '46rem';
    if (width <= 380 && width >= 360) return '50rem';
    if (width < 360 && width >= 320) return '50rem';
    return '25rem';
  }
  if (width <= 1182 && width >= 1024) return '24rem';
  if (width <= 1024 && width >= 705) return '30rem';
  if (width <= 705 && width >= 650) return '32rem';
  if (width <= 650 && width >= 607) return '34rem';
  if (width <= 607 && width >= 592) return '36rem';
  if (width <= 592 && width >= 518) return '37rem';
  if (width <= 518 && width >= 450) return '38rem';
  if (width <= 450 && width >= 440) return '40rem';
  if (width <= 440 && width >= 400) return '41rem';
  if (width <= 400 && width >= 370) return '43rem';
  if (width <= 370 && width >= 355) return '44rem';
  if (width <= 355 && width >= 320) return '48rem';
  return '23rem';
};
// Utility for container height
const getContainerHeight = (isFrench: boolean, width: number): string | undefined => {
  if (isFrench && width < 1200 && width > 1024) {
    if (width < 1070 && width > 1050) return '31rem';
    if (width <= 1050 && width > 1024) return '32rem';
    return '29rem';
  }
  return undefined;
};

const AboutDetails = () => {
  const [width] = useResize();
  const { t } = useTranslation('common');
  const aboutDetailsStyles = { paddingBottom: width <= 1182 && width >= 1024 ? '0px' : undefined };

  return (
    <div style={aboutDetailsStyles} className={Styles.about_details}>
      <Title color="black" size="small" titleTransform="uppercase">
        {t('about.sub_title')}
      </Title>
      <Title color="black" size="large">
        {t('about.about_title')} {t('about.about_title_with_color')}
      </Title>
      <div className={Styles.about_details_text_container}>
        <Text color="black">{t('about.description.part_1')}</Text>
        <Text color="black">{t('about.description.part_2')}</Text>
      </div>

      <Button shape="normal" bgColor="primary" styles={Styles.about_details_button}>
        <span>{t('about.about_button')}</span> <PlusIcon />
      </Button>
    </div>
  );
};
function About() {
  const { i18n } = useTranslation();
  const [width] = useResize();

  const isFranceLanguage = i18n.language === 'fr';

  const aboutHeight = getAboutHeight(isFranceLanguage, width);
  const containerHeight = getContainerHeight(isFranceLanguage, width);
  const defaultContainerClass = isFranceLanguage ? '' : 'h-full lg:h-29rem';

  return (
    <div style={aboutHeight ? { height: aboutHeight } : undefined}>
      <div className={Styles.about}>
        <Wrapper>
          <div
            style={
              containerHeight
                ? {
                    height: containerHeight
                  }
                : undefined
            }
            className={`${Styles.about_details_container} ${defaultContainerClass}`}>
            <AboutDetails />
            <div className={Styles.about_details_image}>
              <Image
                layout="fill"
                placeholder="blur"
                blurDataURL={aboutImg.blurDataURL}
                src={aboutImg.src}
                alt={'about image'}
              />
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
}

export default About;
