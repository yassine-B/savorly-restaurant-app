import { addPrefixClassName } from '../../utils/AddPrefixClassName';

export const specialOfferStyles = {
  offers_list:
    'w-full grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-10 md:grid-cols-2 lg:grid-cols-2 lg:gap-20 h-48rem sm:h-20rem',
  offers_list_grid: 'flex flex-col gap-5 sm:gap-3 md:gap-3 lg:gap-3',
  offer_card_item_container: 'relative h-full w-full rounded',
  offer_card_item_image_container: 'absolute w-full h-full',
  offer_card_item_image: 'w-full h-full rounded-lg',
  offer_card_item_details: 'absolute z-30 bottom-0 p-3 xs:p-5'
};
export const Styles = addPrefixClassName(specialOfferStyles, 'specialOffer_cl');
