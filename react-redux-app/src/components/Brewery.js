import React from "react";
import styled from 'styled-components';

const BreweryCard = styled.a`
    width: 30%;
    height: 30%;
    margin: 1% 0;
    color: #828282;
    background-color: #E8E9EC;
    text-decoration: none;
    border: .5px solid #828282;
    border-radius: 30px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

    &:hover {
        background-color: #828282;
        color: #E8E9EC;
    }
`

const BreweryLink = styled.a `
    text-decoration: none;
    background-color: #E8E9EC;
    color: #828282;

    &:hover {
        color: #E8E9EC;
        background-color: #828282;
    }
`

const BreweryName = styled.h3`
    text-align: center;
    font-size: 28px;
    text-decoration: none;

`
const Brewery = props => {
    return (
        <BreweryCard href={props.brewery.website_url} target="_blank">
            <BreweryName>{props.brewery.name}</BreweryName>
            
        </BreweryCard>
    )
}

export default Brewery