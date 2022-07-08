import {sign} from 'jsonwebtoken';
import decodeJwt from "../src/jwt-decoder";

test('decodeJwt', () => {
    const jwtPayload = {
        sub: '12345678-abcd-1234-efgh-123456789012',
        email: 'me@example.com',
    };
    const jwtSecret = 'my-test-secret';
    const token = sign(jwtPayload, jwtSecret);

    const res = decodeJwt(token);

    expect(res).toStrictEqual({
        sub: '12345678-abcd-1234-efgh-123456789012',
        email: 'me@example.com',
        iat: expect.anything(),
    });
});
