export type Post = {
    id: string,
    title?: string,
    date?: Date | any,
    content?: string
}

export type Posts = Array<Post>