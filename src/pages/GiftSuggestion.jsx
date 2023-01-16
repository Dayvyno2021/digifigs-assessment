import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import { cloneDeep } from 'lodash';
// import { theme } from '../components/Theme';

const gift = {
  width: '100%',
  minHeight: '85vh',
  bgcolor: 'rgba(0, 0, 0, 0.5)',
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
    height: '13.375rem',
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
  '.suggestions': {
    width: '30rem',
    height: '31.625rem',
    display: 'flex',
    justifyContent: 'center',
    '.s-wrapper': {
      width: '25rem',
      height: '100%',
      display: 'flex',
      pr:'2rem',
      flexDirection: 'column',
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
      '.product': {
        width: '24rem',
        height: '5rem',
        display: 'flex',
        bgcolor: '#FFFFFF',
        borderBottom: '0.5px solid #D5D8DF',
        py: '1.25rem',
        '&>img': {
          borderRadius: '4px',
          mr: '0.5rem'
        },
        '.product-add': {
          width: '5rem',
          bgcolor: '#FFFFFF',
          border: '1px solid #121212',
          boxShadow: '0px 16px 40px 5px rgba(213, 216, 223, 0.2)',
          borderRadius: '0.5rem',
        }
      },
      '.product-detail': {
        display: 'flex',
        flexDirection: 'column',
        '.describe': {
          fontWeight: '500',
          fontSize: '1rem',
          lineHeight: '1.5rem',
          color: '#121212'
        },
        '.price': {
          fontStyle: 'normal',
          fontWeight: '475',
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
          textAlign: 'center',
          color: '#2E2E3A',
        }
      },
      '.product-add': {
        ml: 'auto',
        cursor: 'pointer'
      }
    }
  },

  '.control':{
    width: '30rem',
    height: '8rem',
    bgcolor: '#FFFFFF',
    pt: '1.5rem',
    boxSizing: 'border-box',
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
}

const GiftSuggestion = () => {
  const navigate = useNavigate();

  const products = [
    {img: 'images/img1.png', label: 'Air Force Max', price: 2000, selected: false},
    {img: 'images/img2.png', label: 'Birkins bag', price: 2000, selected: false},
    {img: 'images/img3.png', label: 'Toy', price: 2000, selected: false},
    {img: 'images/img4.png', label: 'Air force Max', price: 2000, selected: false},
    {img: 'images/img5.png', label: 'Air force Max', price: 2000, selected: false},
    {img: 'images/img6.png', label: 'Air force Max', price: 2000, selected: false},
    {img: 'images/img1.png', label: 'Air force Max', price: 2000, selected: false},
  ]

  const handleAdd = (item) => {
    const store = [];
    const newItem = cloneDeep(item)
    newItem.selected = true;
    const available = localStorage.getItem('storage') ?
      JSON.parse(localStorage.getItem('storage')) : null;
    if (available) {
      available.push(newItem)
      localStorage.setItem('storage', JSON.stringify(available));
    } else {
      store.push(newItem);
      localStorage.setItem('storage', JSON.stringify(store));
    }
    navigate('/');
  }

  return (
    <Box sx={gift}>
      <Box sx={gift.container}>
        <Box sx={gift.heading}>
          <Box component='img' sx={gift.close} src='images/close_btn.png' />
          <Box sx={gift.logoC}>
            <Box component='img' src='images/logo.png' width='28.37px' height='48px' />
            <Grid container direction='column' sx={{my: '2px'}}>
              <Typography align='center' variant='h3'>Gift Suggestions</Typography>
            </Grid>
          </Box>
        </Box>

        <div className="suggestions">
          <div className="s-wrapper">
            {
              products && products.map((product,i) => (
                <div className="product" key={`${product}${i}`}>
                  <img src={product && product.img} alt={product.label} width='40px' height='40px' />
                  <div className="product-detail">
                    <div className="describe">{product && product.label} </div>
                    <div className="price">NGN{' '}{product && product.price && product.price.toLocaleString()} </div>
                  </div>
                  <button className="product-add" onClick={()=>handleAdd(product)}>
                    Add
                  </button>
                </div>
              ))
            }
          </div>
        </div>

        <div className="control">
          <button className="delete" >
            Cancel
          </button>
          <button className="share"
          >
            Done
          </button>
        </div>
      </Box>
    </Box>
  )
}

export default GiftSuggestion