import { configureStore } from '@reduxjs/toolkit'
import cryptoSlice from './cryptoSlice/CryptoSlice'

export const store = configureStore({
    reducer: {
        crypto: cryptoSlice
    },
})