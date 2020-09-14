import React, { FC } from "react";
import Head from "next/head";

type Title = {
	title?: string;
};

const Layout: FC<Title> = ({ children, title = "Movie App" }) => {
	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<title>{title}</title>
			</Head>
			{children}
		</>
	);
};

export default Layout;
