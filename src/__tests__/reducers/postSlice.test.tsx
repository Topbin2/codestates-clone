import { getPosts } from "../../actions/postActions";
import { postReducer, sortByViews } from "../../reducers/postSlice";

describe("postSlice", () => {
  it("initial state를 리턴한다.", () => {
    const result = postReducer(undefined, { type: undefined });
    expect(result).toEqual({
      isLoading: false,
      errorMsg: "",
      posts: [],
      sortedPosts: [],
    });
  });

  it("sortByViews action은 조회수에 따라 posts 상태를 정렬한다.", () => {
    const prevState = {
      isLoading: false,
      errorMsg: "",
      posts: [
        {
          userId: 1,
          id: "1",
          url: "url",
          title: "제목1",
          body: "바디1",
          views: 294,
        },
        {
          userId: 2,
          id: "2",
          url: "url",
          title: "제목2",
          body: "바디2",
          views: 763,
        },
        {
          userId: 3,
          id: "3",
          url: "url",
          title: "제목3",
          body: "바디3",
          views: 710,
        },
        {
          userId: 4,
          id: "4",
          url: "url",
          title: "제목4",
          body: "바디4",
          views: 724,
        },
      ],
      sortedPosts: [],
    };
    const result = postReducer(prevState, sortByViews());
    expect(result.sortedPosts[0].userId).toBe(2);
    expect(result.sortedPosts[1].userId).toBe(4);
    expect(result.sortedPosts[2].userId).toBe(3);
    expect(result.sortedPosts[3].userId).toBe(1);
  });

  it("getPosts.pending action은 isLoading 상태를 true로 변경한다.", () => {
    const action = getPosts.pending;
    const result = postReducer(undefined, action);
    expect(result.isLoading).toBe(true);
  });

  it("getPosts.pending action은 isLoading 상태를 false로 변경하고 posts의 상태를 변경한다.", () => {
    const action = getPosts.fulfilled(
      [
        {
          userId: 1,
          id: "1",
          url: "url",
          title: "제목1",
          body: "바디1",
          views: 294,
        },
      ],
      "",
      undefined
    );
    const prevState = {
      isLoading: true,
      errorMsg: "",
      posts: [],
      sortedPosts: [],
    };
    const result = postReducer(prevState, action);
    expect(result.isLoading).toBe(false);
    expect(result.posts.length).toBe(1);
  });

  it("getPosts.rejected action은 isLoading 상태를 false로 변경하고 errorMsg의 상태를 변경한다.", () => {
    const error = new Error();
    const prevState = {
      isLoading: true,
      errorMsg: "",
      posts: [],
      sortedPosts: [],
    };
    const action = getPosts.rejected(error, "", undefined);
    const result = postReducer(prevState, action);
    expect(result.isLoading).toBe(false);
    expect(result.errorMsg).toEqual(undefined);
  });
});
