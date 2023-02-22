import { Female, LocationOn } from "@mui/icons-material";
import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";

import { type CharacterCardProps } from "types";

export const CharacterCard = ({ name, image }: CharacterCardProps) => {
	return (
		<Card sx={{ maxWidth: 300, maxHeight: 150, display: "flex" }}>
			<CardMedia
				component="img"
				sx={{ height: 150, width: 120, objectFit: "cover" }}
				image={image}
				title={name}
			/>
			<Box>
				<CardContent>
					<Typography
						sx={{ fontSize: "14px" }}
						gutterBottom
						variant="h6"
						component="div"
					>
						{name}
					</Typography>
					<Typography
						sx={{
							fontSize: "12px",
							display: "flex",
							marginBottom: "6px",
							alignItems: "center",
						}}
						variant="h6"
						component="div"
					>
						<LocationOn
							fontSize="small"
							color="info"
							sx={{ marginRight: "8px" }}
						/>
						{name}
					</Typography>
					<Typography
						sx={{ fontSize: "12px", display: "flex", alignItems: "center" }}
						variant="h6"
						component="div"
					>
						<Female fontSize="small" color="info" sx={{ marginRight: "8px" }} />
						{name}
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="small">Learn More</Button>
				</CardActions>
			</Box>
		</Card>
	);
};
