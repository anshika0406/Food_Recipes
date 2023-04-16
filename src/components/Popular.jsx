import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";

// Default theme
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";

const Centring = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  margin-top: 10px;
  min-height: 20rem;
  overflow: hidden;
  background-color: #4f4557;
  border-radius: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 30px;
  transition: 0.25s ease;

  img {
    border-radius: 2rem;
    width: 25rem;
  }
  :hover {
    transform: translate(-5px, -10px);
    background-color: #b0aca3;
    border: 2px solid #4f4557;
    color: #4f4557;
  }
`;

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem("popular");
    if (check) {
      console.log("cache hit");
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=965531d13b464e5597a1ff772ae88446&number=9`
      );
      const data = await api.json();
      console.log(data);
      setPopular(data.recipes);
      localStorage.setItem("popular", JSON.stringify(data.recipes));
    }
  };
  return (
    <div>
      <div>
        <Wrapper>
          <Centring>
            <h3 className="title"> Popular Picks </h3>
          </Centring>
          <Splide options={{ perPage: 3, drag: "free", gap: "2rem" }}>
            {popular.map((recipe, i) => {
              return (
                <SplideSlide>
                  <Link to={"/recipe/" + recipe.id} className="singleLink">
                    <Card>
                      <h4> {recipe.title.slice(0, 35)}... </h4>
                      <img src={recipe.image} alt="images" />
                    </Card>
                  </Link>
                </SplideSlide>
              );
            })}
          </Splide>
        </Wrapper>
      </div>
    </div>
  );
}

export default Popular;
