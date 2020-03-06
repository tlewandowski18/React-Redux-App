import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { fetchBreweries } from '../actions'

const Form = styled.form`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

`

const Input = styled.input`
    margin-top: 10%;
    margin-bottom: 2%;
    width: 250px;
    height: 15px;
    padding: 1%;
    font-size: 21px;
    color: #828282;
    background-color: #E8E9EC;
    font-family: "Lucidatypewriter";
    border: .5px solid #828282;
    border-radius: 30px;
    outline: none;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    ::placeholder {
        color: #828282;
    }
`

const Button = styled.button`
    color: #DFDCE3;
    text-align: center;
    font-family: "Lucida";
    background-color: #F7B733;
    height: 42px;
    width: 175px;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 30px;
    font-size: 21px;
    margin: 1% 0;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

    

`

const SearchForm = props => {
    const [search, setSearch] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        props.fetchBreweries(search);
        setSearch('');
    }
    
    return (
        <Form onSubmit={handleSubmit}>
            <Input 
                type="text"
                placeholder="Enter City Name"
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            <Button type="submit">Find Breweries</Button>

        </Form>
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

