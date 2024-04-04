import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ListGroup from "react-bootstrap/ListGroup";

export default function List() {
  const [peopleName, setPeopleName] = useState([
    {
      FirstName: "Merry",
      LastName: "Williams",
    },
    {
      FirstName: "Jane",
      LastName: "Doe",
    },
    {
      FirstName: "Steve",
      LastName: "Smith",
    },
  ]);
  const listNames = peopleName.map((element, index) => (
    <ListGroup.Item key={index} variant="secondary">
      {element.FirstName} {element.LastName}
    </ListGroup.Item>
  ));

  return (
    <div className="container mt-4">
      <ListGroup>{listNames}</ListGroup>
    </div>
  );
}
