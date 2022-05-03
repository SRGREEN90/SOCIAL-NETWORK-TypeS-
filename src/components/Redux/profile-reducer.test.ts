import ProfileReducer, {addPostActionCreator, PostObjectPropsType, ProfileType} from "./profile-reducer";



test('posts length should be incremented', () => {
    let newAction = addPostActionCreator('This is a superPost')
    let state = {
        posts: [
            {id: 1, post: 'Hi, how are you?', likesKount: 12},
            {id: 2, post: 'It is my first post!', likesKount: 50},
            {id: 3, post: 'Im so happy!', likesKount: 70},
        ] as Array<PostObjectPropsType>,
        profile: {} as ProfileType,
        status: ''
    }
    let newState = ProfileReducer(state, newAction)

    expect(newState.posts.length).toBe(4)
    expect(newState.posts.length).not.toBe(3)
    expect(newState.posts[3].post).toBe('This is a superPost')
});


