import * as React from 'react';
import Box from '@mui/material/Box';
import { theme } from './Theme';
import { useNavigate } from 'react-router-dom';

const mod = {
  width: '100%',
  zIndex: '5000',
  position: 'absolute',
  height: '56.25rem',
  bgcolor: 'rgba(0,0,0,0.5)',
  [theme.breakpoints.down('sm')]: {
    width: '37.5rem'
  },

  '.modal': {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '.modal-wrapper': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '30rem',
      height: '43.8125rem',
      borderRadius: '1rem',
      bgcolor: theme.white,
      boxSizing: 'border-box'
    }
  },
  '.modal1': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mb: '1rem',
    width: '22.5rem',
    height: '9rem',
    '.modal1-text': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      p: 0,
      width: '22.5rem',
      height: '5rem',
      my: '1rem',
      '.modal1-text-header': {
        width: '22.5rem',
        height: '1.875rem',
        fontWeight: '700',
        fontSize: '1.5rem',
        lineHeight: '1.875rem',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#121212',
        justifyContent: 'center',
      },
      '.modal1-text-body': {
        width: '22.5rem',
        height: '3rem',
        fontWeight: '475',
        lineHeight: '1.5rem',
        fontSize: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#3D3D3D'
      }
    }
  },
  'input.modal2': {
    width: '24rem',
    height: '3.5rem',
    bgcolor: '#F7F7F7',
    borderRadius: theme.radius,
    border: 'none',
    mb: '1rem',
    pl: '1.5rem',
    boxSizing: 'border-box'
  },
  'button.modal3': {
    ...theme.whiteButton,
    width: '24rem',
    height: '3.5rem',
    borderRadius: theme.radius,
    padding: '1rem 4rem',
    bgcolor: theme.palette.secondary.main,
    border: 'none'
  },
  '.modal1-wrapper': {
    padding: '3rem 3rem 1.5rem',
    width: '30rem',
    height: '13.375rem',
    bgcolor: 'yellow'
  },
  '.category': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0',
    width: '24rem',
    height: '21.4375rem',
    overflowY: 'scroll',
    bgcolor: 'lightblue'
  },
  '.modal3-wrapper': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    p: '1.5rem 3rem 3rem',
    wisth: '30rem',
    height: '8rem',
    bgcolor: theme.white,
    borderRadius: '0  0 1rem 1rem',
    border: '1px solid #D5D8DF',
    mt: '1rem'
  }
};

export default function InterestsModal() {
  const navigate = useNavigate();

  return (
    <Box sx={mod}>
      <div className='modal'>
        <div className='modal-wrapper'>
          <div className="modal1-wrapper">
            <div className="modal1">
              <img src="images/logo.png" alt="lo" width='28.37px' height='48px' />
              <div className="modal1-text">
                <div className="modal1-text-header">
                  What are you into these days?
                </div>
                <div className="modal1-text-body">
                  Select at least 5 interests to help us personalise your Giftly experience.
                </div>
              </div>
            </div>
          </div>

          <div className="category"></div>

          <div className="modal3-wrapper">
            <button className="modal3" style={{}}
              disabled onClick={()=>navigate('/interests')}
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </Box>
  );
}