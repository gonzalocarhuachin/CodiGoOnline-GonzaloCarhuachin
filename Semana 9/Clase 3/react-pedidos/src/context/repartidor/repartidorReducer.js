//state = ULTIMO ESTADO O ANTIGUO
//action = informarcion para el cambio de estado, objeto enviado por el dispatch
const RepartidorReducer = (state, action) =>
{
    //El reducer toma la decision bajo distintas acciones solicitadas por el dispatch
    switch (action.type) {
        case "SET_OBJREPARTIDOR":
            //valor que retorne sera el nuevo state
            return {
                ...state,
                objRepartidor: action.payload
            }
    }
}

export default RepartidorReducer;