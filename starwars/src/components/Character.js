// Write your Character component here
import React from "react";
import styled from "styled-components";

const CharacterStylerDiv = styled.div`
    color: green;
    font-size: 2rem;
    padding: 2%;
`;

const Character = props => {
    return (
        <CharacterStylerDiv>
            <p>Is this working?</p>
        </CharacterStylerDiv>
    );
};

export default Character;

/* 
<CharacterStylerDiv>
        <h1>{props.swapiData.name}</h1>
        </CharacterStylerDiv>
*/