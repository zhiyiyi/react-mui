import { Button, createTheme, Paper,
ThemeProvider, Typography, CssBaseline } from "@mui/material";
import { orange, pink, red } from "@mui/material/colors";

export default function App3() {
    const theme = createTheme({
        spacing: 1,
        palette: {
            mode: "dark",
            primary: {
                main: orange[500]
            },
            customRibRed: {
                main: red[400],
                superDark: red[800],
                superLight: red[100]
            },
            typography: {
                myVariant: {
                    fontSize: "10rem"
                }
            }
        }
    })

    const theme2 = createTheme({
        palette: {
            mode: "light",
            primary: {
                main: pink[500]
            }
        }
    })

    return (
        <ThemeProvider theme={theme}>
            {/* <CssBaseline /> */}
            <Paper>
                <Typography variant="h3">Theming Example</Typography>
                <Typography
                variant="myVariant" sx={{ color: 'customRibRed.superDark', m: 3}}>Hello Zhiyi</Typography>
                <h3>Start editing</h3>
                <ThemeProvider theme={theme2}>
                    <Button variant="contained" color="secondary">hi</Button>
                </ThemeProvider>
            </Paper>
        </ThemeProvider>

    )
}