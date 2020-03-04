import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import Brewery from "./Brewery";

const BreweryList = props => {
    return (
        <div>
            {!props.isLoading && !props.breweries && !props.noBreweryError && (<h2>Enter city to find breweries near you!</h2>)}
            {props.isLoading && (
                <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={3000} //3 sec
                />
            )}
            {props.breweries && props.breweries.map(brewery => <Brewery key={brewery.id} brewery={brewery} />)}
            {props.noBreweryError && (<h2>{props.noBreweryError}</h2>)}
        </div>

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