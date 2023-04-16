import React from "react";
import styled from "styled-components";
import { BsFillBalloonHeartFill } from "react-icons/bs";
import { HiCake } from "react-icons/hi";

const Footter = styled.div`
  width: 100%;
  height: 150px;
  background-color: #3e3745;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Footer() {
  return (
    <Footter>
      <h2 className="footerTitile">
        <div> Made By </div>{" "}
        <div className="heart">
          {" "}
          <HiCake></HiCake>{" "}
        </div>
        <div>Anshika And Sonam !</div>
      </h2>
    </Footter>
  );
}

export default Footer;
