import * as $ from "jquery";
import { Post } from "../post";

export function showPost(post: Post): void {

}

export function getPost(postId: number): Post {
    return null;
}

export function getAllPosts(): Post[] {
    const domPosts = $("div.post");
    const posts = new Array<Post>();
    for (const element of domPosts.toArray()) {
        const domPost = $(element);
        const id: number = domPost.data("postid");
        const username = domPost.find("a.post-user-username").text().trim();
        const commentDom = domPost.find("div.post_message");

        let comment: string;
        for (const child of commentDom.contents()) {
            if (child.nodeName === "#text") {
                comment += child.textContent;
                console.log("Text: ", child);
            } else {
                console.log("Other: ", child);
            }
        }
        console.log(comment);
        posts.push(new Post(id, username, null));
    }
    return posts;
}

function parseComment(commentDom: JQuery<HTMLElement>): string {
    return parseCommentNodes(commentDom.contents());
}

function parseCommentNode(node: JQuery<HTMLElement | Text | Comment>): string {
    let comment: string;
    if (node)
}

function parseCommentNodes(nodes: JQuery<HTMLElement | Text | Comment>): string {
    let comment: string;
    for (const node of nodes) {
        comment += parseCommentNode($(node));
    }
}
