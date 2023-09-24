import React from 'react';

import loadingGif from '../../assets/icons/loading/loading.gif';
import * as S from './LoadingPage.styled';

const LoadingPage = () => {
  return (
    <S.Container>
      <img src={loadingGif} alt="loading..." />
    </S.Container>
  );
};

export default LoadingPage;
