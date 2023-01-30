import { outfit } from "styles/fonts";
interface copyrightProps {
	copy?: string;
}

const Copyright = ({ copy }: copyrightProps) => {
	return (
		<div className={`fixed bottom-2 right-2 text-xs whitespace-nowrap ${outfit.className}`}>
			{copy} &copy; 2023
		</div>
	);
};

export default Copyright;
