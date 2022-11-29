import Link from "next/link";

interface IProps {
	label: string;
	path: string;
}

export const PageNavigatorItem = ({ label, path }: IProps) => {
	return <Link href={path}>{label}</Link>;
};
