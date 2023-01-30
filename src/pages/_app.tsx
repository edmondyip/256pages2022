import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { AppProps } from "next/app";
import { Router } from "next/router";
import { ThemeProvider } from "next-themes";
import { store } from "store/store";
import { AnimatePresence, domAnimation, LazyMotion, m } from "framer-motion";
import Layout from "./layout";
import "styles/reset.scss";
import "windi.css";
import "styles/global.scss";

interface PageAnimationProps {
	router: Router;
	children: JSX.Element;
}

const PageAnimation = ({ router, children }: PageAnimationProps) => {
	return (
		<LazyMotion features={domAnimation}>
			<AnimatePresence>
				<m.div
					key={router.route.concat("Fade Back")}
					className="page-wrap"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, position: "absolute" }}
					exit={{ opacity: 0, y: 200 }}
					transition={{ duration: 0.7 }}
				>
					{children}
				</m.div>
			</AnimatePresence>
		</LazyMotion>
	);
};

const app = ({ Component, pageProps, router }: AppProps) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [showing, setShowing] = useState(false);

	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(() => {
		setShowing(true);
	}, []);

	if (!showing) {
		return null;
	}

	if (typeof window === "undefined") {
		return <></>;
	} else {
		return (
			<ThemeProvider defaultTheme="dark">
				<Provider store={store}>
					<Layout router={router.pathname}>
						<PageAnimation router={router}>
							<Component {...pageProps} />
						</PageAnimation>
					</Layout>
				</Provider>
			</ThemeProvider>
		);
	}
};

export default app;
