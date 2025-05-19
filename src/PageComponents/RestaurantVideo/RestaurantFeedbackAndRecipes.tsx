import React from 'react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { Styles } from './Styles';
import Img1 from '@public/assets/soffer-2.jpg';
import Img2 from '@public/assets/feedback-user.png';
import { Text } from '@src/Components/Text';
import { Title } from '@src/Components/Title';
import { Overlay } from '@src/Components/Overlay';
import { QuoteIcon } from '@public/dummyData/Icons';

interface RestaurantFeedbackAndRecipesProps {
  className?: string;
}
const RestaurantFeedback = () => {
  const { t } = useTranslation('common');
  return (
    <div className={Styles.restaurant_feedback_container}>
      <QuoteIcon />
      <Text styles="my-3">{t('video.video_comment_description')}</Text>

      <div className={Styles.restaurant_feedback_author}>
        <div className={Styles.restaurant_feedback_author_image}>
          <Image
            layout="fill"
            placeholder="blur"
            blurDataURL={Img2.blurDataURL}
            src={Img2.src}
            alt="avatar image"
          />
        </div>

        <div>
          <Text textTransform="capitalize" size="medium">
            {t('video.video_comment_author')}
          </Text>
          <Text size="small">{t('video.video_comment_author_profession')}</Text>
        </div>
      </div>
    </div>
  );
};
const RestaurantFeedbackAndRecipes: React.FC<RestaurantFeedbackAndRecipesProps> = ({
  className = ''
}) => {
  const { t } = useTranslation('common');

  return (
    <div className={`${Styles.restaurant_video_details_container}`}>
      <div className={Styles.restaurant_video_details}>
        <RestaurantFeedback />

        <div
          style={{ background: `url(${Img1.src})` }}
          className={Styles.restaurant_video_details_card}>
          <Overlay opacity={50} height="h-40" />
          <div className={Styles.restaurant_video_details_card_content}>
            <Text
              color="white"
              textAlignment="center"
              size="x_small"
              textTransform="uppercase"
              styles="font-bold">
              {t('recipes.title')}
            </Text>
            <Title color="white" titleAlignment="center" size="small" titleTransform="uppercase">
              {t('recipes.recipes_title')}
            </Title>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantFeedbackAndRecipes;
