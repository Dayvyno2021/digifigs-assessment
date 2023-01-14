import * as React from 'react';
import Box from '@mui/material/Box';
import { theme } from '../components/Theme';
import { useNavigate } from 'react-router-dom';

const prompt = {
  // position: 'absolute',
  // top: '0',
  // left: '0',
  // right: '0',
  // bottom: '0',
  minWidth: '100%',
  minHeight: '100%',
  bgcolor: theme.palette.primary.main,
  '.nav': {
    height: '6rem',
    width: '100%',
    p: '1.25rem 6rem',
    display: 'flex',
    justifyContent: 'flex-end',
    '&>button': {
      width: '14.69rem',
      height: '3.5rem',
      bgcolor: '#FFFFFF'
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
      <div className="main"></div>
    </Box>
  )
}

export default SignupPrompt