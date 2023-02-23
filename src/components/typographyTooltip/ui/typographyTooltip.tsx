import { Box, Tooltip, Typography } from "@mui/material";

import { type TypographyTooltipProps } from "types";

export const TypographyTooltip = ({ icon, title }: TypographyTooltipProps) => {
	return (
		<Tooltip title={title}>
			<Box
				component="div"
				sx={{
					display: "flex",
					alignItems: "center",
					marginBottom: "8px",
				}}
			>
				{icon}
				<Typography
					sx={{
						fontSize: "12px",
						width: "160px",
					}}
					noWrap
				>
					{title}
				</Typography>
			</Box>
		</Tooltip>
	);
};
