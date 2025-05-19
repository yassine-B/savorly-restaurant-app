import React from 'react';
import { Styles } from './Styles';
import { Wrapper } from '@src/Components/Wrapper';
import RestaurantVideoComponent from './RestaurantVideoComponent';
import RestaurantFeedbackAndRecipes from './RestaurantFeedbackAndRecipes';

function RestaurantVideo() {
  return (
    <Wrapper size="medium">
      <div className={Styles.restaurant_video_container}>
        <RestaurantVideoComponent />
        <RestaurantFeedbackAndRecipes />
      </div>
    </Wrapper>
  );
}

export default RestaurantVideo;
