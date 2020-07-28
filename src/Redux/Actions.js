import { Update_Selected_Currency,Update_Coins_List,Update_Selected_Coin } from './Constants'

export const updateSelectedCurrency = (currency) => {
    return {
    type: Update_Selected_Currency,
    payload: currency
    }
}

export const updateCoinsList = (coins) => {
    return {
    type: Update_Coins_List,
    payload: coins
    }
}

export const updateSelectedCoin = (id) => {
    return {
    type: Update_Selected_Coin,
    payload: id
    }
}