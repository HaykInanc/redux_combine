

export const randomReducer = (store = 0, action) =>{
    if (action.type === 'GET'){
        return Math.round(Math.random() * 5) + 1
    }else{
        return store
    }
}