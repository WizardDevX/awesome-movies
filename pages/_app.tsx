import App from "next/app";
import {
	ThemeProvider,
	createGlobalStyle,
	DefaultTheme,
} from "styled-components";

const GlobalStyles = createGlobalStyle`
	html {
		box-sizing: border-box;
	}	


	*,
	*::before,
	*::after {
		margin: 0;
		padding: 0;
		box-sizing: inherit;
		font-family: sans-serif;
	}

	body {
		background-color: ${({ theme }) => theme.colors.primary};
	}

`;

const theme: DefaultTheme = {
	colors: {
		primary: "#2C2828",
		secondary1: "#3B2C85",
		secondary2: "#219897",
		terciary1: "#85CFCB",
		terciary2: "#212121",
		quarternary1: "#757575",
		quarternary2: "#BDBDBD",
	},
};

export default class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;

		return (
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<Component {...pageProps} />
			</ThemeProvider>
		);
	}
}
