import {
  SET_POSTS_REQUEST_STATUS_PENDING,
  SET_POSTS,
  SET_POSTS_REQUEST_STATUS_FAILURE,
  Actions,
} from "../posts.types";
import { initialState, postsReducer } from "../posts.reducer";
import { Statuses } from "../../types";

describe("postReducer", () => {
  it("SET_POSTS_REQUEST_STATUS_PENDING", () => {
    const action = { type: SET_POSTS_REQUEST_STATUS_PENDING } as Actions;

    expect(postsReducer(initialState, action)).toEqual({
      ...initialState,
      postsRequestStatus: Statuses.PENDING,
    });
  });

  it("SET_POSTS", () => {
    const action = {
      type: SET_POSTS,
      payload: [
        {
          id: 1,
          userId: 1,
          title: "title",
          body: "body",
        },
      ],
    } as Actions;

    expect(postsReducer(initialState, action)).toEqual({
      ...initialState,
      posts: [
        {
          id: 1,
          userId: 1,
          title: "title",
          body: "body",
        },
      ],
      postsRequestStatus: Statuses.SUCCESS,
    });
  });

  it("SET_POSTS_REQUEST_STATUS_FAILURE", () => {
    const action = { type: SET_POSTS_REQUEST_STATUS_FAILURE } as Actions;

    expect(postsReducer(initialState, action)).toEqual({
      ...initialState,
      postsRequestStatus: Statuses.FAILURE,
    });
  });
});
