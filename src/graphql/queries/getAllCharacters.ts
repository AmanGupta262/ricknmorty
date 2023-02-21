import { gql } from "@apollo/client";

export const getAllCharacters = gql`
	query getAllCharacters {
		characters {
			info {
				count
				pages
				next
				prev
			}
			results {
				id
				name
				status
				species
				type
				gender
				origin {
					name
					type
					dimension
				}
				location {
					id
					name
				}
			}
		}
	}
`;
