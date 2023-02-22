import { useState } from "react";

import { type CharacterUI } from "types";
import { useGetAllCharactersQuery } from "types/generated";

import { getAllCharactersApi } from "../apis";

export const useAllCharacters = () => {
	const [allCharacters, setAllCharacters] = useState<CharacterUI[]>([]);

	useGetAllCharactersQuery({
		onError: (error) => {
			console.log("error: ", error);
		},
		onCompleted: (res) => {
			const dataFromApi = getAllCharactersApi(res);
			setAllCharacters(dataFromApi);
		},
	});

	return { allCharacters };
};
