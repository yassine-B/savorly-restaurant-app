import React from 'react';
import { useTranslation } from 'next-i18next';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Styles } from './Styles';

import { Text } from '@src/Components/Text';
import { Title } from '@src/Components/Title';
import { Button } from '@src/Components/Button';
import { useResize } from '@src/utils/hooks/useResize';

function Newsletter() {
  const { t, i18n } = useTranslation('common');
  const [width] = useResize();
  const onSubmit = (values: { email: string }) => {
    if (isValid) {
      alert(JSON.stringify(values, null, 2));
      resetForm();
    }
  };
  const subscribeSchema = Yup.object().shape({
    email: Yup.string().email(t('newsletter.error_message')).required(t('newsletter.error_message'))
  });
  const { values, touched, errors, handleBlur, handleChange, resetForm, handleSubmit, isValid } =
    useFormik({
      initialValues: { email: '' },
      onSubmit: onSubmit,
      validationSchema: subscribeSchema
    });
  const franceVersionHeight = (i18n.language === 'fr' && width <= 400 && 'h-96') || '';

  return (
    <>
      <section className={`${franceVersionHeight} ${Styles.newsletter_container}`}>
        <div className={Styles.newsletter_content_container}>
          <div className={Styles.newsletter_content}>
            <div className={Styles.newsletter_content_details}>
              <Title size="large" color="white" titleTransform="capitalize">
                {t('newsletter.title')}
              </Title>
              <Text color="white">{t('newsletter.description')}</Text>
            </div>
            <div className={Styles.newsletter_form}>
              <form onSubmit={handleSubmit} className={Styles.newsletter_input_container}>
                <input
                  className={Styles.newsletter_input}
                  type="text"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={t('newsletter.placeholder')}
                />

                <Button type="submit" shape="normal" styles="py-2">
                  {t('newsletter.button')}
                </Button>
              </form>
              {touched.email && errors.email && (
                <p className={Styles.newsletter_error_message}>{t('newsletter.error_message')}</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Newsletter;
