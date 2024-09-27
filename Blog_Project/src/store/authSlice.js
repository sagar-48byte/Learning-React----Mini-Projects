import {createSlice} from '@reduxjs/toolkit'

const initialstate = {
    status : 'false',
    userData: null
}


const Authslice = createSlice({
    name : 'auth',
    initialstate,
    reducers: {
        login: (state, action) => {
            state.status = true
            state.userData = action.payload.userData
        },
        logout: (state)=>{
            state.logout = false
            state.userData = null;
        }
    }
}
)

export const {login, logout} = Authslice.actions 
export default Authslice.reducer;