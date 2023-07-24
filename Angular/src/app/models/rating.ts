export interface Rating {
    id?: string, //forse diventerà number
    userId: string,
    movieId: string, //probabilmente diventerà number
    rating: number,
    comment: string
}
