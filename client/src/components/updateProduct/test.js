import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import { Form, TextArea} from 'semantic-ui-react'

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

    const dispatch = useDispatch();
  const oldProduct = useSelector(state=>state.productsAdminReducer.product)

  useEffect(() => {
    dispatch(getProduct(match.params.id))
  }, [match.params.id])

  useEffect(() => {
    setNewProduct({...oldProduct})
  }, [oldProduct])
  const [newProduct, setNewProduct] = useState({productName:""});


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
    dispatch(updateProduct(newProduct,oldProduct._id))
    setNewProduct({productName:""},history);
  };

  return (
    
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
          <Form  onSubmit={handleSubmit}>
    <Form.Group unstackable widths={2}>
      <Form.Input label='Product Name' placeholder='Product Name' name="productName" value={newProduct.productName} onChange={handleChange} />
      <Form.Input label='Last name' placeholder='Last name' onChange={handleChange} />
    </Form.Group>
    <Form.Group widths={2}>
      <Form.Input label='Address' placeholder='Address' onChange={handleChange} />
      <Form.Input label='Phone' placeholder='Phone' onChange={handleChange} />
    </Form.Group>
    <Form.Field
      id='form-textarea-control-opinion'
      control={TextArea}
      label='Opinion'
      placeholder='Opinion'
      onChange={handleChange}
    />
    <Form.Checkbox label='I agree to the Terms and Conditions' />
    <Button type='submit'>Submit</Button>
  </Form>
        </Box>
  );
}