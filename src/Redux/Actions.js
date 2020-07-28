import { Update_Coins_List,Update_Selected_Coin,Set_Loading,
    Set_ErrorMessage,Update_CoinsAndCurrency } from './Constants'
import axios from 'axios'

export const setLoading = (isLoading) => {
    return {
        type: Set_Loading,
        payload: isLoading
    }
}

export const updateCoinsAndCurrency = (data) => {
    return {
        type: Update_CoinsAndCurrency,
        payload: data
    }
}

export const setErrorMessage = (errorMessage) => {
    return {
        type: Set_ErrorMessage,
        payload: errorMessage
    }
}


export const updateSelectedCoin = (id) => {
    return {
    type: Update_Selected_Coin,
    payload: id
    }
}

export const fetchCoins =  (currency) => {
    return (dispatch) => {
        dispatch(setLoading(true))
        const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=" + currency;
        axios.get(url).then((response) => {
            console.log(" fetch coins in actions :",response.data.Data);
           dispatch(updateCoinsAndCurrency({coins:response.data.Data,currency:currency}));
        }).catch((error) => {
            dispatch(setErrorMessage(error.errorMessage))
        })
    }
} 