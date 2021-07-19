import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginTop: 10,
  },
  buttonClear: {
    marginTop: 10,
  },
}));
