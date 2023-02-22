import { ApolloClient, from, HttpLink, InMemoryCache } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { RetryLink } from "@apollo/client/link/retry";

const httpLink = new HttpLink({
	uri: "https://rickandmortyapi.com/graphql",
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
	if (graphQLErrors)
		graphQLErrors.forEach(({ message, locations, path }) => {
			console.log(
				`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
			);
		});
	if (networkError) console.log(`[Network error]: ${networkError}`);
});

const retryLink = new RetryLink({
	delay: {
		initial: 300,
		max: Infinity,
		jitter: true,
	},
	attempts: {
		max: 2,
		retryIf: (error, operation) => {
			console.log({ error, operation });
			return !!error;
		},
	},
});

const apolloClient = new ApolloClient({
	link: from([httpLink, errorLink, retryLink]),
	cache: new InMemoryCache({}),
});

export const client = apolloClient;
