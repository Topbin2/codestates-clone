export interface GetPostsResponseType {
  userId: number;
  id: string;
  title: string;
  body: string;
  views: number;
  url: string;
}

export interface PostSliceInitialState {
  isLoading: boolean;
  errorMsg: string | unknown;
  posts: GetPostsResponseType[];
  sortedPosts: GetPostsResponseType[];
}
