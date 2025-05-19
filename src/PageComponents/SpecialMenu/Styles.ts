import { addPrefixClassName } from '../../utils/AddPrefixClassName';

export const menuStyles = {
  menu_header: 'flex justify-between',
  menu_header_button: 'text-secondary flex gap-2 items-center',
  menu_header_button_text: 'text-white ',
  menu_card_list: 'grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2 lg:grid-cols-3 ',
  // menu card
  menu_card_list_item: 'relative w-full bg-primary rounded-lg overflow-hidden h-25rem',
  menu_card_list_item_tag:
    'absolute z-10 right-0 top-1rem bg-secondary p-1 rounded-bl-2xl rounded-tl-2xl w-auto',
  menu_card_list_item_image_container: 'relative w-full rounded-lg h-19rem',
  menu_card_list_item_details: 'mx-4 my-4'
};
export const Styles = addPrefixClassName(menuStyles, 'menu_cl');
