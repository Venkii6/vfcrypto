import React from 'react'
import styled from 'styled-components'
import Label from './cell/Label'
import SummaryCell from './cell/SummaryCell'
import { connect } from 'react-redux';

const CurrencySymbol = styled.span`
    margin-right: 5px;
`
const CurSummary = styled.span`
    flex: 1;
    background: linear-gradient(to right, rgb(18,36,60), rgb(28,50,80));
`
const CurRank = styled.div`
    border-radius: 50%;
    background-color: rgb(31,57,89);
	color: rgb(105,168,230);
	height: 50px;
	width: 50px;
	display: inline-flex;
	align-items: center;
    justify-content: center;
    margin-left: 10px;
`
const CurLabel = styled.div`
    color: rgb(95,114,140);
	font-size: 12px;
	text-transform: uppercase;
`
const Row = styled.div`
    display: flex;
    margin-bottom: 20px;
        ${Label} {
                margin-bottom: 5px;
                
        	}
`


const LeftCol = styled.div`
    flex-grow: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;

	${Label} {
		margin-right: 10px;
	}
`

const RightCol = styled.div`
    flex-grow: 2;
    display: flex;
    flex-direction: column;
    height: 100%;
`

const Wrapper = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    height; 25%;
    align-items: center;
    color: rgb(94,103,109);
`

const CurSummaryItem = styled.div`
    color: white;
    align-items: center;
    display: flex;
    font-size: 20px;
`

class Currency extends React.Component {

    render() {
        const  { selectedCoin,currency } = this.props;
        if (!selectedCoin) return <div></div>

        return (
            <CurSummary>
                <Wrapper>
                    <LeftCol>
                        <CurLabel>rank</CurLabel>
                        <CurRank>1</CurRank>
                    </LeftCol>
                    <RightCol>
                        <Row>
                            <SummaryCell label="market cap">
                                <CurSummaryItem><CurrencySymbol>{selectedCoin.DISPLAY[currency].TOSYMBOL}</CurrencySymbol>
                                {selectedCoin.RAW[currency].MKTCAP}</CurSummaryItem>
                            </SummaryCell>
                            <SummaryCell label="24h volume">
                                <CurSummaryItem><CurrencySymbol>{selectedCoin.DISPLAY[currency].TOSYMBOL}</CurrencySymbol>
                                {selectedCoin.RAW[currency].VOLUME24HOUR}</CurSummaryItem>
                            </SummaryCell>
                        </Row>
                        <br />
                        <Row>
                            <SummaryCell label="circulating supply">
                                <CurSummaryItem><CurrencySymbol>{selectedCoin.DISPLAY[currency].TOSYMBOL}</CurrencySymbol>
                                {selectedCoin.RAW[currency].SUPPLY}</CurSummaryItem>
                            </SummaryCell>
                        </Row>
                    </RightCol>
                </Wrapper>
            </CurSummary>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selectedCoin: state.selectedCoin,
        currency: state.currency
    }
}

export default connect(mapStateToProps)(Currency); 


