import * as React from 'react';
import { useDispatch } from 'react-redux'
import { Button, Header, Table } from 'semantic-ui-react'
import { deleteUser } from '../../redux/actions/actionUsers';




export default function ManageUsers({user}) {
    const dispatch = useDispatch()

    return (
      <Table basic='very' celled collapsing>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>E-Mail</Table.HeaderCell>
          <Table.HeaderCell>Adress</Table.HeaderCell>
          <Table.HeaderCell>Phone Number</Table.HeaderCell>
          <Table.HeaderCell>Delete User</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
  
      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <Header as='h4'>
              <Header.Content>
                {user && user.lastName} {user && user.firstName}
              </Header.Content>
            </Header>
          </Table.Cell>
          <Table.Cell>{user && user.email}</Table.Cell>
          <Table.Cell>{user && user.adress}</Table.Cell>
          <Table.Cell>{user && user.phoneNumber}</Table.Cell>
          <Table.Cell><Button basic color='red' onClick={()=>dispatch(deleteUser(user._id))}>
              Delete
            </Button></Table.Cell>
        </Table.Row> 
      </Table.Body>
    </Table>
  );
}
