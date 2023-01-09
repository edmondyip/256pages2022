import Link from "next/link";

const Logo = () => {
	return (
		<div className="logo flex align-middle mt-2">
			<Link href={"/"}>
				<img src="logo.svg" width={60} alt="256pages" />
			</Link>
		</div>
	);
};

export default Logo;
