import { Box, Tooltip, Typography } from "@mui/material";

import { type TypographyTooltipProps } from "types";

export const TypographyTooltip = ({
	icon,
	title,
	variant,
}: TypographyTooltipProps) => {
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
						width: "160px",
					}}
					variant={variant}
					noWrap
				>
					{title}
				</Typography>
			</Box>
		</Tooltip>
	);
};
