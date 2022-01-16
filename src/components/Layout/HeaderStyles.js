import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => {
  return {
    root: {
      backgroundColor:
        theme.palette.mode === 'light' ? '#fff !important' : null,
      color: theme.palette.mode === 'light' ? '#111517 !important' : null,
    },
    btn: {
      color: theme.palette.text.primary,
      minWidth: 102,
      border: 'none',
      background: 'transparent',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      '&:hover': {
        cursor: 'pointer',
      },
    },
    icon: {
      width: 20,
      height: 32,
    },
  };
});
