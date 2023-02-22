export interface CharacterCardProps {
	charId: string;
	name: string;
	image: string;
	gender: string;
	location: string;
}

export interface CharacterUI extends CharacterCardProps {
	status: string;
	species: string;
	type: string;
	origin: string;
	created: string;
}
