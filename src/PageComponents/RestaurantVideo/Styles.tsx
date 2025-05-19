import { addPrefixClassName } from '../../utils/AddPrefixClassName';

export const restaurantVideoStyles = {
  restaurant_video_container:
    'flex flex-col gap-6 md:relative md:gap-0 md:flex-row md:justify-center h-fitContent md:h-38rem',
  // restaurant video
  restaurant_video: 'relative w-full bg-primary overflow-hidden rounded h-19rem sm:h-25rem',
  restaurant_video_button:
    'w-12 h-12 rounded-full bg-almondColor text-black flex flex-col items-center justify-center absolute z-30 right-0 bottom-2rem right-2rem xs:right-3rem md:bottom-4rem md:right-6rem',
  // restaurant video details
  restaurant_video_details_container:
    'flex gap-10 items-end md:absolute md:z-40 md:bottom-0 md:w-11/12 lg:w-10/12 text-primaryText',
  restaurant_video_details: 'flex flex-col gap-6 md:gap-10 md:flex-row md:items-end lg:mx-8',
  restaurant_video_details_card:
    'relative recipes h-40 rounded bg-yellow-500 overflow-hidden md:w-11/12',
  restaurant_video_details_card_content:
    'relative z-30 flex flex-col items-center justify-center h-full w-full',
  // restaurant feedback
  restaurant_feedback_container: 'card bg-white dark:bg-primary p-4 rounded w-full',
  restaurant_feedback_author: 'flex space-x-4',
  restaurant_feedback_author_image: 'relative bg-secondary h-12 w-12 rounded-full overflow-hidden'
};

export const Styles = addPrefixClassName(restaurantVideoStyles, 'restaurantVideo_cl');
