import { GetServerSideProps } from "next";
import { metaDescription, pageContent } from "types/layout";
import { MetaHead } from "components/metaHead";
import BackgroundTitle from "components/backgroundTitle";

export const getServerSideProps: GetServerSideProps = async () => {
	const res = await fetch(`${process.env.BASE_URL}/api/case`);
	const data = await res.json();
	const pageProps: PageProps = {
		content: data.content,
		metaDescription: data.metaDescription,
		projects: data.projects,
	};

	return {
		props: pageProps,
	};
};

interface PageProps {
	content: pageContent;
	metaDescription: metaDescription;
	projects: string[];
}

const CasePage = ({ content, metaDescription }: PageProps) => {
	return (
		<>
			<MetaHead meta={metaDescription} />
				<BackgroundTitle title={content.title} />
			<section>
				<p>{content.content}</p>
			</section>
		</>
	);
};

export default CasePage;
