//Here I will use Components Class instead of useState, useEffect, useRef
//will not be executed by the app, this file is for informational purpose only

import React, { Component } from "react";
import PropTypes from 'prop-types';
// Image
import searchIcon from '../../images/search-icon.png';
//Styles
import { Wrapper, Content } from './SearchBar.styles';

class SearchBar extends Component {
    state = { value: '' }; //value for the input field in the search bar 
    timeout = null;
    //initual.cuurrent = true here
    //when I use ref, it won't trigger a rerender
    //skips the initial render

    //lifecycle methods
    componentDidUpdate(_prevProps, prevState){
    // used _ for prevProps to show that it will not be used
        if(this.state.value != prevState.value) {
            const { setSearchTerm } = this.props;

            clearTimeout(this.timeout);

            this.timeout = setTimeout(() => {
                const { value } = this.state;
                setSearchTerm(value);
            }, 500) //will trigger after 500 miliseconds
        }

    }

    render() {

        const { value } = this.state;

        return (
            <Wrapper>
                <Content>
                    <img src={searchIcon} alt='search-icon' />
                    <input 
                        type='text'
                        placeholder='Search Movie'
                        onChange={event => this.setState( { value: event.currentTarget.value } )}
                        value={value}
                    />
                </Content>
            </Wrapper>
        )
    }

    }

SearchBar.propTypes = {
    callback: PropTypes.func
}

export default SearchBar
