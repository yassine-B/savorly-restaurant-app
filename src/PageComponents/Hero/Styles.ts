import { addPrefixClassName } from '../../utils/AddPrefixClassName';

export const heroStyles = {
  hero_container:
    'bg-hero relative w-full bg-red-600 flex flex-col items-start justify-center rounded overflow-hidden',
  hero_content: 'absolute z-30 mx-10 w-4/5 sm:w-3/5'
};
export const Styles = addPrefixClassName(heroStyles, 'hero_cl');
