import React from 'react';
import { useNavigate } from 'react-router-dom';

import { routes } from '../../router';
import SubGlobalNavBar from '../../components/SubGlobalNavBar';
import Text from '../../components/Text';
import FootButton from '../../components/FootButton';
import { PROGRESS_BAR_WIDTH } from '../../constants';
import { useUserItem, useChangeSize } from '../../contexts/UserItemContext';
import * as S from './SizePickPage.styled';

import { useGetSizes } from '../../services/useGetSizes';

const SizePickPage = () => {
  const { size } = useUserItem();
  const changeSize = useChangeSize();
  const initSize = () => {
    changeSize({ id: -1, value: -1 });
  };
  const navigate = useNavigate();
  const { data, isLoading } = useGetSizes();
  return (
    <>
      {isLoading && <div>Loading...</div>}
      {data && (
        <S.Container>
          <S.Header>
            <SubGlobalNavBar backTo={routes.home} progressWidth={PROGRESS_BAR_WIDTH.START} />
          </S.Header>
          <S.Main>
            <Text size="large">어떤 사이즈를 드시나요?</Text>
            <S.SizePickContainer>
              <Text size="medium">1가지 맛</Text>
              <S.SizesWrapper>
                {data?.sizes?.slice(0, 2).map(_size => (
                  <S.SizeWrapperButton
                    key={_size.id}
                    onClick={() => {
                      if (size.id === _size.id) {
                        initSize();
                      } else {
                        changeSize({ id: _size.id, value: _size.value });
                      }
                    }}
                  >
                    <S.SizeBlockWrapper $isClicked={size.id === _size.id}>
                      <S.SizeImage src={_size.imageUrl} />
                    </S.SizeBlockWrapper>
                    <Text size="small">{_size.name}</Text>
                  </S.SizeWrapperButton>
                ))}
              </S.SizesWrapper>
            </S.SizePickContainer>
            <S.SizePickContainer>
              <Text size="medium">2가지 맛</Text>
              <S.SizesWrapper>
                {data?.sizes?.slice(2, 4).map(_size => (
                  <S.SizeWrapperButton
                    key={_size.id}
                    onClick={() => {
                      if (size.id === _size.id) {
                        initSize();
                      } else {
                        changeSize({ id: _size.id, value: _size.value });
                      }
                    }}
                  >
                    <S.SizeBlockWrapper $isClicked={size.id === _size.id}>
                      <S.SizeImage src={_size.imageUrl} />
                    </S.SizeBlockWrapper>
                    <Text size="small">{_size.name}</Text>
                  </S.SizeWrapperButton>
                ))}
              </S.SizesWrapper>
            </S.SizePickContainer>
            <S.SizePickContainer>
              <Text size="medium">3가지 맛 이상</Text>
              <S.SizesWrapper>
                {data?.sizes?.slice(4, 8).map(_size => (
                  <S.SizeWrapperButton
                    key={_size.id}
                    onClick={() => {
                      if (size.id === _size.id) {
                        initSize();
                      } else {
                        changeSize({ id: _size.id, value: _size.value });
                      }
                    }}
                  >
                    <S.SizeBlockWrapper $isClicked={size.id === _size.id}>
                      <S.SizeImage src={_size.imageUrl} />
                    </S.SizeBlockWrapper>
                    <Text size="small">{_size.name}</Text>
                  </S.SizeWrapperButton>
                ))}
              </S.SizesWrapper>
            </S.SizePickContainer>
          </S.Main>
          <S.Footer>
            <FootButton
              onClick={() => {
                navigate(routes.ingredientSelect);
              }}
              disabled={size.id === -1}
            >
              다음
            </FootButton>
          </S.Footer>
        </S.Container>
      )}
    </>
  );
};

export default SizePickPage;
