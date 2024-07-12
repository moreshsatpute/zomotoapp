
import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from "../feature/todos/todoSlice"


const PriceList = ({ items }) => {

  const todos=useSelector(state=>state.todos)
  const dispatch = useDispatch()

  const calculateTotal = () => {
    return items.reduce((acc, item) => acc + item.quantity * item.amount, 0);
  };
  return (
    <div className="price-list">
      {items.map((item, index) => (
        <Card key={index} className="mb-3">
          <Card.Body>
            <Card.Title>{item.product}</Card.Title>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Quantity: {item.quantity}</ListGroupItem>
              <ListGroupItem>Amount: ${item.amount}</ListGroupItem>
              <ListGroupItem>Total: ${item.quantity * item.amount}</ListGroupItem>
            </ListGroup>
          </Card.Body>
        </Card>
      ))}
      {todos.map((todo)=>(

      <Card className="mt-3" key={todo.id}>
        <button
        onClick={()=>dispatch(removeTodo(todo.id))}>delete</button>
        <Card.Body>
          <Card.Title>Grand Total</Card.Title>
          <Card.Text>${calculateTotal()}</Card.Text>
        </Card.Body>
      </Card>
      ))

      }
    </div>
  );
};

export default PriceList;
