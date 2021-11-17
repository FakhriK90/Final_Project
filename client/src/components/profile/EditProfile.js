import { useDispatch, useSelector } from 'react-redux';
import { useState,useEffect } from 'react';
import { useHistory } from 'react-router';
import './edit.css'
import { getUserInfo, updateProfile } from '../../redux/actions/actionProfileUser';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import UpdateIcon from '@mui/icons-material/Update';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    secondary: {
      main: '#7b1fa2',
    },
  },
});
const EditProfile = ({match}) => {
  const history=useHistory();
  const dispatch = useDispatch();
  const oldInfo = useSelector(state => state.profileReducer.user)
  useEffect(() => {
      dispatch(getUserInfo(match.params.id))
  }, [match.params.id,dispatch])
  useEffect(() => {
      setNewInfo({...oldInfo})
  }, [oldInfo])
  const [newInfo, setNewInfo] = useState({lastName:"",
  firstName:'',
userName:'',
email:'',
adress:'',
phoneNumber:''})
  const handleChange=(e)=>{
      e.preventDefault();
      setNewInfo({...newInfo,[e.target.name]:e.target.value})
  };
  const handleSubmit= (event) => {
      event.preventDefault();
      dispatch(updateProfile(match.params.id,newInfo,history))
      setNewInfo({lastName:"",
  firstName:'',
userName:'',
email:'',
adress:'',
phoneNumber:''})
  }
    return (
      <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <UpdateIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
          Profile Setting
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="lastName"
                  name="lastName"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  onChange={handleChange}
                  autoFocus
                  value={newInfo.lastName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  name="firstName"
                  autoComplete="firstName"
                  onChange={handleChange}
                  value={newInfo.firstName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="userName"
                  label="User Name"
                  name="userName"
                  autoComplete="userName"
                  onChange={handleChange}
                  value={newInfo.userName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="email"
                  label="Email"
                  type="email"
                  id="email"
                  autoComplete="prodimage"
                  onChange={handleChange}
                  value={newInfo.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="phoneNumber"
                  label="Phone Number"
                  type="phoneNumber"
                  id="phoneNumber"
                  autoComplete="prodcategory"
                  onChange={handleChange}
                  value={newInfo.phoneNumber}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="adress"
                  label="Adress"
                  type="adress"
                  id="adress"
                  autoComplete="prodcategory"
                  onChange={handleChange}
                  value={newInfo.adress}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="dateOfBirth"
                  label="Date of birth"
                  type="dateOfBirth"
                  id="dateOfBirth"
                  autoComplete="dateOfBirth"
                  onChange={handleChange}
                  value={newInfo.dateOfBirth}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="postCode"
                  label="Postcode"
                  type="postCode"
                  id="postCode"
                  autoComplete="postCode"
                  onChange={handleChange}
                  value={newInfo.dateOfBirth}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="country"
                  label="country"
                  type="country"
                  id="country"
                  autoComplete="country"
                  onChange={handleChange}
                  value={newInfo.dateOfBirth}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="stateRegion"
                  label="State/Region"
                  type="stateRegion"
                  id="stateRegion"
                  autoComplete="stateRegion"
                  onChange={handleChange}
                  value={newInfo.dateOfBirth}
                />
              </Grid>
            </Grid>
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item></Grid>
            </Grid>
          </Box>
        </Box>      
      </Container>
    </ThemeProvider>
    )
}

export default EditProfile
