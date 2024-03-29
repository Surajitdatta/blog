import {configureStore} from "@reduxjs/toolkit"
import LoginSlice from "./LoginSlice"
import Imgslice from "./Imgslice"
import Contentslice from "./Contentslice"

export const appStore = configureStore({
    reducer:{
        login:LoginSlice,
        userImage : Imgslice,
        userContent : Contentslice
    }
}

)

// export default appStore;