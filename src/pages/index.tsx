import { GetStaticProps } from "next";
import { metaDescription, pageContent } from "types/layout";
import { MetaHead } from "components/metaHead";

export const getStaticProps: GetStaticProps = async () => {
	const res = await fetch(`${process.env.BASE_URL}/api/home`);
	const data = await res.json();
	const pageProps: PageProps = {
		content: data.content,
		metaDescription: data.metaDescription,
	};

	return {
		props: pageProps,
	};
};

interface PageProps {
	content: pageContent;
	metaDescription: metaDescription;
}

const HomePage = ({ content, metaDescription }: PageProps) => {
	return (
		<>
			<MetaHead meta={metaDescription} />
		</>
	);
};

export default HomePage;
