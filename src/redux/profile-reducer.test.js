import profileReducer, { addPostActionCreator, deletePost } from './profile-reducer'

const state = {
    posts: [
        { id: 1, message: 'Hi, how are u', likesCount: 20 },
        { id: 2, message: 'Its my first post', likesCount: 2 }
    ]
}

it('length of posts should be incremented ', () => {
    // 1. test data
    let action = addPostActionCreator('makar')

    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.posts.length).toBe(3)
})

it('message of new posts should be correct', () => {
    // 1. test data
    let action = addPostActionCreator('makar')
    
    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.posts[2].message).toBe('makar')
})

it('after deleting length of messages should be decrement', () => {
    // 1. test data
    let action = deletePost(1)
    
    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.posts.length).toBe(1)
})
