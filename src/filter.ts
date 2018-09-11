import { Post } from "./post";

export interface Filter<T> {
    test(value: T): boolean;
}

export interface PostFilter extends Filter<Post> {
    test(post: Post): boolean;
}

export class AuthorRegexFilter implements PostFilter {
    private regex:RegExp;

    constructor(regex: RegExp) {
        this.regex = regex;
    }

    test(post: Post): boolean {
        return this.regex.test(post.author);
    }
}



export class CommentRegexFilter implements PostFilter {
    private regex:RegExp;

    constructor(regex: RegExp) {
        this.regex = regex;
    }

    test(post: Post): boolean {
        return this.regex.test(post.comment);
    }
}
