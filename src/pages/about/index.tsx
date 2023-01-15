import BackgroundTitle from "components/backgroundTitle";
import { MetaHead } from "components/metaHead";
import { GetStaticProps } from "next";
import { metaDescription, pageContent } from "types/layout";

export const getStaticProps: GetStaticProps = async () => {
	const res = await fetch(`${process.env.BASE_URL}/api/about`);
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

const AboutPage = ({ content, metaDescription }: PageProps) => {
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

export default AboutPage;
