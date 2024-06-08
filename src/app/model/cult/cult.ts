export interface CultResponse {
    id: string;
    name: string;
    Praise: Array<Praise>;
}

export interface Praise {
    id: string;
    group: Group;
    music: Music;
}

export interface Group {
    id: string;
    name: string;
}

export interface Music {
    id: string;
    singer: string;
    name: string;
    letter: string;
}