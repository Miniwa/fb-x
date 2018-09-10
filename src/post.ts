export class Post {
    constructor(id: number, author: string, comment: string) {
        this.id = id;
        this.author = author;
        this.comment = comment;
    }

    id: number;
    author: string;
    comment: string;
}
