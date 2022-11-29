import { PageNavigator } from "../components/navigator";
import { fetchLayout } from "../services/fetch";

interface IProps {
	children: React.ReactNode;
}

export default async ({ children }: IProps) => {
  const data = await fetchLayout();
  console.log("data", data);
  
	return (
		<html lang="en">
			<body>
				<header>
					{/* <PageNavigator data={data} /> */}
				</header>
				{children}
				<footer></footer>
			</body>
		</html>
	);
};
