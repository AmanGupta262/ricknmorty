import { render } from "@testing-library/react";

import { type EpisodeUI } from "types";

import { Episode } from "../";

describe("Episode", () => {
	const props: EpisodeUI = {
		name: "Episode Title",
		episode: "S01E01",
		date: "2022-01-01",
		episodeId: "e01",
	};
	it("renders the episode name, episode number, and date", () => {
		const { getByText } = render(<Episode {...props} />);

		expect(getByText(props.name)).toBeInTheDocument();
		expect(getByText(props.episode)).toBeInTheDocument();
		expect(getByText(props.date)).toBeInTheDocument();
	});

	it("renders the component with a border and padding", () => {
		const { container } = render(<Episode {...props} />);

		expect(container.firstChild).toHaveStyle("border: 1px solid gray");
		expect(container.firstChild).toHaveStyle("padding: 8px");
	});
});
