import Stack from "@mui/material/Stack"
import { IconButton } from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"

export default function App4() {
    return (
        <Stack direction="row" alignItems="center" spacing={1}>
            <DeleteIcon color="primary" fontSize="large" sx={{ color: "red"}}></DeleteIcon>
            <IconButton size="large" color="blue">
                <DeleteIcon fontSize="small"></DeleteIcon>
            </IconButton>
        </Stack>
    )
}