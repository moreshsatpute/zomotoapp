import React from "react";
import { Col, Card } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice'; // Import the action

function Cards({ image, rating, title, paragraph, price, renderRatingIcons }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const product = {
      image,
      title,
      price,
      description: paragraph
    };
    dispatch(addToCart(product)); // Dispatch the action to add to cart
  };

  return (
    <Col sm={6} lg={4} xl={3} className="mb-4">
      <Card className="overflow-hidden">
        <div className="overflow-hidden">
          <Card.Img variant="top" src={image} />
        </div>
        <Card.Body>
          <div className="d-flex align-items-center justify-content-between">
            <div className="item_rating">{renderRatingIcons(rating)}</div>
            <div className="wishlist">
              <i className="bi bi-heart"></i>
            </div>
          </div>

          <Card.Title>{title}</Card.Title>
          <Card.Text>{paragraph}</Card.Text>

          <div className="d-flex align-items-center justify-content-between">
            <div className="menu_price">
              <h5 className="mb-0">${price}</h5>
            </div>
            <div className="add_to_cart">
              <button onClick={handleAddToCart} className="btn btn-primary">
                <i className="bi bi-bag me-2"></i>
                Add To Cart
              </button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Cards;
