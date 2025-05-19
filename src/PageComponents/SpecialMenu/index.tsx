import React from 'react';
import Image, { type StaticImageData } from 'next/image';
import { useTranslation } from 'next-i18next';
import { Styles } from './Styles';
import { menuList } from '@public/dummyData';
import { PlusIcon } from '@public/dummyData/Icons';

import { Text } from '@src/Components/Text';
import { Button } from '@src/Components/Button';
import { Wrapper } from '@src/Components/Wrapper';
import { Title } from '@src/Components/Title';
import { useResize } from '@src/utils/hooks/useResize';

interface SpecialMenuCardProps {
  imageSource: StaticImageData;
  imageDescription: string;
  title: string;
  price: string;
  discount: string;
}
const SpecialMenuCard = ({
  imageSource,
  imageDescription,
  title,
  price,
  discount
}: SpecialMenuCardProps) => {
  return (
    <div className={Styles.menu_card_list_item}>
      <div className={Styles.menu_card_list_item_tag}>
        <Text color="black" size="medium" styles="font-bold">
          {discount}
        </Text>
      </div>
      <div className={Styles.menu_card_list_item_image_container}>
        <Image
          layout="fill"
          placeholder="blur"
          blurDataURL={imageSource.blurDataURL}
          src={imageSource.src}
          alt={imageDescription}
        />
      </div>
      <div className={Styles.menu_card_list_item_details}>
        <Title color="white" size="small" titleTransform="capitalize">
          {title}
        </Title>
        <Text color="secondary" size="medium" styles="font-bold">
          {price}
        </Text>
      </div>
    </div>
  );
};

function SpecialMenu() {
  const { t } = useTranslation('common');
  const [width] = useResize();

  return (
    <>
      <Wrapper>
        <div className={Styles.menu_header}>
          <Title size={width < 480 ? 'small' : 'medium'}>
            {t('menu.menu_title')} {t('menu.menu_title_with_color')}
          </Title>
          <Button shape="normal" styles={Styles.menu_header_button}>
            <span className={Styles.menu_header_button_text}>{t('menu.menu_button')}</span>
            <PlusIcon />
          </Button>
        </div>

        <div className={Styles.menu_card_list}>
          {menuList.map((menuItem) => {
            return (
              <SpecialMenuCard
                key={menuItem.id}
                discount={t(`menu.${menuItem.id}.discount`)}
                imageSource={menuItem.imageSource}
                imageDescription={menuItem.imageDescription}
                title={t(`menu.${menuItem.id}.title`)}
                price={t(`menu.${menuItem.id}.price`)}
              />
            );
          })}
        </div>
      </Wrapper>
    </>
  );
}

export default SpecialMenu;
