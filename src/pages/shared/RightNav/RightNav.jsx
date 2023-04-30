import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import QZone from "../QZone/QZone";
import './RightNav.css'

const RightNav = () => {
  return (
    <div>
      <h4 className="mt-4">Login With</h4>
      <Button className="mb-2" variant="outline-primary">
        <FaGoogle /> Login with Google
      </Button>
      <Button variant="outline-secondary">
        <FaGithub /> Login with GitHub
      </Button>
      <div className="mt-4">
        <h4>Find Us On</h4>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            {" "}
            <FaTwitter /> Dapibus ac facilisis in
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram /> Morbi leo risus
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div>
        <div className="newspaper text-white">
            <h4>Create an Amazing Newspaper</h4>
            <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
            <Button variant="danger">Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
