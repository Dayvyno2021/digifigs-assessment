import * as React from 'react';
import Box from '@mui/material/Box';
import { theme } from '../components/Theme';
import { useNavigate } from 'react-router-dom';

const signup = {
  width: '100%',
  bgcolor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  py: '4.8125rem',
  justifyContent: 'center',
  alignItems: 'center',
  container: {
    width: '30rem',
    height: '46.625rem',
    bgcolor: '#FFFFFF',
    p: '3rem',
    borderRadius: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  '.close': {
    width: '100%',
    height: '2.5rem',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    '&>img': {
      
    }
  },
  '.sign-up-wrapper': {
    width: '100%',
    height: '8.5rem',
    display: 'flex',
    mb: '1rem',
    justifyContent: 'center',
    '.sign-up': {
      width: '22.5rem',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    '.sign-up-content': {
      width: '100%',
      height: '5rem',
      display: 'flex',
      flexDirection: 'column',
      '.sign-up-content-1':{
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '1.5rem',
        lineHeight: '1.875rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center',
        textAlign: 'center',
        color: '#121212',
      },
      '.sign-up-content-2': {
        fontStyle: 'normal',
        fontWeight: '475',
        fontSize: '1rem',
        lineHeight: '1.5rem',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#3D3D3D',
        justifyContent: 'center'
      }
    }
  },
  '.content-wrapper':{
    width: '24rem',
    height: '18.25rem',
    display: 'flex',
    justifyContent: 'center',
    '.content': {
      width: '100%',
      height: '100%',
      '.names': {
        width: '100%',
        height: '3.5rem',
        display: 'flex',
        flexDirection: 'row',
        mb: '1rem',
        justifyContent: 'space-between',
        '&>input': {
          width: '11.5rem',
          height: '3.5rem',
          bgcolor: '#F7F7F7',
          borderRadius: '0.5rem',
          border: 'none',
          p: '1.125rem 1.5rem',
          boxSizing: 'border-box',
          Weight: '475',
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
          transition: 'all 0.3s',
          '&:focus': {
            outline: '1px solid lightgrey',
          }
        },
      },
      '.address': {
        width: '24rem',
        height: '3.5rem',
        bgcolor: '#F7F7F7',
        borderRadius: '0.5rem',
        mb: '1rem',
        '&>input': {
          width: '100%',
          p: '1.125rem 1.5rem',
          boxSizing: 'border-box',
          Weight: '475',
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
          borderRadius: theme.radius,
          border: 'none',
          bgcolor: '#F7F7F7',
          transition: 'all 0.3s',
          '&:focus': {
            outline: '1px solid lightgrey',
          }
        }
      },
      '.password-wrapper': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '24rem',
        height: '4.75rem',
        mb: '1rem',
        '.password': {
          width: '100%',
          height: '3.5rem',
          bgcolor: '#F7F7F7',
          borderRadius: theme.radius,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          '&>img': {
            mr: '1.5rem',
            bgcolor: 'transparent',
          },
          '&>input': {
            bgcolor: 'transparent',
            width: '80%',
            p: '1.125rem 1.5rem',
            boxSizing: 'border-box',
            Weight: '475',
            borderRadius: theme.radius,
            fontSize: '0.875rem',
            lineHeight: '1.25rem',
            border: 'none',
            transition: 'all 0.3s',
            '&:focus': {
              outline: 'none',
            }
          }
        },
        '.password-rule': {
          fontStyle: 'normal',
          fontWeight: '475',
          fontSize: '0.75rem',
          lineHeight: '1.125rem',
          color: '#121212'
        }
      },
      '.confirm-password': {
        display: 'flex',
        width: '24rem',
        height: '3.5rem',
        alignItems: 'center',
        bgcolor: '#F7F7F7',
        justifyContent: 'space-between',
        borderRadius: theme.radius,
        '&>img': {
          mr: '1.5rem',
          bgcolor: 'transparent',
        },
        '&>input': {
          bgcolor: 'transparent',
          width: '80%',
          p: '1.125rem 1.5rem',
          boxSizing: 'border-box',
          borderRadius: theme.radius,
          Weight: '475',
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
          border: 'none',
          transition: 'all 0.3s',
          '&:focus': {
            outline: 'none',
          }
        }
      }
    }
  },
  '.btn-wrapper': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '24rem',
    height: '5.875rem',
    mt: '1rem',
    '.btn': {
      width: '100%',
      height: '3.5rem',
      borderRadius: theme.radius,
      bgcolor: theme.palette.secondary.main,
      border: 'none',
      cursor: 'pointer',
      color: '#FFFFFF'
    },
    '.text': {
      width: '19.3rem',
      height: '2.25rem',
      fontWeight: '475',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#121212',
      fontSize: '0.75rem',
      lineHeight: '1.125rem',
      textAlign: 'center'
    }
  },
  '.exist': {
    mt: '1rem',
    fontWeight: '400',
    fontSize: '1rem',
    lineHeight: '1.5rem',
    color: '#3D3D3D',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    height: '1.5rem'
  }

}
const SignupPage = () => {

  const navigate = useNavigate();

  const [firstname, setFirstname] = React.useState('');
  const [lastname, setLastname] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [confirmPsw, setConfirmPsw] = React.useState('');

  const handleDisable = () => {
    if (!firstname || !lastname || !address || !password || !confirmPsw) return true;
    return false;
  }

  const submitForm = (e) => {
    e.preventDefault();
    // console.log({ firstname, lastname, password, address });
    const details = { firstname, lastname, password, address };
    localStorage.setItem('giftDetails', JSON.stringify(details));
    navigate('/welcome')
  }

  return (
    <Box sx={signup}>
      <Box sx={signup.container} component='form' onSubmit={submitForm}>
        <div className="close">
          <img src="images/close_btn.png" alt="close" width='24px' height='24px' />
        </div>
        <div className="sign-up-wrapper">
          <div className="sign-up">
            <img src="images/logo.png" alt="logo" width='28.37px' height='48px' />
            <div className="sign-up-content">
              <div className="sign-up-content-1">Sign up</div>
              <div className="sign-up-content-2">
                You’re just a few clicks away from creating your wish list.
              </div>
            </div>
          </div>
        </div>
        <div className="content-wrapper">
          <div className="content">
            <div className="names">
              <input type="text" placeholder='First name' value={firstname}
                onChange = {(e)=>setFirstname(e.target.value)}
              />
              <input type="text" placeholder='Last name' value={lastname}
                onChange={(e)=>setLastname(e.target.value)}
              />
            </div>
            <div className="address">
              <input type="text" placeholder='Email address' value={address}
                onChange={e=>setAddress(e.target.value)}
              />
            </div>
            <div className="password-wrapper">
              <div className="password">
                <input type="password" placeholder='Password' value={password}
                  onChange={e=>setPassword(e.target.value)}
                />
                <img src="images/see.png" alt="see" width='20px' height='20px' />
              </div>
              <div className="password-rule">
                Your password must contain at least 8 characters.
              </div>
            </div>
            <div className="confirm-password">
              <input type="password" placeholder='Confirm password' value={confirmPsw}
                onChange = {e=>setConfirmPsw(e.target.value)}
              />
              <img src="images/see.png" alt="see" width='20px' height='20px' />
            </div>
          </div>
        </div>
        <div className="btn-wrapper">
          <button className="btn" disabled={handleDisable()} type='submit'
            style={{opacity: handleDisable()?'0.5':'1'}}
          >
            Sign up
          </button>
          <div className="text">
            By signing up on Giftly, you agree to our Privacy Policy and Terms of Service
          </div>
        </div>
        <div className="exist">
          Aleardy have an account?<strong style={{marginLeft: '.5rem'}}>Sign in</strong>
        </div>
      </Box>
    </Box>
  )
}

export default SignupPage