import { ApolloProvider } from "@apollo/client";

import { client } from "config/apolloClient";
import { AllCharacters } from "pages";

export const App = () => {
	console.log("client", client);
	return (
		<ApolloProvider client={client}>
			<AllCharacters />
		</ApolloProvider>
	);
};
