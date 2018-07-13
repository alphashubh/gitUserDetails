export default function(state={}, action){
    switch(action.type){
        case "VALID_DATA":
            return state=Object.assign({},state,action.payload); 
            break;
        case "INVALID_DATA":
            return state=Object.assign({},state,action.payload);
            break;
    }
    return state;
}