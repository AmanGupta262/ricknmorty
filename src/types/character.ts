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
}

export interface CharacterDetails extends CharacterUI {
	status: string;
	species: string;
	type: string;
	origin: string;
	created: string;
	episode: EpisodeUI[];
}

export interface CharacterDetailsModalProps extends CharacterDetails {
	open: boolean;
	onClose: () => void;
}
