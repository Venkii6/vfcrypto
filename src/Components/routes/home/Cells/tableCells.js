import React from 'react';
import styled from 'styled-components'

const CoinCellChild = styled.div`
	display: flex;
	align-items: center;
	color: rgb(96, 108, 131);
`

const Rank = styled.span`
	color: grey;
	margin-right: 24px;
	font-size: 12px;
	font-weight: bold;
`

const Icon = styled.img`
	margin-right: 12px;
	width: 25px;
`

const Title = styled.span`
	color: grey;
	font-size: 14px;
`

const PriceCellChild = styled.div`
	color: rgb(96,108,131);
	font-size: 16px;
	display: flex;
	align-items: center;
`
const MarketCapCellChild = styled.div`
	color: rgb(96,108,131);
	font-size: 12px;
	display: flex;
	align-items: center;
`

const PercentCellInner = styled.div`
	color: rgb(96,108,131); 
	font-size: 12px;
	font-weight: bold;
  color: ${props => parseInt(props.value, 10) > 0 ? '#2ac07c' : '#a94442'}
`

const CurrencySymbol = styled.span`
	color: #cccccc;
	margin-right: 5px;
`

export const CoinCell = ({ data }) => (
	<CoinCellChild>
		<Rank>
			{"1"}
		</Rank>
		<Icon src={`https://www.cryptocompare.com/${data.CoinInfo.ImageUrl.toLowerCase()}`} alt={data.CoinInfo.ImageUrl.toLowerCase()} /> 
		<Title>
			{data.CoinInfo.FullName}
		</Title>
	</CoinCellChild>
)

/* replace number formatting */

export const PriceCell = ({ data,currency }) => (
	<PriceCellChild>
		<CurrencySymbol>{data.DISPLAY[currency].TOSYMBOL}</CurrencySymbol> 
		{data.RAW[currency].PRICE.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
	</PriceCellChild>
);

export const MarketCapCell = ({ data,currency }) => (
	<MarketCapCellChild>
		<CurrencySymbol>{data.DISPLAY[currency].TOSYMBOL}</CurrencySymbol>
		 {data.RAW[currency].MKTCAP.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
	</MarketCapCellChild>
);

export const PercentCell = ({ data,currency }) => (
	<PercentCellInner value={data.RAW[currency].CHANGEPCT24HOUR}>
		{data.RAW[currency].CHANGEPCT24HOUR.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
		 % { parseInt(data.RAW[currency].CHANGEPCT24HOUR, 10) > 0 ? '↑' : '↓'}
	</PercentCellInner>
);