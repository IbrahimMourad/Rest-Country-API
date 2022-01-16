import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiInputLabel-root.Mui-focused': {
      color: theme.palette.text.primary,
    },
    '& .MuiInputLabel-root': {
      color: theme.palette.text.primary,
    },

    '& .MuiOutlinedInput-root': {
      paddingLeft: '0 !important',
      [theme.breakpoints.down('sm')]: {
        marginBottom: '1rem',
      },

      '& .MuiButtonBase-root svg': {
        // minWidth: 50,
        color: theme.palette.text.primary,
      },
      '&.Mui-focused fieldset': {
        borderColor: 'rgba(0, 0, 0, 0.23)',
      },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: 'rgba(0, 0, 0, 0.23)',
      },
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'rgba(0, 0, 0, 0.23) !important',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: 'rgba(0, 0, 0, 0.23) !important',
    },
  },
  InputLabel: {
    '&.Mui-focused': {
      color: theme.palette.text.primary + '!important',
    },
    '&.Mui-hover fieldset': {
      borderColor: 'unset',
    },
  },
  filterWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  filterInput: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    width: '100%',
    marginBottom: 15,
    '& .MuiFormControl-root': {
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '70%',
      },
      [theme.breakpoints.up('md')]: {
        width: '50%',
      },
    },
  },
  FormControl: {
    minWidth: '20% !important',
  },
}));
