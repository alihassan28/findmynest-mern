import {auth} from 'express-oauth2-jwt-bearer'

const jwtCheck = auth({
    audience: "http://127.0.0.1:5173/",
    issuerBaseURL: "https://dev-u0mhtu6lsvrvyrv2.us.auth0.com",
    tokenSigningAlg: "RS256"
})

export default jwtCheck

