import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 3rem;
  padding: 3% 10%;
`;
const Card = styled.div`
  border: 2px solid #f4eee0;
  padding: 10px;
  border-radius: 2rem;
  transition: 0.25s ease;
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }

  h4 {
    text-align: center;
    padding: 1rem;
  }
  :hover {
    transform: translate(-5px, -10px);
    background-color: #b0aca3;
    border: 2px solid #4f4557;
    color: #4f4557;
  }
`;

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();
  console.log(params);

  const getCuisine = async (param) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=965531d13b464e5597a1ff772ae88446&number=12&cuisine=${param}`
    );
    const data = await api.json();
    console.log(data);
    setCuisine(data.results);
  };

  useEffect(() => {
    getCuisine(params.id);
  }, [params.id]);

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 5 }}
    >
      <div className="centring">
        <h2 className="title">{params.id.toUpperCase()}</h2>
      </div>
      <Grid>
        {cuisine.map((item, i) => {
          return (
            <Link to={"/recipe/" + item.id} className="singleLink">
              <Card key={i}>
                <img src={item.image} alt="" />
                <h4>{item.title}</h4>
              </Card>
            </Link>
          );
        })}
      </Grid>
    </motion.div>
  );
}

export default Cuisine;
