import React, { useState } from 'react';
import { connect } from 'react-redux'

import { fetchBreweries } from '../actions'

const SearchForm = props => {
    const [search, setSearch] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        props.fetchBreweries(search);
        setSearch('');
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Enter City Name"
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            <button type="submit">Find Breweries</button>

        </form>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        breweries: state.breweries,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchBreweries })(SearchForm);

