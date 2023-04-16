import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Recipe() {
  const [details, setDetails] = useState();

  let params = useParams();

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=965531d13b464e5597a1ff772ae88446`
    );
    const detailData = await data.json();
    console.log(detailData);
    setDetails(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.id]);

  return (
    <div className="justForPadding">
      {details && (
        <DetailWrapper>
          <div>
            <h2 className="recipeTitle">{details.title}</h2>
            <img src={details.image} alt="s" className="justForImage" />
          </div>
          <Info>
            <div>
              <h3 className="recipeTitle">Summary</h3>
              <p
                dangerouslySetInnerHTML={{ __html: details.summary }}
                className="instructions"
              ></p>
              <h3 className="recipeTitle">Instruction</h3>
              <p
                dangerouslySetInnerHTML={{ __html: details.instructions }}
                className="instructions2"
              ></p>
            </div>
            <h3 className="recipeTitle">Ingrediants</h3>
            <ul>
              {details.extendedIngredients.map((ingi) => (
                <li key={ingi.id}>{ingi.original}</li>
              ))}
            </ul>
          </Info>
        </DetailWrapper>
      )}
    </div>
  );
}

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background-color: red;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`;

const StyledButton = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  border-radius: 10px;
  margin-right: 2rem;
  font-weight: 600;
  :hover {
    cursor: pointer;
  }
`;

const Info = styled.div`
  margin-left: 5rem;
`;

export default Recipe;
