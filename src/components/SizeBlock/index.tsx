import React from 'react';

import { ReactComponent as Single } from '../../assets/icons/icecreamSize/single.svg';
import { ReactComponent as Double_A } from '../../assets/icons/icecreamSize/double_a.svg';
import { ReactComponent as Double_B } from '../../assets/icons/icecreamSize/double_b.svg';
import { ReactComponent as Pint_A } from '../../assets/icons/icecreamSize/pint_a.svg';
import { ReactComponent as Pint_B } from '../../assets/icons/icecreamSize/pint_b.svg';
import * as S from './SizeBlock.styled';

type Props = {
  size?: 'single' | 'double' | 'pint' | 'quart' | 'family' | 'half-gallon';
};

const SizeBlock = ({ size = 'double' }: Props) => {
  return (
    <S.Container>
      {size === 'single' && <Single />}
      {size === 'double' && <Double_A />}
      {size === 'pint' && <Pint_A />}
      {size === 'quart' && (
        <>
          <Double_A />
          <Double_B />
        </>
      )}
      {size === 'family' && (
        <>
          <Pint_A />
          <Double_B />
        </>
      )}
      {size === 'half-gallon' && (
        <>
          <Pint_A />
          <Pint_B />
        </>
      )}
    </S.Container>
  );
};

export default SizeBlock;
