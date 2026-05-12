interface MoviesType{
    _id: string,
    year: string,
    title: string,
    genres:string[],
    runtime:string,
    type:string,
    poster:string,
}

interface SeriesType{
    _id: string,
    year: string,
    title: string,
    genres:string[],
    runtime:string,
    type:string,
    poster:string,
}

interface FaveType{
    _id: string,
    showID: string
}


export type { MoviesType, SeriesType,FaveType }