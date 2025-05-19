import { addPrefixClassName } from '../../utils/AddPrefixClassName';

export const headerStyles = {
  header_container: 'bg-transparent text-white h-12 flex justify-between mx-8 items-center',
  header_social_icons: 'flex items-center gap-6',
  header_info_icon: 'flex items-center space-x-4',
  header_button_group: 'flex gap-2 items-center',
  header_logo_container: 'h-full z-20 relative hidden md:block',
  header_logo_image: 'relative w-24 h-24'
};

export const Styles = addPrefixClassName(headerStyles, 'header_cl');
