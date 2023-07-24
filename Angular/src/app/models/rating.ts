export interface Rating {
    id?: string, //forse diventerà number
    userId: string,
    //team: string, fare di riflessione
    movieId: string, //probabilmente diventerà number
    rating: number,
    comment: string
}
