import * as React from 'react';
import { useDispatch } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { deleteProduct } from '../../redux/actions/actionsProductAdmin'
import { Link } from 'react-router-dom';
import { Header, Image, Table } from 'semantic-ui-react'



export default function Product({product}) {
    const dispatch = useDispatch()

    return (
      <Table basic='very' celled collapsing>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Product Image</Table.HeaderCell>
          <Table.HeaderCell>Product Name</Table.HeaderCell>
          <Table.HeaderCell>Price</Table.HeaderCell>
          <Table.HeaderCell>Category</Table.HeaderCell>
          <Table.HeaderCell>Category</Table.HeaderCell>
          <Table.HeaderCell>Category</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
  
      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <Header as='h4' image>
              <Image src={product && product.productSrcUrl} rounded size='massive' />
              
            </Header>
          </Table.Cell>
          <Table.Cell>{product && product.productName}</Table.Cell>
          <Table.Cell>{product && product.productPrice}</Table.Cell>
          <Table.Cell>{product && product.productCategory}</Table.Cell>
          <Table.Cell><Link link to={`/updateprod/${product._id}`}>
          <Button basic color='red'>
              Update
            </Button>
            </Link>
            </Table.Cell>
          <Table.Cell><Button basic color='red' onClick={()=>dispatch(deleteProduct(product._id))}>
              Delete
            </Button>
            </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}