import React from 'react'
import { withRouter } from 'react-router-dom'
import AppList from '../../AppList'
import { CoinCell, PriceCell, MarketCapCell, PercentCell } from './Cells/tableCells'
import styled from 'styled-components'
import axios from 'axios'
import { updateCoinsList, updateSelectedCoin } from '../../../Redux/Actions'
import { connect } from 'react-redux';


const tableCols = [
	{

	},
	{

	},
	{

	},
	{
		title: 'cryptocurrency',
		component: CoinCell,

	},
	{
		title: 'price',
		component: PriceCell,

	},
	{
		title: 'market cap',
		component: MarketCapCell,

	},
	{
		title: '24h change',
		component: PercentCell,

	},
	{

	},
	{

	},
	{

	},
];



const WrapperTable = styled(AppList)`
    width: 100%;
`

class Home extends React.Component {
	componentDidMount() {
		this.updateCoins();
		this.interval = window.setInterval(this.updateCoins(), 60000)
	}

	componentDidUpdate(prevProps) {
		if (prevProps.currency !== this.props.currency) {
			//console.log("rcomponentDidUpdate currency",this.props.currency);  
			this.updateCoins();
		}
	}

	componentDidUpdate(prevProps) {
		if (prevProps.coins !== this.props.coins) {
			//console.log("rcomponentDidUpdate coins");  
		}
	}

	updateCoins = () => {
		const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=" + this.props.currency;
		axios.get(url).
			then((response) => {
				console.log("response data", response.data.Data);
				this.props.updateCoinsList(response.data.Data);
			})
	}

	componentWillUnmount() {
		window.clearInterval(this.interval)
	}

	handleRowClick = (row) => {
		const { history } = this.props;
		this.props.updateSelectedCoin(row.CoinInfo.Id);
		history.push(`/coin/${row.CoinInfo.Id}`)
	}

	render() {
		return (<WrapperTable columns={tableCols}
			data={Object.values(this.props.coins).sort((a, b) => a.RAW[this.props.currency].PRICE > b.RAW[this.props.currency].PRICE ? -1 : 1)}
			onRowClick={this.handleRowClick}
			currency={this.props.currency}
		/>)
	}
}

const mapStateToProps = (state) => {
	return {
		currency: state.currency,
		coins: state.coins
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		updateCoinsList: (coins) => dispatch(updateCoinsList(coins)),
		updateSelectedCoin: (id) => dispatch(updateSelectedCoin(id))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);