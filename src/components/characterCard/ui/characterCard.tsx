import { Female, LocationOn } from "@mui/icons-material";
import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Tooltip,
	Typography,
} from "@mui/material";

import { type CharacterCardProps } from "types";

export const CharacterCard = ({
	name,
	image,
	gender,
	location,
}: CharacterCardProps) => {
	return (
		<Card sx={{ width: 270, height: 150, display: "flex" }}>
			<CardMedia
				component="img"
				sx={{ height: 150, width: 120, objectFit: "cover" }}
				image={image}
				title={name}
			/>
			<Box>
				<CardContent>
					<Tooltip title={name}>
						<Typography
							sx={{ fontSize: "14px", width: "110px" }}
							gutterBottom
							variant="h6"
							noWrap
						>
							{name}
						</Typography>
					</Tooltip>

					<Tooltip sx={{ marginBottom: "8px" }} title={location}>
						<Typography
							component="div"
							sx={{ display: "flex", alignItems: "center" }}
						>
							<LocationOn
								fontSize="small"
								color="info"
								sx={{ marginRight: "8px" }}
							/>
							<Typography
								sx={{
									fontSize: "12px",
									width: "90px",
								}}
								noWrap
							>
								{location}
							</Typography>
						</Typography>
					</Tooltip>
					<Tooltip title={gender}>
						<Typography
							component="div"
							sx={{ display: "flex", alignItems: "center" }}
						>
							<Female
								fontSize="small"
								color="info"
								sx={{ marginRight: "8px" }}
							/>
							<Typography
								noWrap
								sx={{
									fontSize: "12px",
									display: "flex",
									alignItems: "center",
									width: "90px",
								}}
							>
								{gender}
							</Typography>
						</Typography>
					</Tooltip>
				</CardContent>
				<CardActions>
					<Button size="small">Learn More</Button>
				</CardActions>
			</Box>
		</Card>
	);
};
