
const AuthReducer = (state, action) =>
{
    switch (action.type) {
        //cuando un case esta seguido de otro, la logica a aplicar es la misma
        case "AUTENTICA_LS_EXITOSO":
        case "INICIO_EXITOSO":
            let medioEnc = action.payload.split(".")[1];
            let medioDec = atob(medioEnc);
            let medioDecJson = JSON.parse(medioDec);
            //guardar el token en el storage
            localStorage.setItem("token", action.payload);

            return{
                ...state,
                autenticado: true,
                token: action.payload,
                usuario: medioDecJson.usu_nom
            }
        case "CERRAR_SESION":
            localStorage.removeItem("token");
            return{
                ...state,
                autenticado: null,
                token: "",
                usuario: null
            }
    }
}

export default AuthReducer;