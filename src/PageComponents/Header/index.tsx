import React from 'react';
import Image from 'next/image';
import { Styles } from './Styles';
import logoImage from '@public/assets/logo.png';
import { PhoneIcon } from '@public/dummyData/Icons';

import { useResize } from '@src/utils/hooks/useResize';
import { Button } from '@src/Components/Button';
import { ThemeToggler } from '@src/Components/ThemeToggler';
import { SocialIcons, InfoIcon } from '@src/Components/InfoIcons';
import { LanguagesDropdown } from '@src/Components/LanguagesDropdown';

function Header() {
  const [width] = useResize();
  return (
    <header className={Styles.header_container}>
      <div className={Styles.header_social_icons}>
        <SocialIcons />
        {width > 640 && (
          <div className={Styles.header_info_icon}>
            <InfoIcon icon={<PhoneIcon />} title="call now" description=" +88 01744 430 440" />
          </div>
        )}
      </div>

      <div className={Styles.header_logo_container}>
        <div className={Styles.header_logo_image}>
          <Image
            layout="fill"
            placeholder="blur"
            blurDataURL={logoImage.blurDataURL}
            src={logoImage.src}
            alt={'logo image'}
            className="rounded-lg"
          />
        </div>
      </div>

      <div className={Styles.header_button_group}>
        <ThemeToggler />
        <LanguagesDropdown />
        <Button shape="normal" styles="py-2 hidden xs:block">
          book table
        </Button>
      </div>
    </header>
  );
}

export default Header;
