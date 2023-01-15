import * as React from 'react';
import Box from '@mui/material/Box';
import { theme } from '../components/Theme';
import Grid from '@mui/material/Grid';

const wish = {
  width: '100%',
  minHeight: '56.25rem',
  '.container': {
    minHeight: '56.25rem',
    display: 'flex',
    flexDirection: 'row',
    '.sidebar': {
      minHeight: '56.25rem',
      width: '15rem',
      bgcolor: theme.palette.primary.main,
      '.sidebar-logo': {
        pl: '1.5rem',
        pt: '1.5rem',
      },
      '.sidebar-content': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        p: '0',
        position: 'relative',
        width: '12rem',
        height: '21.25rem',
        left: '1.5rem',
        top: '10.5rem',
        [theme.breakpoints.down('md')]: {
          left: '0.5rem'
        },
        '.my-wishlist': {
          width: '100%',
          height: '3rem',
          borderRadius: theme.radius,
          display: 'flex',
          alignItems: 'center',
          color: theme.white,
          '&>img': {
            mr: '0.5rem'
          }
        },
        '.wishlist-new': {
          p: '0.25rem .5rem',
          width: '2.875rem',
          height: '1.75rem',
          borderRadius: theme.radius,
          bgcolor: '#FDC9FF',
          ml: '1rem',
          display: 'flex',
          [theme.breakpoints.down('md')]: {
            width: '2rem',
            ml: '1rem'
          },
          justifyContent: 'center',
          alignItems: 'center'
        }
      },
      '.sidebar-footer': {
        position: 'absolute',
        width: '12rem',
        height: '3.5rem',
        left: '1.5rem',
        [theme.breakpoints.down('md')]: {
          left: '0.5rem'
        },
        top: '51.25rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '.footer': {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          p: '0',
          width: '11rem',
          height: '2.25rem',
          '.profile-name': {
            width: '6.5rem',
            textAlign: 'center',
            height: '1.5rem',
            fontWeight: '500',
            ml:'auto',
            fontSize: '1rem',
            lineHeight: '1.5rem',
            color: theme.white
          },
          '.profile-logo': {
            boxSizing: 'border-box',
            width: '2.25rem',
            height: '2.25rem',
            bgcolor: '#EE2A7B',
            border: '1.5px solid #FFFFFF',
            borderRadius: '100px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: '600',
            fontSize: '1.125rem',
            lineHeight: '1.69rem',
            color: '#FFFFFF'
          }
        }
      }
    },

  },
  '.mb24':{
    mb: '1.5rem'
  },
  '.content': {
    minHeight: '56.25rem',
    '.nav': {
      boxSizing: 'border-box',
      minHeight: '6rem',
      bgcolor: theme.white,
      '.nav-wishlist': {
          height: '1.69rem',
          fontWeight: '500',
          fontSize: '1.125rem',
          lineHeight: '1.69rem',
          color: '#121212',
          width: '100%',
          ml: '3rem',
          [theme.breakpoints.down('lg')]: {
            ml: '1.5rem'
          },
          [theme.breakpoints.down('md')]: {
            ml: '.5rem'
          },
          [theme.breakpoints.down('sm')]: {
            ml: '0',
            py: '1rem',
            pl: '1rem',
            boxSizing:'content-box'
          },
          
        },
        '.search': {
          height: '3.5rem',
          bgcolor: '#F7F7F7',
          borderRadius: theme.radius,
          pl: '1rem',
          [theme.breakpoints.down('sm')]: {
            pl: '1rem'
          },
          '& input': {
            border: 'none',
            bgcolor: 'transparent',
            fontWeight: '500',
            fontSize: '1rem',
            lineHeight: '1.5rem',
            color: '#2E2E3A',
            [theme.breakpoints.down('lg')]: {
              width: '80%'
            }
          },
          '& img':{
            mr: '.5rem'
          },
          '&>label': {
            [theme.breakpoints.down('lg')]: {
              width: '20%'
            }
          }
        },
        '.btn': {
          height: '3.5rem',
          p: '1rem 2rem',
          bgcolor: theme.palette.secondary.main,
          color: '#FFFFFF',
          display: 'flex',
          justifyContent: 'center',
          mr: '3rem',
          borderRadius: theme.radius,
          alignItems: 'center',
          [theme.breakpoints.down('lg')]: {
            mr: '1.5rem',
            p: '1rem 1rem'
          },
          [theme.breakpoints.down('md')]: {
            mr: '.5rem',
          },
          [theme.breakpoints.down('sm')]: {
            p: '1rem 4rem',
            width: '100%',
            mr: '0'
          },
          border: 'none',
      }
    },
    '.main': {
      flexGrow: '1',
      '.main-container': {
        width: '26.25rem',
        height: '34.5625rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        '&>img': {
          width: '22.5rem',
          height: '22.5rem',
          [theme.breakpoints.down('sm')]: {
            width: '20rem',
            height: '20rem',
          }
        }
      },
      '.main-2': {
        width: '26.25rem',
        height: '12.0625rem',
      },
      '.main-text': {
        width: '26.25rem',
        height: '7.0625rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      },
      '.main-text-title': {
        height: '1.875rem',
        width: '26.25rem',
        fontWeight: '700',
        fontSize: '1.5rem',
        color: '#121212',
        lineHeight: '1.875rem'
      },
      '.main-text-body': {
        height: '5.0625rem',
        fontWeight: '475',
        fontSize: '1.125rem',
        width: '26.25rem',
        lineHeight: '1.6875rem',
        textAlign: 'center',
        color: '#3D3D3D'
      },
      '.main-button': {
        height: '5rem',
        width: '26.25rem',
        display: 'flex',
        alignItems: 'end',
        justifyContent: 'center',
        '&>button': {
          width: '16.975rem',
          height: '3.5rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '1rem 4rem',
          bgcolor: theme.palette.secondary.main,
          fontWeight: '500',
          fontSize: '1rem',
          lineHeight: '1.5rem',
          color: theme.white,
          borderRadius: theme.radius,
          border: 'none'
        }
      }
    }
  }
}

const MainPage = () => {

  const [user, setUser] = React.useState(null);

  
  const profileName = (name) => {
    const fullname = `${name.firstname} ${name.lastname}`;
    if (fullname.length >= 10) return `${fullname.substr(0, 10)}..`
    return fullname
  }
  const nameInitials = (name) => {
    return `${name.firstname[0]}${name.lastname[0]}`
  }
  
  React.useState(() => {
    const person = localStorage.getItem('giftDetails') ?
      JSON.parse(localStorage.getItem('giftDetails')) : null;
    setUser(person)
  }, [])
  return (
    <Box sx={wish}>
      <div className='container'>
        <div className="sidebar">
          <div className="sidebar-logo">
            <img src="images/logo.png" alt="logo" width='28.37px' height='48px' />
          </div>
          <div className="sidebar-content">
            <div className="my-wishlist mb24">
              <img src="/images/my-wishlist.png" alt="my" width='20px' height='20px' /> My wishlist
            </div>
            <div className="leaderboard my-wishlist mb24">
              <img src="/images/leaderboard.png" alt="my" width='20px' height='20px' /> Leaderboard
            </div>
            <div className="gift-ideas my-wishlist mb24">
              <img src="/images/gift-idea.png" alt="my" width='20px' height='20px' /> Gift ideas
              <span className='wishlist-new'>New</span>
            </div>
            <div className="archive my-wishlist mb24">
              <img src="/images/archive.png" alt="my" width='20px' height='20px' /> Archive
            </div>
            <div className="support my-wishlist">
              <img src="/images/support.png" alt="my" width='20px' height='20px' /> Support
            </div>
          </div>
          <div className="sidebar-footer mb24">
            <div className="footer">
              <div className="profile-logo">
                {user? (nameInitials(user)):('')}
              </div>
              <div className="profile-name">{user? (profileName(user)):('')} </div>
              <img src="images/down.png" alt="down" width='20px' height='20px'/>
            </div>
          </div>
        </div>

        <Grid className="content" container direction='column'>
          <Grid container className='nav' justifyContent='space-between' alignItems='center'>
            <Grid xs={12} sm={3} md={5} item >
              <div className="nav-wishlist">My Wishlists</div>
            </Grid>
            <Grid xs={12} sm={4} md={3} item container className='search' alignItems='center'>
              <label htmlFor="search" >
                <img src="images/find.png" alt="find" width='20px' height='20px' />
              </label>
              <input type='search' id='search' placeholder='Find friends' />
            </Grid>
            <Grid xs={12} sm={3.5} md={3} item container alignItems='center' justifyContent='end'
              sx={{[theme.breakpoints.down('sm')]:{justifyContent: 'flex-start'}}}
            >
              <button className="btn">
                <img src='images/add.png' alt='add' width='20px' height='20px'/> Create Wishlist
              </button>   
            </Grid>

          </Grid>
          <Grid className="main" container justifyContent='center' alignItems='center' >
            <div className='main-container'>
              <img src="images/video.png" alt="vid" />
              <div className='main-2'>
                <div className="main-text">
                  <div className="main-text-title">
                    We’ve never met a list we didn’t like
                  </div>
                  <div className="main-text-body">
                    Your first list doesn’t need to be perfect. Just put it out there, and see if it helps receive the best gifts from your friends.
                  </div>
                </div>
                <div className="main-button">
                  <button>
                    <img src="images/add.png" alt="add" width='20px' height='20px' />
                    Create Wishlist
                  </button>
                </div>
              </div>
           </div>
          </Grid>
        </Grid>

      </div>
    </Box>
  )
}

export default MainPage;