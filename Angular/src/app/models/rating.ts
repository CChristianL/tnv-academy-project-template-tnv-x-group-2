export interface Rating {
    id?: number, //forse diventerà number
    userId?: number,
    username?: string,
    team?: string, 
    movieId?: number, //probabilmente diventerà number
    rating?: number,
    comment?: string //il partial generale è per il test
}
