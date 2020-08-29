  
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { ListGroup } from "react-bootstrap";

const Cart = ({ cartItem }) => {
  const totalPrice = cartItem.reduce(
    (total, course) => parseFloat(total) + parseFloat(course.price),
    0
  );

  return (
    <div className="cart__container" id="toggleID">
      <FontAwesomeIcon
        icon={faTimes}
        onClick={() =>
          (document.getElementById("toggleID").style.right = "-50%")
        }
        className="exit__cart__icon"
      />

      <ListGroup className="mt-5">
        {cartItem.map((item) => (
          <ListGroup.Item key={item.id}>
            <span>{item.title.substring(0, 25) + "..."}</span>
            <span className="float-right font-weight-bold">$ {item.price}</span>
          </ListGroup.Item>
        ))}
      </ListGroup>

      {totalPrice !== 0 && (
        <div className="mt-4 bg-light p-4 font-weight-bold">
          <span>Total Price = </span>
          <span className="float-right">$ {totalPrice.toFixed(2)}</span>
        </div>
      )}
    </div>
  );
};

export default Cart;
