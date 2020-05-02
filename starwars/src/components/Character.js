// Write your Character component here
import React from "react";
import styled from "styled-components";

const CharacterStylerDiv = styled.div`
    color: green;
    padding: 2%;
`;

const Character = props => {
    let charStats = props.swapiData;
    return (
        <CharacterStylerDiv>
            {charStats.forEach( (name) => {
                return <p>{charStats.name}</p> 
            })}
        </CharacterStylerDiv>
    );
};

export default Character;

/* 
<h1>Is this thing on?</h1>
<p>{props.swapiData.name}</p>
*/