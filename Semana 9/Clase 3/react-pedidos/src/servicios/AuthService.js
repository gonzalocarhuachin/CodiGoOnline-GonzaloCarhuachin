export class AuthService
{
    endpoint = "https://autenticacion-codigo.herokuapp.com";
    
    async postUsuario(objUsuario)
    {
        let response = await fetch(`${this.endpoint}/usuario`,
        {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(objUsuario)
        });

        let data = await response.json();
        return data;
    }

    async postLoggin(b_usu_email, b_usu_pass)
    {
        //btoa = funcion del objeto window para codificar en base64 una cadena de texto, dependiendo los requisitos del back
        let contenido = 
        {
            b_usu_email: b_usu_email,
            b_usu_pass: btoa(b_usu_pass)
        }

        let response = await fetch(`${this.endpoint}/usuario/loggin`, {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(contenido)
        })

        let data = await response.json();
        return data;
    }

    validarToken(token)
    {
        try {
            let mitadEnc = token.split(".")[1];
            let mitadDec = atob(mitadEnc);
            let mitadDecJson = JSON.parse(mitadDec);
            let fechaActualEnSegundos = (new Date().getTime()) / 1000
            if(mitadDecJson.exp > fechaActualEnSegundos)
            {
                //si hay tiempo de vida
                return true;
            }
            else
            {
                return false;
            }
        } catch (error) {
            return false;
        }
        
    }
}