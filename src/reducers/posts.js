
export const postHasErrorReducer = (state = false, action) => {
    switch (action.type) {
        case 'POST_FETCH_ERROR':
            return action.hasError;
        default:
            return state;
    }
}

export const postLoadingReducer = (state = false, action) => {
    switch (action.type) {
        case 'POST_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}

export const posts = (state = [], action) => {
    switch (action.type) {
        case 'POST_SUCCESS':
            return action.posts;
        default:
            return state;
    }
}