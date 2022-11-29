interface IProps {
	children: React.ReactNode;
}

export default ({ children }: IProps) => {
	return <main>{children}</main>;
};
