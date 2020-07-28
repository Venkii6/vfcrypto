import React from 'react'
import styled from 'styled-components'

const TableData = styled.td`
    padding: 24px;
    border-bottom: 1px solid rgba(207,219,228, 0.5);
    text-align: left;
    cursor: pointer;

`

const ListItem = ({ component, data, currency }) => {

    if (component === undefined) return <TableData />
    return (
        <TableData>
            {React.createElement(component, { currency, data })}
        </TableData>
    )
}

export default ListItem;