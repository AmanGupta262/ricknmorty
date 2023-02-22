import { type CharacterUI } from "types";
import { type Character, type GetAllCharactersQuery } from "types/generated";

export const getAllCharactersApi = (
	data: GetAllCharactersQuery
): CharacterUI[] => {
	if (!data.characters?.results) {
		return [];
	}

	const charactersFromApi = data.characters.results as Character[];

	return charactersFromApi.map((character: Character) => {
		const {
			location,
			origin,
			created,
			gender,
			image,
			name,
			species,
			status,
			type,
			id: charId,
		} = character;

		return {
			location: location?.name ?? "",
			origin: origin?.name ?? "",
			created: created ?? "",
			gender: gender ?? "",
			image: image ?? "",
			name: name ?? "",
			species: species ?? "",
			status: status ?? "",
			type: type ?? "",
			charId: charId ?? "",
		};
	});
};
