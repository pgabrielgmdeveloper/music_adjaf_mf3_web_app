export interface CreateMusic {
    singer: string,
    name: string,
    letter: string,
    music: File | null
}

export interface Music {
    id: string,
    name: string,
    singer: string,
    letter: string
}

export interface MusicDownload {
    id: string,
    name: string,
    singer: string,
    letter: string,
    URI: string
}