import { addPrefixClassName } from '../../utils/AddPrefixClassName';

export const announceStyles = {
  announce_container: 'w-full overflow-hidden rounded md:flex md:flex-row bg-primary',
  announce_image_container: 'relative w-full w-1/2 h-64 md:h-auto md:w-1/2 lg:w-1/2 lg:h-auto',
  announce_details: 'w-1/2 w-full px-2 py-6 flex flex-col sm:px-6 md:px-6 md:py-4 md:w-1/2',
  announce_details_button_group: 'flex justify-evenly py-2',
  announce_details_button_content: 'flex items-center gap-2'
};
export const Styles = addPrefixClassName(announceStyles, 'announce_cl');
