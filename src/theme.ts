import { Theme, createMuiTheme } from '@material-ui/core/styles';

import { red } from '@material-ui/core/colors';

// A custom theme for this app
const theme: Theme = createMuiTheme({
  spacing: 10,
  palette: {
    type: 'light',
    primary: {
      main: '#F8F6F2',
      light: '#F8F6F2',
      dark: '#F8F6F2',
    },
    secondary: {
      main: '#64829F',
      light: '#64829F',
      dark: '#64829F',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#F8F6F2',
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        boxShadow: '5px 5px 10px #d3d1ce, -5px -5px 10px #ffffff',
        background: '#F8F6F2',
      }
    },
    MuiPaper: {
      root: {
        padding: '20px 40px',
      },
      rounded: {
        borderRadius: '25px',
      },
      elevation1: {
        background: 'linear-gradient(145deg, #dfddda, #ffffff)',
        boxShadow: '5px 5px 10px #d3d1ce, -5px -5px 10px #ffffff',
      },
      elevation2: {
        background: '#F8F6F2',
        boxShadow: '5px 5px 10px #d3d1ce, -5px -5px 10px #ffffff',
      },
    },
    MuiButton: {
      root: {
        borderRadius: '25px',
        background: 'linear-gradient(145deg, #ffffff, #dfddda)',
        margin: '5px',
      },
      contained: {
        '&:hover': {
          boxShadow: '5px 5px 10px #d3d1ce, -5px -5px 10px #ffffff',
        },
        boxShadow: '5px 5px 10px #d3d1ce, -5px -5px 10px #ffffff',
      }
    },
    MuiStepper: {
      root: {
        background: '#F8F6F2',
      },
    },
    MuiStepIcon: {
      root: {
        boxShadow: '5px 5px 10px #d3d1ce, -5px -5px 10px #ffffff',
        color: '#F8F6F2',
        background: 'linear-gradient(145deg, #ffffff, #dfddda)',
        borderRadius: '25px',
      },
      active: {
        boxShadow: 'inset 2px 2px 4px #d3d1ce, inset -2px -2px 4px #ffffff',
      },
      completed: {
        color: '#4F7F71 !important',
      },
    },
    MuiOutlinedInput: {
      root: {
        borderRadius: '25px',
        boxShadow: 'inset 5px 5px 10px #d3d1ce, inset -5px -5px 10px #ffffff',
      },
      notchedOutline: {
        display: 'none',
      },
    },
    MuiInputLabel: {
      shrink: {
        color: 'rgba(0, 0, 0, 0.54) !important',
        transform: 'translate(14px, 8px) scale(0.75) !important',
      }
    },
    MuiSelect: {
      select: {
        borderRadius: '25px !important',
      }
    },
    MuiAccordion: {
      root: {
        '&:before': {
          display: 'none',
        },
        width: '100%',
      },
      rounded: {
        '&:first-child': {
          marginTop: '20px',
          borderTopLeftRadius: '25px',
          borderTopRightRadius: '25px',
        },
        '&:last-child': {
          borderBottomLeftRadius: '25px',
          borderBottomRightRadius: '25px',
        },
        borderRadius: '25px',
        background: '#F8F6F2',
      },
    },
    MuiLinearProgress: {
      barColorPrimary: {
        backgroundColor: '#64829F',
      }
    },
  },
});
export default theme;