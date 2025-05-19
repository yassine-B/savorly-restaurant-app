import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { Styles } from './Styles';
import { EmailIcon, ArrowUpIcon, LocationIcon, PhoneIcon } from '@public/dummyData/Icons';

import { Text } from '@src/Components/Text';
import { Title } from '@src/Components/Title';
import { Wrapper } from '@src/Components/Wrapper';
import { SocialIcons, InfoIcon } from '@src/Components/InfoIcons';
import { footerImagesList } from '@public/dummyData';

const FooterLogo = () => {
  return <div className={Styles.footer_logo}>Treatos</div>;
};
const FooterCopyright = () => {
  const { t } = useTranslation('common');
  return (
    <Text textTransform="capitalize" styles="my-3 font-semibold">
      {t('footer.footer_copyright')}
    </Text>
  );
};
const FooterInfoIcons = () => {
  const { t } = useTranslation('common');
  return (
    <ul className={Styles.footer_info_icons_list}>
      <li className={Styles.footer_info_icons_list_item}>
        <InfoIcon
          icon={<PhoneIcon />}
          title={t('icons_titles.call_now')}
          description=" +88 01744 430 440"
        />
      </li>
      <li className={Styles.footer_info_icons_list_item}>
        <InfoIcon
          icon={<EmailIcon />}
          title={t('icons_titles.email')}
          description=" yassine@gmail.com"
        />
      </li>
      <li className={Styles.footer_info_icons_list_item}>
        <InfoIcon
          icon={<LocationIcon />}
          title={t('icons_titles.location')}
          description="Mafaldashire Hauck Course IQ Illinois 35846"
        />
      </li>
    </ul>
  );
};

const FooterLinks = () => {
  const { t } = useTranslation('common');
  return (
    <div className={Styles.footer_links_container}>
      <Title size="small" titleWeight="semibold">
        {t('footer.footer_links.title')}
      </Title>
      <ul className={Styles.footer_links_list}>
        <li>
          <a href="#"> {t('footer.footer_links.home')} </a>
        </li>
        <li>
          <a href="#"> {t('footer.footer_links.about')} </a>
        </li>
        <li>
          <a href="#"> {t('footer.footer_links.offer')} </a>
        </li>
        <li>
          <a href="#"> {t('footer.footer_links.gallery')} </a>
        </li>
        <li>
          <a href="#"> {t('footer.footer_links.blog')} </a>
        </li>
      </ul>
    </div>
  );
};
const FooterInstagramImages = () => {
  return (
    <div className={Styles.footer_instagram_images_container}>
      <Title size="small" titleWeight="semibold">
        instagram
      </Title>
      <div className={Styles.footer_instagram_images}>
        {footerImagesList.map((item) => {
          return (
            <Image
              key={item.id}
              width={120}
              height={120}
              placeholder="blur"
              blurDataURL={item.imageSource.blurDataURL}
              className={Styles.footer_instagram_image}
              src={item.imageSource}
              alt={item.imageDescription}
            />
          );
        })}
      </div>
    </div>
  );
};

function Footer() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    if (scroll) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return setScroll(false);
  }, [scroll]);
  return (
    <footer className={Styles.footer_container}>
      <Wrapper my="my-0">
        <div className={Styles.footer_content}>
          <div className={Styles.footer_content_left_container}>
            <div className={Styles.footer_content_left_grid}>
              <FooterLinks />
              <FooterInstagramImages />
            </div>
            <FooterCopyright />
          </div>

          <div className={Styles.footer_info_container}>
            <FooterLogo />
            <FooterInfoIcons />
            <SocialIcons />
          </div>
        </div>
      </Wrapper>
      <button
        className={Styles.footer_arrow_up_button}
        onClick={() => {
          setScroll(true);
        }}>
        <ArrowUpIcon />
      </button>
    </footer>
  );
}

export default Footer;
