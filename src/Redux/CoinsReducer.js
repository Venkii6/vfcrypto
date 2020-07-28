import {  Update_Selected_Coin,Set_Loading,Set_ErrorMessage,Update_CoinsAndCurrency } from './Constants'

const initialState = {
    currency: "USD",
    coins:[],
    selectedCoin:null,
    isLoadingData: false,
    error: ''
}

const coinsReducer = (state = initialState, action) => {
    switch (action.type) {
        case Set_Loading:
            return { ...state, isLoadingData: action.payload }
         case Set_ErrorMessage:
            return { ...state, error: action.payload, isLoading: false }
        case Update_CoinsAndCurrency:{
            return {...state,
                currency:action.payload.currency, 
                coins:action.payload.coins,
                isLoading: false, 
                error:"" 
            }
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