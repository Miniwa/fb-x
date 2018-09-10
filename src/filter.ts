interface Filter<T> {
    test: (value: T) => boolean;
}

interface PostFilter extends Filter<string> {
    test: (post: string) => boolean;
}
