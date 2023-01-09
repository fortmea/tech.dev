export interface postData {
    titulo?: string,
    content?: string,
    date?: Date,
    autor?: string,
    resumo?: string,
    data?: postData,
    id: string
}
export interface postsInterface {
    data: any
}
export interface stringList{
    data: postData[]
}