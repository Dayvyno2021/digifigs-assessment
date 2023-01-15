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
      p: '3rem',
      width: '30rem',
      height: '24rem',
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
        width: '14.125rem',
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
  }
};

export default function UsernameModal() {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState('')

  return (
    <Box sx={mod}>
      <div className='modal'>
        <div className='modal-wrapper'>
          <div className="modal1">
            <img src="images/logo.png" alt="lo" width='28.37px' height='48px' />
            <div className="modal1-text">
                <div className="modal1-text-header">Create a username</div>
              <div className="modal1-text-body">
                Create a unique username personalized for yourself on Giftly.
              </div>
            </div>
          </div>
          <input type="text" placeholder='Username' className="modal2" value={username}
            onChange={e=>setUsername(e.target.value)}
          />
          <button className="modal3" style={{ opacity: `${username ? '1' : '0.5'}` }}
            disabled={!username} onClick={()=>navigate('/interests')}
          >
            Next step
          </button>
        </div>
      </div>
    </Box>
  );
}