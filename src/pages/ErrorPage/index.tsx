import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useMode } from '../../contexts/ModeContext';
import { ReactComponent as NotYetLight } from '../../assets/icons/character/not_yet_light.svg';
import { ReactComponent as NotYetDark } from '../../assets/icons/character/not_yet_dark.svg';
import MainGlobalNavBar from '../../components/MainGlobalNavBar';
import FootNavBar from '../../components/FootNavBar';
import Text from '../../components/Text';
import * as S from './ErrorPage.styled';

const ErrorPage = () => {
  const mode = useMode();
  const navigate = useNavigate();
  const initialCountdown = 3;
  const [countdown, setCountdown] = useState(initialCountdown);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);
    return () => {
      clearTimeout(timer);
      if (countdown === 1) navigate('/');
    };
  }, [countdown]);

  return (
    <S.Container>
      <S.Header>
        <MainGlobalNavBar />
      </S.Header>
      <S.Main>
        {mode === 'light' ? <NotYetLight /> : <NotYetDark />}
        <Text size="medium" color="gray">
          잘못된 접근이에요!
        </Text>
        <Text size="small" color="gray">
          {countdown}초 후에 홈으로 이동합니다.
        </Text>
      </S.Main>
      <S.Footer>
        <FootNavBar />
      </S.Footer>
    </S.Container>
  );
};

export default ErrorPage;
