import { styled } from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 340px;
  height: 460px;
  padding: 0 20px;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.card};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.colors.shadow};
`;

export const BookmarkWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: flex-end;
  align-items: center;
  padding: 16px 0;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
`;

export const ImageWrapper = styled.div<{ $flavorsCount: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ $flavorsCount }) => {
    switch ($flavorsCount) {
      case 2:
        return '160px';
      case 3:
        return '200px';
      case 4:
        return '200px';
      default:
        return '290px';
    }
  }};
  height: 180px;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 72px;
`;

export const Image = styled.img`
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
`;

export const UpperWrapper = styled.div<{ $hasPaddingTop: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: ${({ $hasPaddingTop }) => ($hasPaddingTop ? '68px' : '0')};
  align-items: center;
  width: 100%;
  height: fit-content;
`;

export const TextWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
`;
