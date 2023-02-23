import { gql } from "@apollo/client";

export const getAllCharacters = gql`
	fragment CharacterFragment on Character {
		id
		name
		gender
		location {
			name
		}
		image
		created
	}
	query getAllCharacters($page: Int, $filter: FilterCharacter) {
		characters(page: $page, filter: $filter) {
			info {
				count
				pages
				next
				prev
			}
			results {
				...CharacterFragment
			}
		}
	}
`;
