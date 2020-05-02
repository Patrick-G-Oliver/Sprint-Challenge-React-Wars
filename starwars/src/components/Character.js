// Write your Character component here
import React from "react";
import styled from "styled-components";

const StyledPTags = styled.p`
    color: green;
    padding: 2%;
`;

const Character = props => {
    
    return (
        <div>
            {props.swapiData.map( (charArr) => {
                return <StyledPTags>{charArr.name}, {charArr.birth_year}</StyledPTags> 
            })}
        </div>
    );
};

export default Character;

/* 
<h1>Is this thing on?</h1>
<p>{props.swapiData.name}</p>
*/