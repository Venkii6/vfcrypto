import { Update_Selected_Currency,Update_Coins_List,Update_Selected_Coin } from './Constants'

const initialState = {
    currency: "USD",
    coins:[],
    selectedCoin:null
}

const coinsReducer = (state = initialState, action) => {
    switch (action.type) {
        case Update_Selected_Currency: {
            let currency = state.currency;
            currency = action.payload
            return {...state,
                currency: currency
            }
        }
        case Update_Coins_List: {
            return {...state, coins:action.payload }
        }
        case Update_Selected_Coin: {
            const coins = state.coins;
            const selectedCoin = coins.filter(x => {
                if(x.CoinInfo.Id == action.payload){
                    return x;
                }
            });
            return {...state, selectedCoin:selectedCoin[0] }
        }
        default: return state
    }
}

export default coinsReducer;