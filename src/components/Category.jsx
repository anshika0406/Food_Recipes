import React from "react";
import styled from "styled-components";
import { FaPizzaSlice } from "react-icons/fa";
import { FaHamburger } from "react-icons/fa";
import { GiNoodles } from "react-icons/gi";
import { GiChopsticks } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const DivBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 30px;
  gap: 15px;
  margin-top: 50px;
`;

const DivSelector = styled.div`
  padding: 20px 45px;
  border: 2px solid #f4eee0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 15%;
  width: 50px;
  transition: 0.25s ease;
  :hover {
    cursor: pointer;
    background-color: #f4eee0;

    color: #393646;
  }
  &.active {
    background-color: #f4eee0;
    color: #393646;
  }
`;

function Category() {
  return (
    <DivBox>
      <NavLink to={"/cuisine/italian"} className="links">
        <DivSelector>
          <FaPizzaSlice className="icons" />
          <p>Italian</p>
        </DivSelector>
      </NavLink>
      <NavLink to={"/cuisine/american"} className="links">
        <DivSelector>
          <FaHamburger className="icons" />
          <p>American</p>
        </DivSelector>
      </NavLink>
      <NavLink to={"/cuisine/thai"} className="links">
        <DivSelector>
          <GiNoodles className="icons" />
          <p>Thai</p>
        </DivSelector>
      </NavLink>
      <NavLink to={"/cuisine/japanese"} className="links">
        <DivSelector>
          <GiChopsticks className="icons" />
          <p>Japanese</p>
        </DivSelector>
      </NavLink>
    </DivBox>
  );
}

export default Category;
