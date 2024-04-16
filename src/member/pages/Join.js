import React from 'react';
import JoinForm from '../components/JoinForm';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { OuterBox } from '../../commons/components/LayoutBox';
import { MainTitle } from '../../commons/components/TitleBox';
const Join = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('회원가입')}</title>
      </Helmet>
      <OuterBox>
        <MainTitle>
          <h1>{t('회원가입')}</h1>
        </MainTitle>
        <JoinForm />
      </OuterBox>
    </>
  );
};

export default React.memo(Join);
