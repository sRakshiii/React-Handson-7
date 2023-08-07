import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './slice';

const store = configureStore({
    reducer:{
        dataKey: dataReducer
    }
})

export default store
