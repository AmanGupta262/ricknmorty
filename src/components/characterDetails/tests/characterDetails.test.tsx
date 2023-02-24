import { render, screen } from "@testing-library/react";

import { type CharacterDetailsModalProps } from "types";

import { CharacterDetails } from "../";

describe("CharacterDetails", () => {
	const props: CharacterDetailsModalProps = {
		gender: "Female",
		image: "https://via.placeholder.com/150",
		location: "Earth",
		name: "Test Character",
		onClose: jest.fn(),
		charId: "1",
		open: true,
		episode: [
			{
				date: "December 2, 2013",
				episode: "S01E01",
				episodeId: "e01",
				name: "Test Episode 1",
			},
			{
				date: "December 9, 2013",
				episode: "S01E02",
				episodeId: "e02",
				name: "Test Episode 2",
			},
		],
		origin: "Test Origin",
		species: "Test Species",
	};

	it("should render the character details modal with the correct information", () => {
		render(<CharacterDetails {...props} />);

		expect(
			screen.getByRole("heading", { name: "Test Character" })
		).toBeInTheDocument();
		expect(screen.getByAltText("Test Character")).toBeInTheDocument();
		expect(screen.getByRole("img")).toHaveAttribute(
			"src",
			"https://via.placeholder.com/150"
		);
		expect(screen.getByText("Earth")).toBeInTheDocument();
		expect(screen.getByText("Female")).toBeInTheDocument();
		expect(screen.getByText("Test Origin")).toBeInTheDocument();
		expect(screen.getByText("Test Species")).toBeInTheDocument();

		expect(screen.getByText("Episodes")).toBeInTheDocument();
		expect(screen.getByText("Test Episode 1")).toBeInTheDocument();
		expect(screen.getByText("December 2, 2013")).toBeInTheDocument();
		expect(screen.getByText("S01E01")).toBeInTheDocument();
		expect(screen.getByText("Test Episode 2")).toBeInTheDocument();
		expect(screen.getByText("December 9, 2013")).toBeInTheDocument();
		expect(screen.getByText("S01E02")).toBeInTheDocument();
	});
});
