import { type ReactNode } from "react";

import { type TypographyProps } from "@mui/material";

export interface TypographyTooltipProps {
	title: string;
	icon?: ReactNode;
	variant?: TypographyProps["variant"];
}
