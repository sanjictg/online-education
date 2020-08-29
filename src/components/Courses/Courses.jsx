import React from "react";
import { Container, Row } from "react-bootstrap";
import Course from "./Course";

const Courses = ({ courses, handleCart }) => {
  return (
    <Container className="my-5">
      <Row>
        {courses.map((course) => (
          <Course key={course.id} course={course} handleCart={handleCart} />
        ))}
      </Row>
    </Container>
  );
};

export default Courses;