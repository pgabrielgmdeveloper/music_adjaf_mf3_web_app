import { MusicDownload } from "../music/music";

export interface CultResponse {
    id: string;
    name: string;
    praise: Array<Praise>;
}

export interface Praise {
    id: string;
    group: Group;
    music: Music | MusicDownload;
}

export interface AddPraise extends Praise {

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
    URI: string
}

export interface CreateCultRequest{
    name: string
}