import jwt_decode from 'jwt-decode';

const decodeJwt = (token: string): {
    [name: string]: string;
} => {
    const decoded = jwt_decode<{ [name: string]: string }>(token);
    console.log(decoded);
    return decoded;
};

export default decodeJwt;
