// const initialState ={
//     searchInput:"godfather",
//     mode:true
// }
// export default function Reducer(state=initialState,action){
//     switch(action.type){
//         case "SEARCH_INPUT":
//             return {...state,searchInput:action.payload}
//         case "CHANGE_MODE":
//             return {...state,mode:action.payload}
//         default:
//             return state
//         }
// }

const initialState ={
    searchInput:"",
    mode:true
}
export default function Reducer(state=initialState,action){
    switch(action.type){
        case "SEARCH_INPUT":
            return {...state,searchInput:action.payload}
        case "CHANGE_MODE":
            return {...state,mode:action.payload}
        default:
            return state
    }
}
