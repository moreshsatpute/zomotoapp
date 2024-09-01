import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../redux/cartSlice";
import { Card, ListGroup, Button } from "react-bootstrap";

const ProductList = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.price, 0);
  };

  const handleRemove = (index) => {
    dispatch(removeFromCart(index)); // Dispatch the action to remove from cart
  };

  const handleClearCart = () => {
    dispatch(clearCart()); // Dispatch the action to clear the cart
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "50px auto 0 auto",
        padding: "20px",
        backgroundColor: "#f8f9fa",
        borderRadius: "8px",
      }}
    >
      <Card
        className="shadow"
        style={{ marginTop: "20px", borderRadius: "12px" }}
      >
        <Card.Body>
          <Card.Title>My Cart</Card.Title>
          {cart.length === 0 ? (
            <Card.Text>Your cart is empty.</Card.Text>
          ) : (
            <>
              <ListGroup variant="flush">
                {cart.map((item, index) => (
                  <ListGroup.Item
                    key={index}
                    className="d-flex justify-content-between align-items-center"
                  >
                    <div>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>${item.price}</Card.Text>
                    </div>
                    <div className="d-flex align-items-center">
                      <Button
                        size="sm"
                        className="px-3"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          minWidth: "60px",
                        }}
                      >
                        <span onClick={() => handleRemove(index)}>-</span>
                        <span>{item.quantity}</span>
                        <span>+</span>
                      </Button>
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
              <Card className="mt-3">
                <Card.Body className="d-flex justify-content-between align-items-center">
                  <Card.Title>Total</Card.Title>
                  <Card.Text>${calculateTotal()}</Card.Text>
                  <Button variant="warning" onClick={handleClearCart}>
                    Clear Cart
                  </Button>
                </Card.Body>
              </Card>
            </>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductList;
