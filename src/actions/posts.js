export const postFetchErrorAction = error => {
    return {
        type: "POST_FETCH_ERROR",
        hasError: error
    }
}

export const postLoadingAction = loading => {
    return {
        type: "POST_LOADING",
        isLoading: loading
    }
}

export const postSuccessAction = posts => {
    return {
        type: 'POST_SUCCESS',
        posts: posts
    }
}

export const fetchPosts = () => {
    console.log("Fetch posts");
    return (dispatch) => {
        dispatch(postLoadingAction(true))

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => dispatch(postSuccessAction(data)))
            .catch(err => dispatch(postFetchErrorAction(true)))
    }
}