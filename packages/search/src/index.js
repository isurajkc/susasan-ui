import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import debounce  from './debounce';
class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            query: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSearchChange = debounce(this.props.onSearchChange,500);
    }

    componentWillReceiveProps(nextProps){

        if (!nextProps.search) {
            this.textInput.value = '';
        }

    }

    onChange(e){
        this.setState({ query: e.target.value }, () => {
            this.onSearchChange(this.state.query,'search');
        });
    };

    render() {

        const { placeholder } = this.props;

        return (
            <SearchBox>
                <input
                    ref={el => {
                        this.textInput = el;
                    }}
                    className='search-input'
                    type="search"
                    placeholder={placeholder}

                    onChange={this.onChange}
                />
            </SearchBox>
        );
    }
}

Search.propTypes = {
    onSearchChange: PropTypes.func.isRequired,
    search: PropTypes.string,
    placeholder: PropTypes.string
};

export default Search;

const SearchBox = styled.div`
    
    .search-input{

      width: 385px;
      height: 48px;
      border-radius: 24px;
      background-color: #ffffff;
      border: solid 1px #028eff;
      color: #000e1a;
      font-size: 14px;
      line-height: 22px;
      outline: none;
	  text-indent: 47px;
      &::placeholder {
      	color: #000e1a;
      	opacity: 0.5;
      }
    }
    
    .close-btn{
     margin: -9px -35px;
		  cursor: pointer;
		  display: inline-block;
		  width: 0.5em;
		  height: 0.5em;
		  border: 0.05em solid #00529b;
		  font-size: 3em;
		  border-radius: 50%;
		  position: relative;
		  background-color: white;
		  &:before {
			content: "";
			display: block;
			position: absolute;
			background-color: #00529b;
			width: 80%;
			height: 6%;
			left: 10%;
			top: 47%;
			transform: rotate(225deg);
		  }
		  &:after {
			content: "";
			display: block;
			position: absolute;
			background-color: #00529b;
			width: 6%;
			height: 80%;
			left: 47%;
			top: 10%;
			background-color: $color;
			transform: rotate(225deg);
		  }
    }
    
`;