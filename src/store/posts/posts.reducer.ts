import * as postTypes from "./posts.types";
import { v4 as uuidv4 } from "uuid";
import { Statuses } from "../types";
import { Post } from "api/posts.types";

export const initialState: postTypes.State = {
  postsRequestStatus: Statuses.UNCALLED,
  
  posts: [],

};

export const postsReducer = (
  state: postTypes.State = initialState,
  action: postTypes.Actions
): postTypes.State => {
  switch (action.type) {
    case postTypes.SET_POSTS_REQUEST_STATUS_PENDING:
      return { ...state, postsRequestStatus: Statuses.PENDING };
    case postTypes.SET_POSTS:
      return {
        ...state,
        posts: action.payload,
        postsRequestStatus: Statuses.SUCCESS,
      };
    case postTypes.SET_POSTS_REQUEST_STATUS_FAILURE:
      return { ...state, postsRequestStatus: Statuses.FAILURE };

    case postTypes.CREATE_POST_REQUEST_STATUS_PENDING:
      return { ...state, postsRequestStatus: Statuses.PENDING };
    case postTypes.CREATE_POST:
      return {
        ...state,
        posts: state.posts.concat(action.payload),
        postsRequestStatus: Statuses.SUCCESS,
      };
    case postTypes.CREATE_POST_REQUEST_STATUS_FAILURE:
      return { ...state, postsRequestStatus: Statuses.FAILURE };

      case postTypes.DELETE_POST_REQUEST_STATUS_PENDING:
        return { ...state, postsRequestStatus: Statuses.PENDING };
      case postTypes.DELETE_POST:
        return {
          ...state,
          posts: state.posts.filter(post => post.id !== action.payload),
          postsRequestStatus: Statuses.SUCCESS,
        };
      case postTypes.DELETE_POST_REQUEST_STATUS_FAILURE:
        return { ...state, postsRequestStatus: Statuses.FAILURE };


    default:
      return state;
  }
};
