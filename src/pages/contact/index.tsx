import { GetStaticProps } from "next";
import Head from "next/head";
import { metaDescription, pageContent } from "types/layout";

export const getStaticProps: GetStaticProps = async () => {
	const res = await fetch(`${process.env.BASE_URL}/api/contact`);
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

const ContactPage = ({ content, metaDescription }: PageProps) => {
	return (
		<>
			<Head>
				<title>{metaDescription.pageTitle}</title>
			</Head>
			<section>
				<h1>{content.title}</h1>
				<details>
					<summary>test</summary>
					{content.content}
				</details>
			</section>
		</>
	);
};

export default ContactPage;
