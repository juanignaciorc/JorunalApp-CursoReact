import { types } from '../types/types';

/*
    {
        uid: aksdklasd12312345,
        name: ' Juan Ignacio Roldan',
    }


*/

export const authReducer = (state = {}, action) => {

    switch ( action.type ) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName,
            }
        case types.logout:
            return { }
    
        default:
            return state;
    }
     
}