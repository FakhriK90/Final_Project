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
import { useDispatch, useSelector } from 'react-redux';
import { useState,useEffect } from 'react';
import { getProduct, updateProduct } from '../../redux/actions/actionsProductAdmin';
import { useHistory } from 'react-router';




const theme = createTheme({
    palette: {
      secondary: {
        main: '#c6ff00',
      },
    },
  });

export default function UpdateProduct({match}) {
  const history=useHistory();
  // const loading = useSelector(state => state.productsAdminReducer.isLoading);
  const dispatch = useDispatch();
  const oldProduct = useSelector(state=>state.productsAdminReducer.product)
  console.log(oldProduct)
  useEffect(() => {
    dispatch(getProduct(match.params.id))
  }, [match.params.id])

  useEffect(() => {
    setNewProduct({...oldProduct})
  }, [oldProduct])

  const [newProduct, setNewProduct] = useState({productName:"",
  productPrice:"",
  productDesc:"",
  productSrcUrl:"",
  productCategory:""});

  const handleChange=(e)=>{
    e.preventDefault();
    setNewProduct({...newProduct,[e.target.name]:e.target.value})
};
  const handleSubmit = (event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    // console.log({
    //     productName: data.get('productName'),
    //     productPrice: data.get('productPrice'),
    //     productDesc: data.get('productDesc'),
    //     productSrcUrl: data.get('productSrcUrl'),
    //     productCategory: data.get('productCategory'),cxs
    // });
    dispatch(updateProduct(newProduct,match.params.id,history))
    setNewProduct(({productName:"",productPrice:"",
  productDesc:"",
  productSrcUrl:"",
  productCategory:""}));
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
            Update Product
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
                  value={newProduct.productName}
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
                  value={newProduct.productPrice}
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
                  value={newProduct.productDesc}
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
                  value={newProduct.productSrcUrl}
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
                  value={newProduct.productCategory}
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