const initalState = {}
export default function (state = initalState  , action ) {
    switch (action.type) {
        case "passId": {
            return {
                id : action.payload
            }
        }    
        default: return{ state}
    }
}