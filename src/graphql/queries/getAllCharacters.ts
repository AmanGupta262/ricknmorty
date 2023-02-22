import { gql } from "@apollo/client";

export const getAllCharacters = gql`
	query getAllCharacters($page: Int, $filter: FilterCharacter) {
		characters(page: $page, filter: $filter) {
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
				}
				location {
					name
				}
				image
				created
			}
		}
	}
`;
