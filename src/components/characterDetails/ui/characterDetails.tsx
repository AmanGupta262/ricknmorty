import { Adb, Female, Home, LocationOn } from "@mui/icons-material";
import { Box, CardMedia, Modal, Tooltip, Typography } from "@mui/material";

import { TypographyTooltip } from "components/typographyTooltip";
import { type CharacterDetailsModalProps } from "types";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

export const CharacterDetails = ({
	gender,
	image,
	location,
	name,
	onClose,
	open,
	created,
	episode,
	origin,
	species,
	status,
}: CharacterDetailsModalProps) => {
	return (
		<Modal
			open={open}
			onClose={onClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box sx={style}>
				<Box display="flex" gap="16px">
					<CardMedia
						component="img"
						sx={{ height: 150, width: 150, objectFit: "cover" }}
						image={image}
						title={name}
						alt={name}
					/>
					<Box>
						<Tooltip title={name}>
							<Typography
								sx={{ fontSize: "16px", width: "200px" }}
								gutterBottom
								variant="h6"
								noWrap
							>
								{name}
							</Typography>
						</Tooltip>
						<TypographyTooltip
							icon={
								<LocationOn
									fontSize="small"
									color="info"
									sx={{ marginRight: "8px" }}
								/>
							}
							title={location}
						/>
						<TypographyTooltip
							icon={
								<Female
									fontSize="small"
									color="info"
									sx={{ marginRight: "8px" }}
								/>
							}
							title={gender}
						/>
						<TypographyTooltip
							icon={
								<Home
									fontSize="small"
									color="info"
									sx={{ marginRight: "8px" }}
								/>
							}
							title={origin}
						/>
						<TypographyTooltip
							icon={
								<Adb
									fontSize="small"
									color="info"
									sx={{ marginRight: "8px" }}
								/>
							}
							title={species}
						/>
					</Box>
				</Box>
			</Box>
		</Modal>
	);
};
