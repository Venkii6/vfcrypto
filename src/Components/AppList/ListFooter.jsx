import React from 'react'
import styled from 'styled-components'

const ListFooter = styled.thead`
    color: #abafc6;
    background-color: #ebf0f4;
    border: 1px #cfdbe4;
    border-top: 2px solid #e7e7e7;
    border-bottom: 2px solid #e7e7e7;
    width:100%
`
const Th = styled.th`
    text-transform: uppercase;
    text-align: left;
    padding: 10px 24px;
    font-size: 12px;
`

const Footer = ({date}) => (
    <ListFooter>
        <tr>
            <Th>Date:{date}</Th>
        </tr>
    </ListFooter>
);

export default Footer