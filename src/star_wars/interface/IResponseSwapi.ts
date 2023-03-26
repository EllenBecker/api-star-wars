import { IStarWars } from "./IStar_wars"

export interface IResponseSwapi {
    count: number
    next: string
    previous: string
    results: IStarWars[]
  }