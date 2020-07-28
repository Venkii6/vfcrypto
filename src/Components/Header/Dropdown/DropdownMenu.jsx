import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { updateSelectedCurrency } from '../../../Redux/Actions'


const DropdownMenuDiv = styled.div`
  .dropdown {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    outline: none;
    visibility: hidden;
    transition: visibility 0.5s;
    top: 100%;
    z-index: 1000;
    position: relative;
    right: 140px;
    min-width: 80px;
    padding: 0px 0px 0px 12px;
    margin: 0;
    font-size: 14px;
    list-style: none;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow: 0 6px 12px rgba(0,0,0,.175);
    box-shadow: 0 6px 12px rgba(0,0,0,.175);
  }
   .dropdown__item {
    cursor: pointer;
    align-items: flex-start;
    line-height: 4px;
    font-size: 14px;
    outline: none;
    a {
      display: flex;
      span {
        white-space: nowrap;
        overflow: hidden;
        color: #4a4d55;
      }
    }
  }

   

`;

const DropdownMenu = (props) => {
    const handleMenuClick = (e) => {
        console.log("value:", e.currentTarget.dataset.id);
        props.updateSelectedCurrency(e.currentTarget.dataset.id);
    }

    return (
        <DropdownMenuDiv>
            <ul className="dropdown">
                {props.data.map(item => {
                    const { title, className } = item;
                    return (
                        <li key={title} onClick={handleMenuClick} data-id={title}>
                            <span>
                                {title}
                            </span>
                        </li>
                    );
                })}
            </ul>
        </DropdownMenuDiv>
    );
}

const mapStateToProps = (state) => {
    return {
        currency: state.currency
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateSelectedCurrency: (currency) => dispatch(updateSelectedCurrency(currency))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DropdownMenu); 
