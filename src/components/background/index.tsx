import Index3d from "components/indexTitle";

interface BackgroundProps {
	path: string;
}

const Background = ({ path }: BackgroundProps) => {
	return path === "/" ? <Index3d /> : null;
};

export default Background;
