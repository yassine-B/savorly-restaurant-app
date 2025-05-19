import { addPrefixClassName } from '../../utils/AddPrefixClassName';
export const aboutStyles = {
  about: 'absolute z-20 w-full top-50p sm:top-80p',
  about_details_container:
    'bg-white dark:bg-almondColor rounded p-2 flex  flex-col lg:items-center lg:flex-row',
  about_details: 'h-full w-full py-6 px-6 order-2 lg:order-1',
  about_details_text_container: 'mb-6 mt-2',
  about_details_button: 'flex gap-2 items-center',
  about_details_image: 'relative h-64 w-full p-1 rounded order-1 lg:h-27rem lg:order-2'
};

export const Styles = addPrefixClassName(aboutStyles, 'about_cl');
