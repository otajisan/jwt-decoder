import decodeJwt from "./jwt-decoder";

export const getTokenFromArguments = () => {
    if (process.argv.length <= 2) {
        throw Error("JWT token not specified.")
    }
    const token = process.argv[2];
    console.log("[JWT] " + token);

    return token;
};

const token = getTokenFromArguments();
decodeJwt(token);
