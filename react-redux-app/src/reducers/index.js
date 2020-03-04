const initialState = {
    isLoading: false,
    breweries: null,
    error: null,
    noBreweryError: null
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "FETCHING_BREWERY_START" :
            return {
                ...state,
                isLoading: true
            }
        case "FETCHING_BREWERY_SUCCESS" :
            return {
                ...state,
                isLoading: false,
                breweries: action.payload.filter(brewery => brewery.brewery_type !== "planning"),
                noBreweryError: null,
                error: null
            }
        case "NO_BREWERIES" :
            return {
                ...state,
                isLoading: false,
                noBreweryError: `We did not find any breweries in "${action.payload}"`,
                error: null,
                breweries: null
            }
        case "FETCHING_BREWERY_FAILURE" :
            return {
                ...state,
                isLoading: false,
                noBreweryError: null,
                error: action.payload,
                breweries: null
            }
        default :
            return state
    }
}