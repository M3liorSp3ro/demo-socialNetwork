import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"
import sidebarReducer from "./sidebar-reducer"

let store = {

    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are u', likesCount: 20 },
                { id: 2, message: 'Its my first post', likesCount: 2 }
            ],
            newPostText: 'makar'
        },
        dialogsPage: {
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
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },

    _callsubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state
    },

    subscribe(observer) {
        this._callsubscriber = observer // паттерн observer // publisher-subscriber
    },

    dispatch(action) { // (type: 'ADD_POST')

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callsubscriber(this._state)
    }
}

window.store = store
export default store
// store = OOP