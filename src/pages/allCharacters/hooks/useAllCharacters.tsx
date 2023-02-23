import { useState } from "react";

import { type CharacterUI } from "types";
import { type Info, useGetAllCharactersQuery } from "types/generated";

import { getAllCharactersApi } from "../apis";

export const useAllCharacters = () => {
	const [allCharacters, setAllCharacters] = useState<CharacterUI[]>([]);
	const [pageInfo, setPageInfo] = useState<Info>();

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

	const handlePageChange = (page: number) => {
		void getAllCharacterQuery.refetch({ page });
	};

	return {
		allCharacters,
		pageInfo,
		loading: getAllCharacterQuery.loading,
		handlePageChange,
	};
};
