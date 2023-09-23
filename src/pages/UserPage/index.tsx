import React from 'react';

import { useMode } from '../../contexts/ModeContext';
import { ReactComponent as NotYetLight } from '../../assets/icons/character/not_yet_light.svg';
import { ReactComponent as NotYetDark } from '../../assets/icons/character/not_yet_dark.svg';
import MainGlobalNavBar from '../../components/MainGlobalNavBar';
import FootNavBar from '../../components/FootNavBar';
import Text from '../../components/Text';
import * as S from './UserPage.styled';

const UserPage = () => {
  const mode = useMode();
  return (
    <S.Container>
      <S.Header>
        <MainGlobalNavBar />
      </S.Header>
      <S.Main>
        {mode === 'light' ? <NotYetLight /> : <NotYetDark />}
        <Text size="small" color="gray">
          아직 저장한 조합이 없어요
        </Text>
      </S.Main>
      <S.Footer>
        <FootNavBar />
      </S.Footer>
    </S.Container>
  );
};

export default UserPage;
