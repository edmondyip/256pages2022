import { useState } from "react";
import { Provider } from "react-redux";
import { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { store } from "store/store";
import { AnimatePresence, domAnimation, LazyMotion, m } from "framer-motion";
import Layout from "./layout";
import "styles/reset.scss";
import "windi.css";
import "styles/global.scss";

const app = ({ Component, pageProps, router }: AppProps) => {
	const fadeBack = {
		name: "Fade Back",
		variants: {
			initial: {
				opacity: 0,
				// scale: 0.4
			},
			animate: {
				opacity: 1,
				scale: 1
			},
			exit: {
				opacity: 0,
				y: 200,
				// scale: 0.4
			}
		},
		transition: {
			duration: 0.7
		}
	};
	const [animation, setAnimation] = useState(fadeBack);

	return (
		<ThemeProvider>
			<Provider store={store}>
				<Layout router={router.pathname}>
					<LazyMotion features={domAnimation}>
						<AnimatePresence>
							<m.div key={router.route.concat(animation.name)}
							className="page-wrap"
							initial="initial"
							animate="animate"
							exit="exit"
							variants={animation.variants}
							transition={animation.transition}
							>
								<Component {...pageProps} />
							</m.div>
						</AnimatePresence>
					</LazyMotion>
				</Layout>
			</Provider>
		</ThemeProvider>
	);
};

export default app;
