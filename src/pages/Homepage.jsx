import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { theme } from '../components/Theme';
import { useNavigate } from 'react-router-dom';

const home = {
  bgcolor: 'rgba(0, 0, 0, 0.5)',
  minHeight: '100vh',
  minWidth: '100vw',
  position: 'absolute',
  m: '0',
  p: '0',
  display: 'flex',
  py: '26px',
  justifyContent: 'center',
  container: {
    position: 'relative',
    width: '30rem',
    height: '53rem',
    bgcolor: '#FFFFFF',
    borderRadius: '16px',
  },
  heading: {
    display: 'flex',
    justifyContent: 'center',
    width: '30rem',
    height: '15rem'
  },
  close: {
    position: 'absolute',
    top: '3.625rem',
    right: '3.625rem',
  },
  logoC: {
    position: 'absolute',
    top: '6.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& p': {
      fontSize: '1rem',
      lineHeight: '1.5rem',
      fontWeight: '475',
      color: '#3D3D3D'
    },
    '& h3': {
      fontWeight: '700',
      fontSize: '1.5rem',
      lineHeight: '1.875rem',
      color: '#121212'
    }
  },
  main: {
    width: '23rem',
    height: '30.375rem',
    px: '2rem',
    overflowX: 'hidden',
    '::-webkit-scrollbar': {
      width: '2px',
    },
    /* Track */
    '::-webkit-scrollbar-track': {
      background: '#f1f1f1'
    },
    /* Handle */
    '::-webkit-scrollbar-thumb' :{
      background: '#888888'
    },
    /* Handle on hover */
    '::-webkit-scrollbar-thumb:hover': {
      background: '#555555'
    },
  },
  '.input': {
    width: '24rem',
    border: 'none',
    bgcolor: '#F7F7F7',
    borderRadius: '8px',
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: 'lightgrey'
      },
    },
    '& .MuiInputBase-input': {
    },
    '& label': {
      color: '#2E2E3A'
    }
  },
  '.wish-container': {
    width: '24rem',
    height: '10.875rem',
    my: '1rem',
  },
  '.wish-cover': {
    width: '17.9rem',
    height: '2.875rem',
    marginBottom: '1rem'
  },
  '.add-wish': {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '1rem',
    lineHeight: '1.5rem',
    color: '#121212',
  },
  '.wish-detail': {
    fontStyle: 'normal',
    fontWeight: '475',
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    color: '#3D3D3D',
  },
  '.add-container': {
    width: '24rem',
    height: '19.75rem',
    borderRadius: '8px',
    bgcolor: '#F7F7F7',
    position: 'relative',
  },
  '.toggle': {
    position: 'absolute',
    right: '1.5rem',
    top: '1.5rem'
  },
  '.link': {
    p: '0.375rem 0',
    mt: '1rem',
    mb: '0.5rem',
    ml: '1.5rem',
    borderRadius: '1rem',
    width: '15rem',
    height: '2.25rem',
    display: 'flex',
    alignItems:'center',
    '&>img': {
      mr: '0.5rem'
    },
    '.inputC': {
      display: 'flex',
      flexDirection: 'column',
      '&>input': {
        mt: '-18px',
        backgroundColor: 'transparent',
        border:'none',
        transition:'all 0.3s',
        '&:focus': {
          mt: '0',
          border: 'none',
          outline: 'none'
        }
      }
    }
  },
  '.add-link': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
      '&>img': {
        mr: '0.5rem',
        cursor: 'pointer'
    }
  },
  '.purchase': {
    display: 'flex',
    flexDirection: 'column',
    '.purchase-link': {
      display: 'flex',
      ml: '3.25rem',
      py: '0.375rem',
      '&>label': {
        display: 'flex',
        alignItems: 'center'
      },
      '&>input': {
        ml: '0.6rem',
        bgcolor: 'transparent',
        border: 'none',
        transition: 'all 0.3s',
        '&:focus': {
          border: 'none',
          outline: 'none'
        }
      }
    },
    '.purchase-price': {
      width: '17rem',
      height: '2.25rem',
      my: '0.5rem',
      ml: '3.25rem',
      p: '0',
      display: 'flex',
      alignItems: 'center',
      '&>select': {
        width: '3rem',
        height: '2.25rem',
        padding: '0.375rem 0.4375rem',
        backgroundColor: '#F7F7F7',
        border: '0.5px solid #D5D8DF',
        borderRadius: '4px',
        mr: '8px'
      },
      '&>input': {
        fontStyle: 'normal',
        fontWeight: '475',
        fontSize: '1rem',
        lineHeight: '1.5rem',
        color: '#2E2E3A',
        bgcolor: '#F7F7F7',
        border: 'none',
        '&:focus': {
          bgcolor: '#F7F7F7',
          outline: 'none'
        }
      }
    },
  },
  '.add-btn': {
    display: 'flex',
    alignItems: 'center',
    width: '24rem',
    height: '3rem',
    border: '1px dashed #D5D8DF',
    borderRadius: '0.5rem',
    justifyContent: 'center',
    bgcolor: 'transparent',
    my: '1rem',
    '&>img': {
      mr: '0.92rem'
    },
    '&>span': {
      fontWeight: '500',
      lineHeight:'1.5rem'
    }
  },
  '.gift': {
    width: '24rem',
    height: '3rem',
    bgcolor: 'transparent',
    borderRadius: '0.5rem',
    py: '1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none',
    outline:'none',
    my: '1rem',
    cursor: 'pointer',
    '&>img': {
      mr: '0.98rem'
    },
    '&>span': {
      fontWeight: '500',
      lineHeight: '1.5rem',
      fontSize: '1rem',
      color: '#EE2A7B'
    }
  },
  '.control':{
    // width: '30rem',
    height: '8rem',
    // bgcolor: 'lightblue',
    bgcolor: '#FFFFFF',
    pt: '1.5rem',
    boxSizing: 'border-box',
    // pb: '3rem',
    display: 'flex',
    justifyContent: 'space-between',
    borderRadius: '0 0 1rem 1rem',
    px: '3rem',
    '&>button': {
      width: '11.25rem',
      height: '3.5rem',
      borderRadius: '0.5rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '&>img': {
        mr: '0.98rem'
      }
    },
    '.delete': {
      border: '1px solid #121212'
    },
    '.share': {
      bgcolor: '#EE2A7B',
      border: 'none',
      color: '#FFFFFF'
    }
  },
  '.quantity,.wish-description': {
    width: '17rem',
    height: '2.25rem',
    my: '0.5rem',
    ml: '3.25rem',
    p: '0.375rem 0',
    '&>input': {
      border: 'none',
      bgcolor: 'transparent',
      transition:'all 0.3s',
      '&:focus': {
        outline:'none'
      }
    }
  },
  '.store': {
    display: 'flex',
    flexDirection: 'row',
    ml: '1.5rem',
  },
  '.each': {
    mt: '1.5rem',
    position: 'relative',
    mr: '0.5rem',
    '.cross':{
      bgcolor: '#FFFFFF',
      borderRadius: '50%',
      position: 'absolute',
      top: '2px',
      right: '-0.5rem',
      cursor: 'pointer'
    }
  }
}

const Homepage = () => {
  const navigate = useNavigate();
  const [WLName, setWLName] = React.useState('');
  const [WLDesc, setWLDesc] = React.useState('');
  const [toggle, setToggle] = React.useState(false);
  const [store, setStore] = React.useState([]);

  const handleToggle = (e) => {
    e.preventDefault();
    setToggle(!toggle);
  }


  const handleShare = (e) => {
    e.preventDefault();
    console.log({ WLName, WLDesc });
    navigate('/signup-prompt');
  }

  const handleGift = (e) => {
    e.preventDefault();
    navigate('/gift-suggestion')
  }

  const removeProduct = (products, index) => {
    products && products.splice(index, 1);
    localStorage.setItem('storage', JSON.stringify(products));
  }

  React.useEffect(() => {
    const storage = localStorage.getItem('storage') ?
      JSON.parse(localStorage.getItem('storage')) : [];
    setStore(storage)
  }, [])
  
  return (
    <Box sx={home}>
      <Box sx={home.container}>
        <Box sx={home.heading}>
          <Box component='img' sx={home.close} src='images/close_btn.png' />
          <Box sx={home.logoC}>
            <Box component='img' src='images/logo.png' width='28.37px' height='48px' />
            <Grid container direction='column' sx={{my: '2px'}}>
              <Typography align='center'>New wish list</Typography>
              <Typography align='center' variant='h3'>Create a wish list</Typography>
            </Grid>
          </Box>
        </Box>
        <Grid container justifyContent='center' sx={{}}>
          <Box  sx={home.main}>
            <Box sx={{width: '24rem', height: '11.875rem'}}>
              <Grid container direction= 'column'>
                <Typography sx={{...theme.subheading}}>List details</Typography>
                <Typography sx={{...theme.note}}>Add list name and description</Typography>
              </Grid>
              <Grid container direction='column' sx={{my:'1rem'}}>
                <TextField className='input' type='text' style={{ marginBottom: '1rem' }}
                  label='Wish list name' value={WLName}
                  onChange={(e) => setWLName(e.target.value)}
                />
                <TextField className='input' type='text' label='Description(optional)'
                  value = {WLDesc} onChange={e=>setWLDesc(e.target.value)}
                />
              </Grid>
            </Box>
            <div className='wish-container'>
              <div className='wish-cover'>
                <p className='add-wish'>
                  Add wishes <br/>
                  <span className='wish-detail'>Add wishes and other details</span>
                </p>
              </div>
              <div className='add-container'>
                <div className="store">
                  {
                    store && store.map((s, i) => (
                      <div className="each" key={`${s.label}${i}`}>
                        <img src={s.img} alt={s.label} width='48px' height='48px' />
                        <img className='cross' src='images/cross.svg' alt='cross' width='16px'
                          height='16px' onClick={()=>removeProduct(store, i)}
                        />
                      </div>
                    ))
                  }

                </div>
                <div className="add-link">
                  <div className='link'>
                    <img src='images/box.png' width='20px' height='20px' alt='bt' />
                    <div className='inputC'>
                      <label htmlFor='wish'>Wish name</label>
                      <input id='wish' type='text' />
                    </div>
                  </div>
                  <img className='toggle' src='images/expand.png' width='28px' height='28px' alt='nav' onClick={handleToggle} />
                </div>
                <div className="purchase">
                  <div className="purchase-link">
                    <label htmlFor="purchase">
                      <img src="images/link.png" alt="link" width='20px' height='20px' />
                    </label>
                    <input type="text" placeholder='Purchase link' />
                  </div>
                  <div className="purchase-price">
                    <select name="price" id="price">
                      <option value='Naira'>&#8358;</option>
                      <option value='Dollar'>$</option>
                      <option value='Pound'>&#163;</option>
                    </select>
                    <input type="number" placeholder='Price (optional)'/>
                  </div>
                </div>
                {
                  toggle &&
                <div className="quantity">
                  <input type="number" placeholder='Quantity' />
                </div>
                }
                {
                  toggle &&
                <div className="wish-description">
                  <input type="text" placeholder='Description' />
                </div>
                }
                <button className='add-btn'>
                  <img src="images/add.svg" alt="add" width='20px' height='20px' />
                  <span>Add another</span>
                </button>
                <button className="gift" onClick={handleGift}>
                  <img src="images/gift.png" alt="gift" width='20px' height='gift' />
                  <span>Generate gift ideas</span>
                </button>
              </div>
            </div>
          </Box>
        </Grid>
        <div className="control">
          <button className="delete" style={{opacity:`${WLName? '1':'0.5'}`}}>
            <img src="images/delete.png" alt="del" />
            <span>Delete</span>
          </button>
          <button className="share" style={{ opacity: `${WLName ? '1' : '0.5'}` }}
            onClick={handleShare} disabled={!WLName}
          >
            <img src="images/send-2.png" alt="del" />
            <span>Share</span>
          </button>
        </div>
      </Box>
    </Box>
  )
}

export default Homepage