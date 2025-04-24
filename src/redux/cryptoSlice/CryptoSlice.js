import { createSlice } from '@reduxjs/toolkit'
import cryptoData from './cryptoData'

const initialState = {
    data: cryptoData
}

export const cryptoSlice = createSlice({
    name: 'crypto',
    initialState,
    reducers: {
        updateCryptoData: (state) => {
            state.data = state.data.map((item) => ({
                ...item,
                price: +(item.price * (1 + (Math.random() - 0.5) * 0.01)).toFixed(2), // price fluctuates ±0.5%
                hour: +(item.hour + (Math.random() - 0.5)).toFixed(2),               // 1h %
                day: +(item.day + (Math.random() - 0.5)).toFixed(2),                 // 24h %
                week: +(item.week + (Math.random() - 0.5)).toFixed(2),              // 7d %
                volume: Math.floor(item.volume * (1 + (Math.random() - 0.5) * 0.2)), // ±20% volume fluctuation
            }))

        }
    },
})


export const { updateCryptoData } = cryptoSlice.actions

export default cryptoSlice.reducer