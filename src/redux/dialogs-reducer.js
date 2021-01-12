const SEND_MESSAGE = 'SEND_MESSAGE'

const initialState = {
    dialogs: [
        {
            id: 1,
            name: 'Danila'
        },
        {
            id: 2,
            name: 'Makarych'
        },
        {
            id: 3,
            name: 'Leshych'
        }
    ],
    messages: [
        {
            id: 1,
            message: 'Hi'
        },
        {
            id: 2,
            message: 'How are u'
        },
        {
            id: 3,
            message: 'Yo'
        }
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            const body = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages, { id: 4, message: body }]
            }

        default: return state
    }
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })

export default dialogsReducer