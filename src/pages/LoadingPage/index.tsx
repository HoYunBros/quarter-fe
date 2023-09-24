import React from 'react';

import Text from '../../components/Text';
import * as S from './LoadingPage.styled';

const LoadingPage = () => {
  return (
    <S.Container>
      <Text size="large" color="black">
        로딩 중...
      </Text>
    </S.Container>
  );
};

export default LoadingPage;
