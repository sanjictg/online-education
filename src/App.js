import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Menubar from "./components/Navbar/Menubar";
import Courses from "./components/Courses/Courses";
import db from "./components/db";
import Cart from "./components/Courses/Cart";

function App() {
  const [courses, setCourses] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    setCourses(db);
  }, []);

  useEffect(() => {
    const result = db.filter((course) => course.title.includes(searchValue));
    setCourses(result);
  }, [searchValue]);

  const handleCart = (id) => {
    const a = document.getElementById("toggleID");
    a.style.right = "0%";

    const result = db.find((course) => course.id === id);
    return setCartItem([...cartItem, result]);
  };

  return (
    <div className="App">
      <Menubar setSearchValue={setSearchValue} />
      <Cart cartItem={cartItem} />
      <Courses handleCart={handleCart} courses={courses} />
    </div>
  );
}

export default App;
