import axios from "axios";
const url = "http://localhost:5000/api/posts";
class PostService {
  //get post
  static getPosts() {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url);
        const data = res.data;

        resolve(
          data.map((post) => ({
            ...post,
            createdAt: new Date(post.createdAt),
          }))
        );
      } catch (err) {
        reject(err);
      }
    });
  }

  //create post
  static createPost(userName, text, place) {
    return axios.post(url, {
      userName,
      text,
      place,
    });
  }

  // delete post
  static deletePost(id) {
    return axios.delete(`${url}/${id}`);
  }
}
export default PostService;
