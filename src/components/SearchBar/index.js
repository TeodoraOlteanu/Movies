import React, { useState, useEffect, useRef } from "react";
import PropTypes from 'prop-types';
// Image
import searchIcon from '../../images/search-icon.png';
//Styles
import { Wrapper, Content } from './SearchBar.styles';

const SearchBar = ({ setSearchTerm }) => {
    const [state, setState] = useState('');
    const initial = useRef(true); //similar to mutable variable

    //initual.cuurrent = true here
    //when I use ref, it won't trigger a rerender
    //skips the initial render
    useEffect(() => {
        if(initial.current) {
            initial.current = false;
            return;
        }
    })

    useEffect(() => {

        const timer = setTimeout(() => {
            setSearchTerm(state);
        }, 500) //will trigger after 500 miliseconds
        return () => clearTimeout(timer)
    },[setSearchTerm, state])

    return (
        <Wrapper>
            <Content>
                <img src={searchIcon} alt='search-icon' />
                <input
                    type='text'
                    placeholder='Search Movie'
                    onChange={event => setState(event.currentTarget.value)}
                    value={state}
                />
            </Content>
        </Wrapper>
    )
}

SearchBar.propTypes = {
    callback: PropTypes.func
}

export default SearchBar
