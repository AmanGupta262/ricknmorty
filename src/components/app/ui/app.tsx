import { ApolloProvider } from "@apollo/client";

import { client } from "config/apolloClient";

export const App = () => {
	return (
		<ApolloProvider client={client}>
			<div>app</div>
		</ApolloProvider>
	);
};
