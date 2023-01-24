import jwt, { decode } from "jsonwebtoken"

export const auth = function (req, res, next){
    let token = null
    if(req.headers.authorization){
        token = req.headers.authorization.split(" ")[1]
    }
    if(!token){
        return res.status(403).send({
            auth: false,
            mensaje: "no se proporciono el token de seguridad"
        });

    }
    jwt.verify(token, "MI_CODIGO_SECRETO", (error, decoded)=>{
        if(error){
            return res.status(401).send({
                auth: false,
                mensaje: "Error de autenticación" 
            });
        }
        //correcto
        next();
    })
}