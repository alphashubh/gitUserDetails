export default function(state={}, action){
    switch(action.type){
        case "REQUEST_PAGE_DATA":
            return state=Object.assign({},state,action.payload); 
            break;
    }
    return state;
}