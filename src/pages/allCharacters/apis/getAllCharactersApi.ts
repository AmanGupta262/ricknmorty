import { type CharacterUI } from "types";
import { type Character, type GetAllCharactersQuery } from "types/generated";

export const getCharacterApi = (data: Character) => {
	const { location, created, gender, image, name, id: charId } = data;

	return {
		location: location?.name ?? "",
		created: created ?? "",
		gender: gender ?? "",
		image: image ?? "",
		name: name ?? "",
		charId: charId ?? "",
	};
};

export const getAllCharactersApi = (
	data: GetAllCharactersQuery
): CharacterUI[] => {
	if (!data.characters?.results) {
		return [];
	}

	const charactersFromApi = data.characters.results as Character[];

	return charactersFromApi.map((character: Character) =>
		getCharacterApi(character)
	);
};
