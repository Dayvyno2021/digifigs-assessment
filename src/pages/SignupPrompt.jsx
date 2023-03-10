import * as React from 'react';
import Box from '@mui/material/Box';
import { theme } from '../components/Theme';
import { useNavigate } from 'react-router-dom';

const prompt = {

  width: '100%',
  minHeight: '100vh',
  position: 'relative',
  bgcolor: theme.palette.primary.main,
  '.nav': {
    height: '6rem',
    width: '100%',
    py: '1.25rem',
    display: 'flex',
    justifyContent: 'flex-end',
    '&>button': {
      width: '14.69rem',
      height: '3.5rem',
      bgcolor: '#FFFFFF',
      mr: '6rem',
      borderRadius: '0.5rem',
      border: '1px solid #121212',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '1rem',
      lineHeight: '1.5rem',
      color: '#121212'
    }
  },
  '.main': {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform:'translate(-50%, -50%)',
    width: '31.25rem',
    [theme.breakpoints.down('sm')]: {
      width: '28rem'
    },
    height: '13.25rem',
    display: 'flex',
    flexDirection: 'column',
    '.logo': {
      mb: '1.5rem'
    },
    '.text': {
      height: '3.75',
      mb: '1.5rem',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '1.25rem',
        lineHeight: '1.875rem',
        color: '#FFFFFF'
    }
  },
  '.btns-wrapper': {
    height: '3.5rem',
    '&>button': {
      height: '100%',
      width: '11.25rem',
      borderRadius: '0.5rem',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '1rem',
      lineHeight: '1.5rem',
      py: '1rem',
      cursor: 'pointer'
    },
    '.cancel': {
      bgcolor: '#FFFFFFF',
      border: '1px solid #121212',
      color: '#121212',
      mr: '1.5rem'
    },
    '.sign-up': {
      bgcolor: theme.palette.secondary.main,
      border: 'none'
    }
  }
}

const SignupPrompt = () => {
  const navigate = useNavigate();
  return (
    <Box sx={prompt}>
      <div className="nav">
        <button onClick={()=>navigate('/')}>
          Go back to site
        </button>
      </div>
      <div className="main">
        <div className="logo">
          <img src="images/logo.png" alt="logo" width='28.37px' height='48px' />
        </div>
        <div className="text">
          Hi there! Kindly sign up to continue using Giftly and share your wishlist with your family and friends.
        </div>
        <div className="btns-wrapper">
          <button className="cancel">Cancel</button>
          <button className="sign-up" onClick={()=>navigate('/sign-up')}>
            Sign up
          </button>
        </div>
      </div>
    </Box>
  )
}

export default SignupPrompt