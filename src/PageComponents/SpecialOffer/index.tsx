import React from 'react';
import Image, { type StaticImageData } from 'next/image';
import { useTranslation } from 'next-i18next';
import { Styles } from './Styles';

import { Text } from '@src/Components/Text';
import { Title } from '@src/Components/Title';
import { Wrapper } from '@src/Components/Wrapper';
import { Overlay } from '@src/Components/Overlay';
import { offersList } from '@public/dummyData';

interface offerCardProps {
  imageSource: StaticImageData;
  imageDescription: string;
  title: string;
  discount: string;
}

const OfferCard = ({ imageSource, imageDescription, title, discount }: offerCardProps) => {
  return (
    <div className={Styles.offer_card_item_container}>
      <Overlay opacity={60} styles="rounded" />
      <div className={Styles.offer_card_item_image_container}>
        <Image
          layout="fill"
          placeholder="blur"
          blurDataURL={imageSource.blurDataURL}
          className={Styles.offer_card_item_image}
          src={imageSource.src}
          alt={imageDescription}
        />
      </div>
      <div className={Styles.offer_card_item_details}>
        <Title color="white" size="small" titleTransform="uppercase">
          {title}
        </Title>
        <Text color="secondary" size="medium" textTransform="uppercase" styles="italic font-bold">
          {discount}
        </Text>
      </div>
    </div>
  );
};

function SpecialOffers() {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <div className={Styles.offers_list}>
        <OfferCard
          discount={t('offers.offer_1.discount')}
          title={t('offers.offer_1.title')}
          imageSource={offersList[0].imageSource}
          imageDescription={offersList[0].imageDescription}
        />
        <div className={Styles.offers_list_grid}>
          <OfferCard
            discount={t('offers.offer_2.discount')}
            title={t('offers.offer_2.title')}
            imageSource={offersList[1].imageSource}
            imageDescription={offersList[1].imageDescription}
          />
          <OfferCard
            discount={t('offers.offer_3.discount')}
            title={t('offers.offer_3.title')}
            imageSource={offersList[2].imageSource}
            imageDescription={offersList[2].imageDescription}
          />
        </div>
      </div>
    </Wrapper>
  );
}

export default SpecialOffers;
