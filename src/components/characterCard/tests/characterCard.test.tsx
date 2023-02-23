import { render, screen } from "@testing-library/react";

import { CharacterCard } from "../";

describe("CharacterCard", () => {
	const props = {
		name: "Test Name",
		image: "test-image.jpg",
		gender: "Female",
		location: "Test Location",
		charId: "1",
		onLearnMore: (charId: string) => {
			console.log(charId);
		},
	};

	it("renders the character's name", () => {
		render(<CharacterCard {...props} />);
		expect(screen.getByText(props.name)).toBeInTheDocument();
	});

	it("renders the character's image with the correct alt text", () => {
		render(<CharacterCard {...props} />);
		const imageElement = screen.getByRole("img");
		expect(imageElement).toBeInTheDocument();
		expect(imageElement).toHaveAttribute("src", props.image);
		expect(imageElement).toHaveAttribute("alt", props.name);
	});

	it("renders the character's gender and location", () => {
		render(<CharacterCard {...props} />);
		expect(screen.getByText(props.gender)).toBeInTheDocument();
		expect(screen.getByText(props.location)).toBeInTheDocument();
	});

	it("renders the 'Learn More' button", () => {
		render(<CharacterCard {...props} />);
		expect(screen.getByText("Learn More")).toBeInTheDocument();
	});
});
