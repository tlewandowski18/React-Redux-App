import axios from "axios"

export const fetchBreweries = search => dispatch => {
    dispatch({type: 'FETCHING_BREWERY_START'})
    const formattedSearch = search.toLowerCase().replace(" ", "_");
    axios.get(`https://api.openbrewerydb.org/breweries?by_city=${formattedSearch}`)
        .then(res => {
            if (res.data.length) {
                dispatch({type: 'FETCHING_BREWERY_SUCCESS', payload: res.data})
            } else {
                dispatch({type: 'NO_BREWERIES', payload: search})
            }
        })
        .catch(err => {
            dispatch({type: 'FETCHING_BREWERY_FAILURE', payload: err.response})
        })
}