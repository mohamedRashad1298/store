import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
 toolbar: theme.mixins.toolbar,
  title: {
    marginTop: '5%',
    marginBottom:"20px"
  },
  emptyButton: {
    minWidth: '150px',
    backgroundColor:"blue",
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
  },
  checkoutButton: {
    minWidth: '150px',
  },
  link: {
    textDecoration: 'none',
  },
  cardDetails: {
    display: 'flex',
    marginTop: '10%',
    width: '100%',
    justifyContent: 'space-between',
  },
}));