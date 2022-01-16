import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  flag: {
    width: '100%',
    maxWidth: '100%',
    height: '185px',
    maxHeight: '185px',
    marginTop: '-5px',
    [theme.breakpoints.down('sm')]: {
      maxHeight: 'unset',
      height: 'auto',
    },
  },
  card: {
    minHeight: '385px',
    padding: 0,
    overflow: 'hidden',
    backgroundColor:
      theme.palette.mode === 'light' ? '#fff !important' : '#2b3238 !important',
  },
  span: {
    fontWeight: 300,
  },

  btn: {
    backgroundColor:
      theme.palette.mode === 'light' ? `#FFF !important` : '#34393e !important',
    color:
      theme.palette.mode === 'light'
        ? `${theme.palette.text.primary} !important`
        : '#fff !important',
    padding: '0.2rem 2rem',
    margin: '.5rem 0 1.5rem !important',
  },
  arrowRotate: {
    transform: 'rotate(180deg)',
    marginRight: '.3rem',
    color:
      theme.palette.mode === 'light'
        ? `${theme.palette.text.primary} !important`
        : '#fff !important',
  },

  // details page
  border: {
    display: 'inline-block',
    margin: '0.75rem .5rem',

    '& a': {
      padding: '.5rem',
      border: '1px solid rgba(0, 0, 0, 0.23)',
      color: theme.palette.text.primary,
      textDecoration: 'none',
      boxShadow: '1px 1px 7px 1px rgba(0, 0, 0, 0.23)',
      transition: 'box-shadow .3s ease',
      '&:hover': {
        boxShadow: '1px 1px 7px 2.5px rgba(0, 0, 0, 0.23)',
      },
    },
  },
  link: {
    textDecoration: 'none !important',
  },
}));
