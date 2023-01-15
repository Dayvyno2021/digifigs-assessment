import { createTheme } from '@mui/material/styles';

const blue='#14142B'
const pink = '#EE2A7B'
const white = '#FFFFFF'
export const theme = createTheme({
  palette: {
    common: {},
    primary:{
      main: blue
    },
    secondary: {
      main: pink
    },
  },
  white: white,
  radius: '0.5rem',
  subheading: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '1rem',
    lineHeight: '1.5rem',
    color: '#121212',
  },
  whiteButton: {
    fontWeight: '500',
    fontSize: '1rem',
    lineHeight: '1.5rem',
    color: white

  },
  note:{
    fontStyle: 'normal',
    fontWeight: '475',
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    color: '#3D3D3D',
  }
})