

export const productsReducer = (state = [], action) => {
    if (action.type === 'ADD'){
        return [...state, action.payload]
    }else{
        return state
    }
}