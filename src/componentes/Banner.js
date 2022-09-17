import React from "react";
import { Image } from "react-bootstrap";
export default function Banner() {
  return (
    <div className="banner">
      <Image
        className=""
        fluid="true"
        src={require("../svg/Banner-Fondo.jpg")}
      />
    </div>
  );
}
