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
  margin-top: 20px;
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

function Veggie() {
  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    getVeggie();
  }, []);

  const getVeggie = async () => {
    const check = localStorage.getItem("veggie");
    if (check) {
      console.log("cache hit");
      setVeggie(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=965531d13b464e5597a1ff772ae88446&number=9&tags=vegetarian`
      );
      const data = await api.json();
      console.log(data);
      setVeggie(data.recipes);
      localStorage.setItem("veggie", JSON.stringify(data.recipes));
    }
  };

  return (
    <>
      <div>
        <Wrapper>
          <Centring>
            <h3 className="title"> Our Vegetarian Picks </h3>
          </Centring>
          <Splide options={{ perPage: 3, drag: "free", gap: "2rem" }}>
            {veggie.map((recipe, i) => {
              return (
                <SplideSlide>
                  <Link to={"/recipe/" + recipe.id} className="singleLink">
                    <Card>
                      <h4> {recipe.title.slice(0, 35)}... </h4>
                      <img src={recipe.image} alt="IMAGESS" />
                    </Card>
                  </Link>
                </SplideSlide>
              );
            })}
          </Splide>
        </Wrapper>
      </div>
    </>
  );
}

export default Veggie;
