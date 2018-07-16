import { INSERT_POST, REMOVE_POST } from "../constants/actions"

const initialState = {
    posts: [ {
        id: 123,
        title: "Some title...",
        body: "lorem ipsum dolor sit amet..."
    },
    {
        id: 234,
        title: "Some other title...",
        body: "lorem ipsum dolor sit amet, blah blah blah..."
    }],
    ime: "",
    prezime: ""
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case INSERT_POST:
            return {...state, posts: [...state.posts, action.payload]};
            break;
        case REMOVE_POST:
            return {...state, posts: [state.posts.filter(x => x.id != action.payload)]};
            break;
        default:
            return state;
    }
    return state;
}

export default rootReducer;