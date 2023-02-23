import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export const Navbar = () => {
	return (
		<Box sx={{ flexGrow: 1, marginBottom: "12px", position: "sticky", top: 0 }}>
			<AppBar position="static">
				<Toolbar>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
					>
						Rick and Morty
					</Typography>
				</Toolbar>
			</AppBar>
		</Box>
	);
};
