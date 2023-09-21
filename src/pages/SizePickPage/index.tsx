import React from 'react';

import { routes } from '../../router';
import SubGlobalNavBar from '../../components/SubGlobalNavBar';
import Text from '../../components/Text';
import SizeBlock from '../../components/SizeBlock';
import FootButton from '../../components/FootButton';
import { PROGRESS_BAR_WIDTH } from '../../constants';
import * as S from './SizePickPage.styled';

const SizePickPage = () => {
  return (
    <S.Container>
      <S.Header>
        <SubGlobalNavBar backTo={routes.home} progressWidth={PROGRESS_BAR_WIDTH.START} />
      </S.Header>
      <S.Main>
        <Text size="large">어떤 사이즈를 드시나요?</Text>
        <S.SizePickContainer>
          <Text size="medium">1가지 맛</Text>
          <S.SizesWrapper>
            <S.SizeWrapper>
              <SizeBlock size="single" />
              <Text size="small">싱글레귤러</Text>
            </S.SizeWrapper>
            <S.SizeWrapper>
              <SizeBlock size="single" />
              <Text size="small">싱글킹</Text>
            </S.SizeWrapper>
          </S.SizesWrapper>
        </S.SizePickContainer>
        <S.SizePickContainer>
          <Text size="medium">2가지 맛</Text>
          <S.SizesWrapper>
            <S.SizeWrapper>
              <SizeBlock size="double" />
              <Text size="small">더블주니어</Text>
            </S.SizeWrapper>
            <S.SizeWrapper>
              <SizeBlock size="double" />
              <Text size="small">더블레귤러</Text>
            </S.SizeWrapper>
          </S.SizesWrapper>
        </S.SizePickContainer>
        <S.SizePickContainer>
          <Text size="medium">3가지 맛 이상</Text>
          <S.SizesWrapper>
            <S.SizeWrapper>
              <SizeBlock size="pint" />
              <Text size="small">파인트</Text>
            </S.SizeWrapper>
            <S.SizeWrapper>
              <SizeBlock size="quart" />
              <Text size="small">쿼터</Text>
            </S.SizeWrapper>
            <S.SizeWrapper>
              <SizeBlock size="family" />
              <Text size="small">패밀리</Text>
            </S.SizeWrapper>
            <S.SizeWrapper>
              <SizeBlock size="half-gallon" />
              <Text size="small">하프갤런</Text>
            </S.SizeWrapper>
          </S.SizesWrapper>
        </S.SizePickContainer>
      </S.Main>
      <S.Footer>
        <FootButton nextTo={routes.ingredientSelect}>다음</FootButton>
      </S.Footer>
    </S.Container>
  );
};

export default SizePickPage;
