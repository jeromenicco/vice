import { configureStore } from '@reduxjs/toolkit'

import timeStampReducer from './slices/timeStampSlice'

export default configureStore({
  reducer: {
    timeStamp: timeStampReducer,
  },
})
