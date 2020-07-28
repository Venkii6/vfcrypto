import React from 'react'
import AppList from '../../AppList'
import { CoinCell, PriceCell, MarketCapCell, PercentCell } from './Cells/tableCells'
import styled from 'styled-components'
import { updateSelectedCoin, fetchCoins } from '../../../Redux/Actions'
import { connect } from 'react-redux';
import Spinner from './Spinner'
import Moment from 'moment';

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

const SpinnerDiv = styled.div`
	display:flex;
	justify-content: center;
`

const LastUpdated = styled.div`
	font-size: 12px;
	color: #ccc;
	text-align: center;
	margin-top: 20px;
`;

class Home extends React.Component {
	componentDidMount() {
		this.props.fetchCoins(this.props.currency);
		this.interval = window.setInterval(this.props.fetchCoins(this.props.currency), 60000)
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
		var { currency, isLoadingData, lastUpdateDate } = this.props;
		return (
			<React.Fragment>
				{isLoadingData ? <SpinnerDiv><Spinner /></SpinnerDiv> :
				<WrapperTable columns={tableCols}
					data={Object.values(this.props.coins).sort((a, b) => a.RAW[currency].PRICE > b.RAW[currency].PRICE ? -1 : 1)}
					onRowClick={this.handleRowClick}
					currency={currency} date={lastUpdateDate}
				/>}				
				{ lastUpdateDate && <LastUpdated>last updated {Moment(lastUpdateDate).format('DD/MM/YYYY, hh:mm:ss a')}</LastUpdated>}
			</React.Fragment>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		currency: state.currency,
		coins: state.coins,
		isLoadingData: state.isLoadingData,
		lastUpdateDate: state.lastUpdateDate

	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		updateSelectedCoin: (id) => dispatch(updateSelectedCoin(id)),
		fetchCoins: (currency) => dispatch(fetchCoins(currency))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);