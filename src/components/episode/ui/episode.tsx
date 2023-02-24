import { Box, Typography } from "@mui/material";

import { TypographyTooltip } from "components/typographyTooltip";
import { type EpisodeUI } from "types";

export const Episode = ({ date, episode, name }: EpisodeUI) => {
	return (
		<Box border="1px solid gray" padding="8px" borderRadius="4px">
			<TypographyTooltip variant="subtitle1" title={name} />
			<Box display="flex" flexDirection="column">
				<Typography variant="caption">{episode}</Typography>
				<Typography variant="caption">{date}</Typography>
			</Box>
		</Box>
	);
};
