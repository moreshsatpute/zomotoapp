// PriceList.js
import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
// import './PriceList.css'; // Import CSS for styling

const PriceList = ({ items }) => {
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
      <Card className="mt-3">
        <Card.Body>
          <Card.Title>Grand Total</Card.Title>
          <Card.Text>${calculateTotal()}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PriceList;
