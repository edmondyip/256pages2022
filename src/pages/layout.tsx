import { useRouter } from "next/router";
// import { useGetLayoutQuery } from "store/feature/layout/layoutApi";
import Copyright from "components/copyright";
import Background from "components/background";
import PageHeader from "components/PageHeader";
import { firaCode, bigShouldersDisplay, oswald, outfit } from "styles/fonts";

interface IProps {
	children: JSX.Element;
	router: string;
}

const Layout = ({ children, router }: IProps) => {
	const { pathname } = useRouter();
	// const { data, isLoading, error } = useGetLayoutQuery();
	// error && console.log(error);
	const data = {
		nav: [
      {
        label: "About",
        path: "/about"
      },
      {
        label: "Works",
        path: "/works"
      },
      {
        label: "Contact",
        path: "/contact",
      },
      {
        label: "Blog",
        path: "https://blog.256pages.com"
      }
		],
		header: "header",
		copyright: "256PAGES",
	}

	return (
		<div
			className={`layout ${router === "/" ? "index" : ""} ${
				bigShouldersDisplay.variable
			} ${firaCode.variable} ${oswald.variable} ${outfit.variable}`}
		>
			{/* {isLoading ? <>loading</> : null} */}
			<PageHeader nav={data?.nav} path={pathname} />
			<main>{children}</main>
			<Background path={pathname} />
			<footer>
				<Copyright copy={data?.copyright} />
			</footer>
		</div>
	);
};

export default Layout;
