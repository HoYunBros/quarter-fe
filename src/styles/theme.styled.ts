const lightColors = {
  primary: '#950FFF',
  white: '#FFFFFF',
  gray_01: '#F5F5F5',
  gray_02: '#EEEEEE',
  gray_04: '#666666',
  gray_05: '#333333',
  black: '#000000',
};

const reversedLightColors = {
  primary: '#950FFF',
  black: '#FFFFFF',
  gray_01: '#333333',
  gray_02: '#666666',
  gray_04: '#EEEEEE',
  gray_05: '#F5F5F5',
  white: '#000000',
};

const fontSizes = {
  small: '12px',
  medium: '14px',
  large: '16px',
  x_large: '24px',
};

const fontWeights = {
  normal: 400,
  semi_bold: 500,
  bold: 700,
};

export const lightTheme = {
  colors: lightColors,
  fontSizes,
  fontWeights,
};

export const darkTheme = {
  colors: reversedLightColors,
  fontSizes,
  fontWeights,
};
