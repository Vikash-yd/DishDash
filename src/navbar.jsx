import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css";
import { useState, useEffect } from "react";
import RecipeReviewCard from "./Card";
import { blueGrey } from "@mui/material/colors";
import Cardlist from "./Cardlist";

function NavScrollExample() {
  let [dish, setDish] = useState(" salad");
  let [response, setResponse] = useState([
    [
      {
        id: 1847920,
        title: "Healthy Quinoa Salad",
        image: "https://img.spoonacular.com/recipes/1847920-312x231.jpg",
        imageType: "jpg",
      },
      {
        id: 646491,
        title: "Healthy Mint Brownies",
        image: "https://img.spoonacular.com/recipes/646491-312x231.jpg",
        imageType: "jpg",
      },
      {
        id: 665470,
        title: "Healthy Chocolate Mousse",
        image: "https://img.spoonacular.com/recipes/665470-312x231.jpg",
        imageType: "jpg",
      },
      {
        id: 646484,
        title: "Healthy Hazelnut Cookies",
        image: "https://img.spoonacular.com/recipes/646484-312x231.jpg",
        imageType: "jpg",
      },
      {
        id: 918029,
        title: "Healthy Blueberry Muffins",
        image: "https://img.spoonacular.com/recipes/918029-312x231.jpg",
        imageType: "jpg",
      },
      {
        id: 1096214,
        title: "Healthy Tomato Basil Soup",
        image: "https://img.spoonacular.com/recipes/1096214-312x231.jpg",
        imageType: "jpg",
      },
      {
        id: 646515,
        title: "Healthy Southwestern Oatmeal",
        image: "https://img.spoonacular.com/recipes/646515-312x231.jpg",
        imageType: "jpg",
      },
      {
        id: 1096198,
        title: "Healthy Nut & Seed Crispbread",
        image: "https://img.spoonacular.com/recipes/1096198-312x231.jpg",
        imageType: "jpg",
      },
      {
        id: 646461,
        title: "Healthy Chocolate Fudge Bread",
        image: "https://img.spoonacular.com/recipes/646461-312x231.jpg",
        imageType: "jpg",
      },
      {
        id: 1096070,
        title: "Healthy Morning Glory Muffins",
        image: "https://img.spoonacular.com/recipes/1096070-312x231.jpg",
        imageType: "jpg",
      },
    ],
  ]);
  let handleInput = (event) => {
    setDish(event.target.value);
  };
  let handleSubmit = (event) => {
    event.preventDefault();
    // console.log(dish)
    // setDish("");
    fetchUrl();
  };

  let fetchUrl = async () => {
    let url = "https://api.spoonacular.com/recipes/complexSearch";
    let API_KEY = "76d58a9c1dc1494eb5cb42db69fb607d";
    let res = await fetch(`${url}?apiKey=${API_KEY}&query=${dish}`);
    let jsonRes = await res.json();
    let data = jsonRes.results;

    setResponse([data, ...response]);
  };
  const handleStarters = () => {
    setDish("starters");
  };
  const handleDesert = () => {
    setDish("deserts");
  };
  const handleIndian = () => {
    setDish("indian");
  };
  const handleChinese = () => {
    setDish("chinese");
  };
  const handleAmerican = () => {
    setDish("american");
  };
  const handleContinental = () => {
    setDish("continental");
  };

  useEffect(() => {
    fetchUrl();
  }, [dish]);

  return (
    <>
      <div className="nav-header">
        <Navbar expand="lg" data-bs-theme="dark">
          <Container fluid>
            <img
              src="https://cdn-icons-png.flaticon.com/128/14111/14111280.png"
              style={{ height: "40px", width: "50px", margin: "10px" }}
            />
            <Navbar.Brand href="#" style={{ color: "black" }}>
              DishDash
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link onClick={handleStarters} style={{ color: "black" }}>
                  Starters
                </Nav.Link>
                <Nav.Link onClick={handleDesert} style={{ color: "black" }}>
                  Deserts
                </Nav.Link>
                <NavDropdown
                  title="Cuisine"
                  id="navbarScrollingDropdown"
                  style={{ color: "black" }}
                >
                  <NavDropdown.Item href="#action3"></NavDropdown.Item>
                  <NavDropdown.Item onClick={handleIndian}>
                    Indian
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={handleChinese}>
                    Chinese
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={handleContinental}>
                    Continental
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={handleAmerican}>
                    American
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  onChange={handleInput}
                  value={dish}
                />
                <Button variant="outline-success" onClick={handleSubmit}>
                  Search
                </Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div>
        <div style={{ color: "black", fontSize: "20px", textAlign: "center" ,fontWeight:"20px"}}>
          Showing results for "{dish}"....
        </div>
        <Cardlist dishes={response[0]} />
      </div>
    </>
  );
}

export default NavScrollExample;
