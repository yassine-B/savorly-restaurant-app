import { addPrefixClassName } from '../../utils/AddPrefixClassName';

export const newsletterStyles = {
  newsletter_container: 'bg-primary w-full flex items-center justify-center h-80 xs:h-72 md:h-60',
  newsletter_content_container: 'w-11/12 sm:w-10/12 md:w-11/12 lg:w-9/12',
  newsletter_content: 'flex flex-col items-center gap-6 justify-between md:flex-row md:gap-10',
  newsletter_content_details: 'w-11/12 space-y-2 sx:w-8/12 md:w-1/2',
  newsletter_form: 'flex flex-col w-11/12 sx:w-8/12 md:w-6/12',
  newsletter_input_container: 'bg-almondColor py-2 px-2 rounded flex justify-between',
  newsletter_input: 'w-8/12 py-2 bg-transparent outline-none text-black',
  newsletter_error_message: 'text-red-500 mt-1'
};
export const Styles = addPrefixClassName(newsletterStyles, 'newsletter_cl');
