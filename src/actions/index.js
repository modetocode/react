import { INSERT_POST, REMOVE_POST} from "../actions"

export const insertPost = post => {
    return {
        type: "INSERT_POST",
        payload: post,
    }
}

export const deletePost = id => {
    return {
        type: "REMOVE_POST",
        payload: id
    }
}