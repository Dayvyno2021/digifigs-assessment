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
    height: '14.875rem',
    display: 'flex',
    flexDirection: 'column',
    '.logo': {
      mb: '1.5rem'
    },

    '.header-wrapper': {
      mb: '1.5rem',
      '.header': {
        mb: '2px',
        width: '100%',
        height: '1.875',
        fontWeight: '700',
        fontSize: '1.5rem',
        lineHeight: '1.875',
        color: theme.white
      },
      '.body': {
        height: '3.375rem',
        width: '31.25rem',
        [theme.breakpoints.down('sm')]: {
          width: '28rem'
        },
        fontWeight: '475',
        fontSize: '1.125rem',
        lineWeight: '1.69rem',
        display: 'flex',
        aligntItems: 'center',
        color: theme.white
      }
    }
  },
  '.btns-wrapper': {
    width: '100%',
    height: '3.5rem',
    p: '0',
    '&>button': {
      width: '24rem',
      p: '1rem 0',
      borderRadius: theme.radius,
      fontWeight: '1.25rem',
      color: theme.palette.secondary.main,
      border: 'none',
      bgcolor: 'transparent'
    }
  }
}

const WelcomePage = () => {
  const navigate = useNavigate();

  const [user, setUser] = React.useState(null);

  React.useState(() => {
    const person = localStorage.getItem('giftDetails') ?
      JSON.parse(localStorage.getItem('giftDetails')) : null;
    setUser(person)
  }, [])

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
        <div className="header-wrapper">
          <div className="header">
            Hello {user && user.firstname}, Welcome to Giftly 🎉
          </div>
          <div className="body">
            To continue using Giftly, head over to your inbox and click on the verification link we just sent you.
          </div>
        </div>
        <div className="btns-wrapper">
          <button onClick={()=>navigate('/wishlist')} >
            <span style={{cursor: 'pointer'}}>Resend email</span>
          </button>
        </div>
      </div>
    </Box>
  )
}

export default WelcomePage