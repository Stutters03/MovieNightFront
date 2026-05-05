interface MoviesType{
    _id: string,
    year: string,
    title: string,
    genres:string[],
    runtime:number[],
    type:string,
    poster:string,
}

export type { MoviesType }