export interface postData {
    titulo?: string,
    date?: string,
    autor?: string,
    resumo?: string,
    data?: postData,
    id: string,
    contentMD?: string
}
export interface postsInterface {
    data: any
}
export interface postList{
    data: postData[]
}