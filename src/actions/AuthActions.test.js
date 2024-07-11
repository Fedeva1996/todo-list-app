import { logoutUser } from "./AuthActions";

describe('AuthActions', () => {
    test('logout exitoso', () => {
        expect(logoutUser()).toEqual({
            type: 'SET_CURRENT_USER',
            payload: {
                email: ''
            }
        })
    });

})