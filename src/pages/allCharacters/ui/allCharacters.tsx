import {
	Backdrop,
	Box,
	CircularProgress,
	Container,
	Pagination,
} from "@mui/material";

import { Navbar, CharacterCard, CharacterDetails } from "components";

import { useAllCharacters } from "../hooks/useAllCharacters";

export const AllCharacters = () => {
	const {
		allCharacters,
		pageInfo,
		handlePageChange,
		loading,
		fetchCharacterDetails,
		characterDetails,
		setCharacterDetails,
	} = useAllCharacters();
	return (
		<>
			{characterDetails ? (
				<CharacterDetails
					{...characterDetails}
					open
					onClose={() => {
						setCharacterDetails(undefined);
					}}
				/>
			) : null}
			<Navbar />
			<Backdrop
				open={loading}
				sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
			>
				<CircularProgress color="inherit" />
			</Backdrop>
			<Box
				display="flex"
				justifyContent="center"
				overflow="scroll"
				height="calc(100vh - 130px)"
				marginBottom="12px"
			>
				<Container
					sx={{
						display: "flex",
						gap: "20px 16px",
						flexWrap: "wrap",
						paddingBottom: "12px",
					}}
				>
					{allCharacters.map((character) => (
						<CharacterCard
							charId={character.charId}
							image={character.image}
							name={character.name}
							gender={character.gender}
							location={character.location}
							key={character.charId}
							onLearnMore={fetchCharacterDetails}
						/>
					))}
				</Container>
			</Box>
			<Container sx={{ display: "flex", justifyContent: "right" }}>
				<Pagination
					onChange={(e, page) => {
						handlePageChange(page);
					}}
					count={pageInfo?.count ?? 0}
					variant="outlined"
					shape="rounded"
				/>
			</Container>
		</>
	);
};
