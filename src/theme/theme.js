
import { Button } from "@mui/material";
import { styled, createTheme, responsiveFontSizes } from "@mui/material/styles"


export const theme = responsiveFontSizes(createTheme({
    palette: {
        primary: {
            main: "#5133D5"

        },
        secondary: {
            main: "#CB3694"
        },
        common: {
            main: "#31303E"
        },
        background: {
            default: "#07040F",
            paper: "#31303E",
            card: "#16182D"
        },
        text: {
            main: "#FFFFFF"
        }
    },
    shape: {
        borderRadius: "48px"
    },
    typography: {

        fontFamily: ["Syne ", "Poppins"].join(","),
        allVariants: {
            color: "white"
        },
        p: {
            fontFamily: "Poppins"
        }

    },



}))

export const CButton = styled(Button)(({ theme, pd = 1, m = 0 }) => ({
    color: theme.palette.text.main,
    backgroundColor: theme.palette.common.main,
    padding: theme.spacing(pd),
    borderRadius: theme.shape.borderRadius,
    margin: m,
    fontWeight: 700,


}));