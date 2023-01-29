import Logo from "components/logo";
import { PageNavigator } from "components/navigator";
import Hamburger from "hamburger-react";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { navItem } from "types/layout";

const ThemeSwitch = dynamic(() => import("components/themeSwitch"), {
	ssr: false,
});

interface PageHeaderProps {
	nav?: navItem[];
	path: string;
}

const PageHeader = ({ nav, path }: PageHeaderProps) => {
	const [openNav, setOpenNav] = useState(false);
	useEffect(() => {
		setOpenNav(false);
	}, [path]);

	return (
		<header className={openNav ? "open" : ""}>
			<Hamburger
				size={20}
				toggled={openNav}
				toggle={setOpenNav}
				onToggle={(toggle) => {
					toggle ? setOpenNav(true) : setOpenNav(false);
				}}
			/>
			<Logo />
			{nav ? <PageNavigator openNav={openNav} nav={nav} /> : null}
			<ThemeSwitch />
		</header>
	);
};

export default PageHeader;
