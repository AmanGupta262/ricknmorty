import { useState } from "react";

import { type CharacterDetails, type CharacterUI } from "types";
import {
	type Info,
	useGetAllCharactersQuery,
	useGetSingleCharacterLazyQuery,
} from "types/generated";

import { getAllCharactersApi, getCharacterDetailsApi } from "../apis";

export const useAllCharacters = () => {
	const [allCharacters, setAllCharacters] = useState<CharacterUI[]>([]);
	const [pageInfo, setPageInfo] = useState<Info>();
	const [characterDetails, setCharacterDetails] = useState<CharacterDetails>();

	const getAllCharacterQuery = useGetAllCharactersQuery({
		onError: (error) => {
			console.log("error: ", error);
		},
		notifyOnNetworkStatusChange: true,
		onCompleted: (res) => {
			const dataFromApi = getAllCharactersApi(res);
			setPageInfo(res.characters?.info ?? undefined);
			setAllCharacters(dataFromApi);
		},
	});

	const [getSingleCharacter] = useGetSingleCharacterLazyQuery();

	const handlePageChange = (page: number) => {
		void getAllCharacterQuery.refetch({ page });
	};

	const fetchCharacterDetails = (charId: string) => {
		void getSingleCharacter({
			variables: { id: charId },
			onCompleted: (res) => {
				setCharacterDetails(getCharacterDetailsApi(res));
			},
		});
	};

	return {
		allCharacters,
		pageInfo,
		loading: getAllCharacterQuery.loading,
		handlePageChange,
		characterDetails,
		fetchCharacterDetails,
	};
};
