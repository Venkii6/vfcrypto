import React from 'react'
import styled from 'styled-components'

const ListHeader = styled.thead`
    color: #abafc6;
    background-color: #ebf0f4;
    border: 1px #cfdbe4;
    border-top: 2px solid #e7e7e7;
    border-bottom: 2px solid #e7e7e7;
    
`
const Th = styled.th`
    text-transform: uppercase;
    text-align: left;
    padding: 10px 24px;
    font-size: 12px;
`

const ListNav = ({ columns = [] }) => (
    <ListHeader>
        <tr>
            {columns.map(column => <Th key={column.title}>{column.title}</Th>)}
        </tr>
    </ListHeader>
);

export default ListNav