import * as $ from "jquery";
import { Post } from "./post";

export function showPost(post: Post): void {

}

export function getPost(postId: number): Post {
    return null;
}

export function getAllPosts(): Post[] {
    let domPosts = $("div.post");
    console.log("Posts: ", domPosts.length);
    for (const element of domPosts.toArray()) {
        let domPost = $(element);
        console.log("domPost: ", domPost);
        let username = domPost.find("a.post-user-username").text().trim();
        console.log("Username: ", username);
    }
    return null;
}
