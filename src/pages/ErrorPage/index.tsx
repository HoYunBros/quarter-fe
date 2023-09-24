import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as Error } from '../../assets/icons/character/error.svg';
import MainGlobalNavBar from '../../components/MainGlobalNavBar';
import FootNavBar from '../../components/FootNavBar';
import Text from '../../components/Text';
import * as S from './ErrorPage.styled';

const ErrorPage = () => {
  const navigate = useNavigate();
  const handleHomeButtonClick = () => {
    navigate('/');
  };
  return (
    <S.Container>
      <S.Header>
        <MainGlobalNavBar />
      </S.Header>
      <S.Main>
        <Error />
        <S.TextWrapper>
          <Text size="large" color="black">
            오류가 발생했어요
          </Text>
          <S.DescriptionWrapper>
            <Text size="small" color="gray">
              주소가 잘못 입력되었거나,
            </Text>
            <Text size="small" color="gray">
              변경 혹은 삭제되어 페이지를 찾을 수 없어요.
            </Text>
          </S.DescriptionWrapper>
        </S.TextWrapper>
        <S.HomeButton onClick={handleHomeButtonClick}>홈으로 가기</S.HomeButton>
      </S.Main>
      <S.Footer>
        <FootNavBar />
      </S.Footer>
    </S.Container>
  );
};

export default ErrorPage;
