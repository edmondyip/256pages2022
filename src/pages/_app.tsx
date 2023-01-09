import { AppProps } from "next/app";
import Layout from "./layout";
import { Provider } from "react-redux";
import { ThemeProvider } from "next-themes";
import { store } from "store/store";
import "styles/reset.scss";
import "windi.css";
import "styles/global.scss";

const app = ({ Component, pageProps }: AppProps) => {
	return (
		<ThemeProvider>
			<Provider store={store}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</Provider>
		</ThemeProvider>
	);
};

export default app;
