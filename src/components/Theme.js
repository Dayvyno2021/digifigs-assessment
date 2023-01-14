import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    common: {},
    primary:{
      main: '#121212'
    },
    secondary: {
      main: '#121212'
    },
  },
  subheading: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '1rem',
    lineHeight: '1.5rem',
    color: '#121212',
  },
  note:{
    fontStyle: 'normal',
    fontWeight: '475',
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    color: '#3D3D3D',
  }
})