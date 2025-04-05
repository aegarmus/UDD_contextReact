/*Función reductora */
export const authReducer = (state, action) => {
    switch(action.type) {
        case 'LOGIN': 
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token
            };
        case 'LOGOUT': 
            return {
                ...state,
                user: null,
                token: null
            }
    }
};


/* 
switch(valorAEvaluar){
    case 'hipopotamo': 
        console.log('Corre el hipotatamo es malulo');
        break;
    case 'mermelada':
        console.log('La vida es maravillosa');
        break;
    case default:
        console.log('No se que hacer');
        break;
}
*/
