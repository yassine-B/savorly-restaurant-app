//  change classNames   (footer_content_left_container footer_content_left_grid)

import { addPrefixClassName } from '../../utils/AddPrefixClassName';

export const footerStyles = {
  footer_container: 'relative',
  footer_content: 'flex flex-col w-11/12 m-auto sm:w-10/12 md:flex-row md:w-full',
  footer_content_left_container:
    'px-4 w-full flex flex-col justify-end border-t-2 order-2 border-primary sm:border-t-0 md:order-1 md:border-r-2 md:w-7/12',
  footer_content_left_grid:
    'flex justify-between flex-col gap-4 py-3 sm:gap-0 sm:flex-row md:gap-5',
  //footer links
  footer_links_container:
    'flex flex-col text-white gap-4 border-b-2 border-primary pb-4 sm:border-none md:w-4/12 lg:w-auto',
  footer_links_list: 'flex flex-col gap-2 text-sm text-primaryText uppercase font-semibold',
  // footer instagram images
  footer_instagram_images_container: 'flex flex-col gap-4',
  footer_instagram_images: 'grid grid-cols-3 gap-4 sm:gap-2',
  footer_instagram_image: 'h-24 w-full rounded sm:w-24',
  // footer copyright
  footer_copyright_colorful_text: 'text-yellow-500 capitalize',
  // footer info
  footer_info_container: 'w-full text-yellow-600 p-6 space-y-8 order-1 md:order-2 md:w-5/12',
  // footer info icons
  footer_info_icons_list: 'flex flex-col gap-3',
  footer_info_icons_list_item: 'flex gap-6',

  //footer logo
  footer_logo:
    'text-primaryText border-primaryText w-32 h-12 flex justify-center  text-2xl font-serif italic uppercase border-4 border-t-0 border-r-0 border-l-0 rounded-bl-full rounded-br-full ',
  //footer button
  footer_arrow_up_button:
    'w-10 h-10 rounded-full bg-primary absolute bottom-0 right-0 text-white flex flex-col items-center justify-center bottom-3rem right-0.5rem sm:bottom-2rem sm:right-2rem'
};

export const Styles = addPrefixClassName(footerStyles, 'footer_cl');
