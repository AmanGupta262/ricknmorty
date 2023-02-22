import { ApolloProvider } from "@apollo/client";
import { Box, Container } from "@mui/material";

import { CharacterCard, Navbar } from "components";
import { client } from "config/apolloClient";

export const App = () => {
	console.log("client", client);
	return (
		<ApolloProvider client={client}>
			<Navbar />
			<Box display="flex" justifyContent="center">
				<Container
					sx={{
						display: "flex",
						gap: "20px 16px",
						flexWrap: "wrap",
					}}
				>
					<CharacterCard
						charId=""
						image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
						name="Rick Sanchez"
					/>

					<CharacterCard
						charId=""
						image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
						name="Rick Sanchez"
					/>

					<CharacterCard
						charId=""
						image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
						name="Rick Sanchez"
					/>

					<CharacterCard
						charId=""
						image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
						name="Rick Sanchez"
					/>
					<CharacterCard
						charId=""
						image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
						name="Rick Sanchez"
					/>
					<CharacterCard
						charId=""
						image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
						name="Rick Sanchez"
					/>
					<CharacterCard
						charId=""
						image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
						name="Rick Sanchez"
					/>
					<CharacterCard
						charId=""
						image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
						name="Rick Sanchez"
					/>
					<CharacterCard
						charId=""
						image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
						name="Rick Sanchez"
					/>
					<CharacterCard
						charId=""
						image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
						name="Rick Sanchez"
					/>
					<CharacterCard
						charId=""
						image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
						name="Rick Sanchez"
					/>
					<CharacterCard
						charId=""
						image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
						name="Rick Sanchez"
					/>
					<CharacterCard
						charId=""
						image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
						name="Rick Sanchez"
					/>
					<CharacterCard
						charId=""
						image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
						name="Rick Sanchez"
					/>

					<CharacterCard
						charId=""
						image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
						name="Rick Sanchez"
					/>

					<CharacterCard
						charId=""
						image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
						name="Rick Sanchez"
					/>

					<CharacterCard
						charId=""
						image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
						name="Rick Sanchez"
					/>
					<CharacterCard
						charId=""
						image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
						name="Rick Sanchez"
					/>
					<CharacterCard
						charId=""
						image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
						name="Rick Sanchez"
					/>
					<CharacterCard
						charId=""
						image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
						name="Rick Sanchez"
					/>
					<CharacterCard
						charId=""
						image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
						name="Rick Sanchez"
					/>
					<CharacterCard
						charId=""
						image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
						name="Rick Sanchez"
					/>
					<CharacterCard
						charId=""
						image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
						name="Rick Sanchez"
					/>
					<CharacterCard
						charId=""
						image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
						name="Rick Sanchez"
					/>
					<CharacterCard
						charId=""
						image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
						name="Rick Sanchez"
					/>
					<CharacterCard
						charId=""
						image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
						name="Rick Sanchez"
					/>
				</Container>
			</Box>
		</ApolloProvider>
	);
};
