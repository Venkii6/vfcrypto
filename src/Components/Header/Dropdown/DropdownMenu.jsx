import React from 'react';
import styled from 'styled-components';

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

class DropdownMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    handleMenuClick = (e) => {
        console.log("value:",e.currentTarget.dataset.id);
    }

    render() {
        const { data } = this.props;
        return (
            <DropdownMenuDiv>
                <ul className="dropdown">
                    {data.map(item => {
                        const { title,className } = item;
                        return (
                            <li key={title} onClick={this.handleMenuClick} data-id={title}>
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
}

export default DropdownMenu
