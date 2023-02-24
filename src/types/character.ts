export interface CharacterCardProps {
	charId: string;
	name: string;
	image: string;
	gender: string;
	location: string;
	onLearnMore: (charId: string) => void;
}

export type CharacterUI = Omit<CharacterCardProps, "onLearnMore">;

export interface EpisodeUI {
	episodeId: string;
	name: string;
	episode: string;
	date: string;
}

export interface CharacterDetails extends CharacterUI {
	species: string;
	type: string;
	origin: string;
	episode: EpisodeUI[];
}

export interface CharacterDetailsModalProps extends CharacterDetails {
	open: boolean;
	onClose: () => void;
}
