import { type CharacterDetails } from "types";
import { type GetSingleCharacterQuery, type Character } from "types/generated";

import { getCharacterApi } from "./getAllCharactersApi";

export const getCharacterDetailsApi = (
	data: GetSingleCharacterQuery
): CharacterDetails | undefined => {
	if (!data.character) return undefined;
	const { episode, origin, species, status, type } = data.character;
	return {
		episode: episode.map((eachEpisode) => ({
			episode: eachEpisode?.episode ?? "",
			episodeId: eachEpisode?.id ?? "",
			name: eachEpisode?.name ?? "",
		})),
		origin: origin?.name ?? "",
		species: species ?? "",
		status: status ?? "",
		type: type ?? "",
		...getCharacterApi(data.character as Character),
	};
};
