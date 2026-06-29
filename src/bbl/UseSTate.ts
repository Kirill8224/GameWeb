import { useState } from "react"
import type { GamesType } from "../types"
export function useTraks(){
    const [Games, SetGames] = useState<GamesType[]>([])
    return( [Games, SetGames] )
}