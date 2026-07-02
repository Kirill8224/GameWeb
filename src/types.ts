export type GamesType= {
    developer: string,
    freetogame_profile_url: string,
    game_url: string,
    genre: string,
    id: number,
    platform: string,
    publisher: string,
    release_date: string,
    short_description: string,
    thumbnail: string,
    title: string,
}
export type GameTypeUi= {
    Game: {
        developer: string,
        freetogame_profile_url: string,
        game_url: string,
        genre: string,
        id: number,
        platform: string,
        publisher: string,
        release_date: string,
        short_description: string,
        thumbnail: string,
        title: string,
    },
    SetId: React.Dispatch<React.SetStateAction<number>>
}
export type InfoGameType ={
    description: string,
    developer: string,
    freetogame_profile_url: string,
    game_url: string,
    genre: string,
    id: number,
    platform: string,
    publisher: string,
    release_date: string,
    minimum_system_requirements: {
        graphics: string,
        memory: string,
        os: string,
        processor: string,
        storage: string,
    },
    screenshots:{
        id: number,
        image: string
    }[],
    status: string,
    thumbnai: string,
    title: string

}