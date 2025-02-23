import { createTheme } from "@mui/system";

const pxToRem = (size: number) => `${size / 16}rem`;

export const theme = createTheme({
	direction: "rtl",
	typography: {
		fontFamily: "'Yekan Bakh FaNum', sans-serif",
		body1: {
			fontSize: pxToRem(16),
		},
	}
});