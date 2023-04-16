import React from "react";
import styled from "styled-components";
import { HiCake } from "react-icons/hi";
import { GiChocolateBar } from "react-icons/gi";
import { GiChickenOven } from "react-icons/gi";
import { SiCodechef } from "react-icons/si";
import { useNavigate } from "react-router-dom";

const IconCard = styled.div`
  width: 150px;
  height: 150px;
  //border: 2px solid red;
`;

const GridFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
  margin-bottom: 150px;
`;

function Welcome() {
  const navigate = useNavigate();

  const handler = () => {
    navigate("/");
  };

  return (
    <>
      <GridFlex>
        <div className="girdSystem">
          <IconCard>
            <HiCake className="mainIcons" />
          </IconCard>
          <IconCard>
            <GiChocolateBar className="mainIcons" />
          </IconCard>
          <IconCard>
            <GiChickenOven className="mainIcons" />
          </IconCard>
          <IconCard>
            <SiCodechef className="mainIcons" />
          </IconCard>
        </div>
        <div className="mainFontStyle" onClick={handler}>
          <h1>Welcome</h1>
          <h2>TO</h2>
          <h1>Chef Creations</h1>
        </div>
      </GridFlex>
    </>
  );
}

/**
 * <h1 onClick={handler} className="maintitle">
          Welcome to Chef Creations
        </h1>
 */
export default Welcome;
