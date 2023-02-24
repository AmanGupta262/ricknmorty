import { gql } from "@apollo/client";

export const getSingleCharacter = gql`
	query getSingleCharacter($id: ID!) {
		character(id: $id) {
			...CharacterFragment
			episode {
				id
				name
				episode
				air_date
			}
			status
			species
			type
			origin {
				name
			}
		}
	}
`;
