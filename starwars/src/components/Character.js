// Write your Character component here
import React from "react";
import styled from "styled-components";

const StyledHeaders = styled.h2`
    fontsize: 1rem;
`;

const StyledCardBorderDiv = styled.div`
    border: 3px solid green;
    background-color: black; opacity: 0.6;
    width: 25%;
    margin 1% auto;
    text-align: center;
    color: yellow;
    border-radius: 10px;
`;



const Character = props => {
    
    return (
        <div>
            {props.swapiData.map( (charArr) => {
                return (
                    <StyledCardBorderDiv>
                        <StyledHeaders>{charArr.name}</StyledHeaders>
                        <p>Birth Year: {charArr.birth_year}</p>
                        <p>Height: {charArr.height}, Mass: {charArr.mass}, Gender: {charArr.gender}</p>
                        <p>Eye Color: {charArr.eye_color}, Hair Color: {charArr.hair_color}</p>
                    </StyledCardBorderDiv>
                ) 
            })}
        </div>
    );
};

export default Character;

/* 
const Character = props => {
    
    return (
        <div>
            {props.swapiData.map( (charArr) => {
                return <StyledPTags>{charArr.name}, {charArr.birth_year}</StyledPTags> 
            })}
        </div>
    );
};
*/