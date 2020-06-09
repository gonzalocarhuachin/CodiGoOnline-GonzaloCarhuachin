const ClienteReducer = (state, action) =>
{
    //El reducer toma la decision bajo distintas acciones solicitadas por el dispatch
    switch (action.type) {
        case "SET_OBJCLIENTE":
            //valor que retorne sera el nuevo state
            return {
                ...state,
                objCliente: action.payload
            }
    }
}

export default ClienteReducer;