import React from 'react';
import JoinForm from '../components/JoinForm';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { OuterBox } from '../../commons/components/LayoutBox';
const Join = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('회원가입')}</title>
      </Helmet>
      <OuterBox>
        <h1>{t('회원가입')}</h1>
      <JoinForm />
      </OuterBox>
    </>
  );
};

export default React.memo(Join);
