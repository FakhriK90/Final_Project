import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { addProducts } from '../../redux/actions/actionsProductAdmin';
import { useState } from 'react';



const theme = createTheme({
    palette: {
      secondary: {
        main: '#c6ff00',
      },
    },
  });

export default function AddProducts() {
    const dispatch = useDispatch();
  const history=useHistory();
  const [newProduct, setNewProduct] = useState({})
  const handleChange=(e)=>{
    e.preventDefault();
    setNewProduct({...newProduct,[e.target.name]:e.target.value})
}
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    // console.log({
    //     productName: data.get('productName'),
    //     productPrice: data.get('productPrice'),
    //     productDesc: data.get('productDesc'),
    //     productSrcUrl: data.get('productSrcUrl'),
    //     productCategory: data.get('productCategory'),
    // });
    dispatch(addProducts({productName: data.get('productName'),
    productPrice: data.get('productPrice'),
    productDesc: data.get('productDesc'),
    productSrcUrl: data.get('productSrcUrl'),
    productCategory: data.get('productCategory')
      },history));
  };

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
            <AddBoxRoundedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Add Product
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="pname"
                  name="productName"
                  required
                  fullWidth
                  id="productName"
                  label="Product Name"
                  onChange={handleChange}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="productPrice"
                  label="Product Price"
                  name="productPrice"
                  autoComplete="pprice"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="productDesc"
                  label="Product Description"
                  name="productDesc"
                  autoComplete="productDesc"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="productSrcUrl"
                  label="Product Image"
                  type="productSrcUrl"
                  id="productSrcUrl"
                  autoComplete="prodimage"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="productCategory"
                  label="Product Category"
                  type="productCategory"
                  id="productCategory"
                  autoComplete="prodcategory"
                  onChange={handleChange}
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
  );
}