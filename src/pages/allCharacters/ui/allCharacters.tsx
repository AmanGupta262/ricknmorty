import { Box, Container } from "@mui/material";

import { Navbar, CharacterCard } from "components";

import { useAllCharacters } from "../hooks/useAllCharacters";

export const AllCharacters = () => {
	const { allCharacters } = useAllCharacters();
	return (
		<>
			<Navbar />
			<Box display="flex" justifyContent="center">
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
						/>
					))}
				</Container>
			</Box>
		</>
	);
};
