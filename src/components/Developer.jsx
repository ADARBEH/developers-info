import uuid from 'react-native-uuid';

export const actionType = {
    ADD_DEVELOPER: 'ADD_DEVELOPER',
    REMOVE_DEVELOPER: 'REMOVE_DEVELOPER'
}

// console.log(uuid.v4())  



export const developer = (state, action) => {
    console.log (action)
    switch (action.type) {
        case actionType.ADD_DEVELOPER:
            return [...state, {
                id: uuid.v4() ,
                name: action.payload.name,
                language: action.payload.language,
                technologies: action.payload.technologies,
                food: action.payload.food,
                drink: action.payload.drink
            }]

        case actionType.REMOVE_DEVELOPER:
            return state.filter(developer => developer.id !== action.payload.id)

        default:
            return state
    }
}