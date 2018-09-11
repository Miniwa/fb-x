export class Post {
    public id: number;
    public author: string;
    public comment: string;

    constructor(id: number, author: string, comment: string) {
        this.id = id;
        this.author = author;
        this.comment = comment;
    }
}
