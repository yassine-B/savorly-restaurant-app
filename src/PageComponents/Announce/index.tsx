import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { Styles } from './Styles';
import { AppStoreIcon, GooglePlayIcon } from '@public/dummyData/Icons';
import phoneImage from '@public/assets/phone.jpg';

import { Text } from '@src/Components/Text';
import { Button } from '@src/Components/Button';
import { Wrapper } from '@src/Components/Wrapper';
import { Title, ColorfulTitle } from '@src/Components/Title';
import { useResize } from '@src/utils/hooks/useResize';

interface socialButtonProps {
  title: string;
  icon: JSX.Element;
}

const SocialButton = ({ title, icon }: socialButtonProps) => {
  return (
    <Button bgColor="white_border" shape="normal" styles="py-2">
      <div className={Styles.announce_details_button_content}>
        <div>{icon}</div>
        <span>{title}</span>
      </div>
    </Button>
  );
};
const AnnounceDetails = () => {
  const { t } = useTranslation('common');
  return (
    <div className={Styles.announce_details}>
      <Title size="small" color="white" titleTransform="uppercase">
        {t('announce.announce_sub_title')}
      </Title>
      <ColorfulTitle
        size="medium"
        title={t('announce.announce_title')}
        titleWithColor={t('announce.announce_title_with_color')}
      />
      <Text color="white" styles="my-3">
        {t('announce.announce_description')}
      </Text>

      <div className={Styles.announce_details_button_group}>
        <SocialButton title="google play" icon={<GooglePlayIcon />} />
        <SocialButton title="app store" icon={<AppStoreIcon />} />
      </div>
    </div>
  );
};

function Announce() {
  const { i18n } = useTranslation('common');
  const [width] = useResize();

  const isFranceLanguage = i18n.language === 'fr';
  const englishAnnounceContainerHeight =
    i18n.language === 'en' && width < 825 && width > 768 ? 'md:h-20rem' : '';
  const franceAnnounceContainerHeight =
    isFranceLanguage && width > 1040
      ? 'lg:h-20rem'
      : isFranceLanguage && width < 1040 && width > 1024
        ? 'lg:h-21rem'
        : isFranceLanguage && width < 1024 && width > 850
          ? 'md:h-20rem'
          : isFranceLanguage && width < 850 && width > 768
            ? 'md:h-21rem'
            : '';
  const announce_container_height = englishAnnounceContainerHeight || franceAnnounceContainerHeight;
  return (
    <Wrapper>
      <div className={`${announce_container_height} ${Styles.announce_container}`}>
        <div className={Styles.announce_image_container}>
          <Image
            layout="fill"
            placeholder="blur"
            blurDataURL={phoneImage.blurDataURL}
            src={phoneImage.src}
            alt={'download app image'}
          />
        </div>

        <AnnounceDetails />
      </div>
    </Wrapper>
  );
}

export default Announce;
