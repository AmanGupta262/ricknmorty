import { type CharacterDetails } from "types";
import { type GetSingleCharacterQuery, type Character } from "types/generated";

import { getCharacterApi } from "./getAllCharactersApi";

export const getCharacterDetailsApi = (
	data: GetSingleCharacterQuery
): CharacterDetails | undefined => {
	if (!data.character) return undefined;
	const { episode, origin, species } = data.character;
	return {
		episode: episode.map((eachEpisode) => ({
			episode: eachEpisode?.episode ?? "",
			episodeId: eachEpisode?.id ?? "",
			name: eachEpisode?.name ?? "",
			date: eachEpisode?.air_date ?? "",
		})),
		origin: origin?.name ?? "",
		species: species ?? "",
		...getCharacterApi(data.character as Character),
	};
};
