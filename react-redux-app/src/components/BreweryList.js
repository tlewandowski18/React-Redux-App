import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import styled from 'styled-components';


import Brewery from "./Brewery";

const Container = styled.div`
    margin-top: 1%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`
const Header = styled.h2`
    color: #DFDCE3;
    font-family: "Lucidatypewriter";
    font-size: 36px;
    font-weight: bold;

`

const BreweryList = props => {
    return (
        <Container>
            {!props.isLoading && !props.breweries && !props.noBreweryError && (<Header>Enter city to find breweries near you!</Header>)}
            {props.isLoading && (
                <Loader
                    type="Puff"
                    color="#DFDCE3;"
                    height={100}
                    width={100}
                    timeout={3000} //3 sec
                />
            )}
            {props.breweries && props.breweries.map(brewery => <Brewery key={brewery.id} brewery={brewery} />)}
            {props.noBreweryError && (<Header>{props.noBreweryError}</Header>)}
        </Container>

    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        breweries: state.breweries,
        error: state.error,
        noBreweryError: state.noBreweryError
    }
}

export default connect(mapStateToProps, {})(BreweryList);