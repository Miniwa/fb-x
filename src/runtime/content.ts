import * as dom from "./dom";

const posts = dom.getAllPosts();
for (const post of posts) {
    console.log(`Id: ${post.id}`);
    console.log(`Author: ${post.author}`);
    console.log(`Comment: ${post.comment}`);
}
