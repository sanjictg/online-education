import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Col, Card, Button, Image } from "react-bootstrap";

const Course = (props) => {
  const {
    id,
    title,
    price,
    author,
    banner,
    avatar,
    rating,
    hours,
    lecture,
    best_seller,
  } = props.course;
  return (
    <>
      <Col md={4} className="mb-4">
        <Card className="shadow rounded">
          <Card.Img style={{ height: "200px" }} src={banner} variant="top" />
          <Image className="course__img" src={avatar} roundedCircle />
          <Card.Body>
            <Card.Title className="mb-2">{title}</Card.Title>
            <Card.Text className="d-flex my-1 justify-content-between">
              {author}
              <>
                {rating.map((a, b) => (
                  <FontAwesomeIcon
                    key={b}
                    style={{ color: "gold" }}
                    icon={faStar}
                  />
                ))}
              </>
            </Card.Text>
            <Card.Text className="m-0">
              <strong className="h4">$ {price}</strong>
            </Card.Text>

            <Card.Text>
              {hours} total hours - {lecture} lectures
            </Card.Text>

            <div className="d-flex justify-content-between">
              <Button onClick={() => props.handleCart(id)}>Enroll Now</Button>
              {!best_seller && (
                <Button variant="light border">Best Sellers</Button>
              )}
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};
export default Course;