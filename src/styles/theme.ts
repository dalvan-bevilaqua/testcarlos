export default {
  container: {
    medium: '105rem',
    small: '97rem'
  },
  border: {
    radius: '0.8rem',
    rounded: '2.4rem'
  },
  font: {
    family:
      "Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xxsmall: '1.0rem',
      xsmall: '1.2rem',
      small: '1.5rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.5rem',
      huge: '4.0rem',
      xhuge: '4.5rem'
    },
    height: {
      medium: '2.5rem'
    }
  },
  colors: {
    red: '#FF0000',
    white: '#FFFFFF',
    black: '#000000',
    alert: '#ED9740',
    danger: '#ED1C24',
    normal: '#46CA9B',
    primary: {
      lightest: '#B5B3F5',
      lighter: '#8F8AFF',
      base: '#635CF7',
      darker: '#413AD1'
    },
    secondary: {
      lighter: '#9BD44E',
      base: '#8CC63F'
    },
    tertiary: {
      lighter: '#DE457D',
      base: '#D4145A'
    },
    gray: {
      lightest: '#F4F4F9',
      lighter: '#EFF0F9',
      base: '#E6E6E6',
      dark: '#B3B3B3',
      darker: '#999999',
      darkest: '#808080',
      xdarkest: '#4D4D4D'
    },
    linear: {
      first: 'linear-gradient(90deg, #4EC5E0 0.21%, #8069FF 99.77%);',
      secondary: 'linear-gradient(90deg, #9BD44E 0.21%, #46CA9B 99.77%);',
    }
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    xmedium: '3.8rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const
