import { INSERT_POST, REMOVE_POST } from "../constants/actions"
import { combineReducers } from 'redux';
import { postHasErrorReducer, postLoadingReducer, posts } from './posts'

const initialState = {
    posts: [{
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

// const rootReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case INSERT_POST:
//             return {...state, posts: [...state.posts, action.payload]};
//             break;
//         case REMOVE_POST:
//             return {...state, posts: [state.posts.filter(x => x.id != action.payload)]};
//             break;
//         default:
//             return state;
//     }
//     return state;
// }

const rootReducer = combineReducers({
    postHasErrorReducer, 
    postLoadingReducer, 
    posts
});
export default rootReducer;