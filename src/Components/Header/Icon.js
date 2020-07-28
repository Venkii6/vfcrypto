import React from 'react'
import styled from 'styled-components'

const CurrencyIcon = styled.img`
    width: 25px;
    height: 25px;
    margin-right: 12px;
`

export const Icon  = ({ data }) => {
    return (
        <CurrencyIcon src={`https://www.cryptocompare.com/${data.toLowerCase()}`} alt={data.toLowerCase()} /> 
    )
}

export default Icon