export type PostObject = {
    id: string,
    title?: string,
    content?: string,
    date?: Date | any,
    hours?: number

}

export type Posts = Array<PostObject>