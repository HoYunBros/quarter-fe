import React from 'react';

import { routes } from '../../router';
import { useTheme } from 'styled-components';
import { ReactComponent as ArrowLeft } from '../../assets/icons/common/arrow_left.svg';
import { ReactComponent as Close } from '../../assets/icons/common/close.svg';
import * as S from './SubGlobalNavBar.styled';

type Props = {
  backTo: string;
  progressWidth: string;
};

const SubGlobalNavBar = ({ backTo, progressWidth }: Props) => {
  const theme = useTheme();
  return (
    <>
      <S.Nav>
        <S.ButtonContainer>
          <S.LinkButton to={backTo}>
            <ArrowLeft fill={theme.colors.gray_05} />
          </S.LinkButton>
          <S.LinkButton to={routes.home}>
            <Close fill={theme.colors.gray_05} />
          </S.LinkButton>
        </S.ButtonContainer>
      </S.Nav>
      <S.ProgressBarContainer>
        <S.TotalProgressBar />
        <S.ProgressBar $progressWidth={progressWidth} />
      </S.ProgressBarContainer>
    </>
  );
};

export default SubGlobalNavBar;
