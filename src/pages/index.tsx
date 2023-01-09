import { GetStaticProps } from "next";
import { metaDescription, pageContent } from "types/layout";
import { MetaHead } from "components/metaHead";
import Index3d from "components/indexTitle";

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
			<Index3d />
		</>
	);
};

export default HomePage;
