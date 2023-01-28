import BackgroundTitle from "components/backgroundTitle";
import { MetaHead } from "components/metaHead";
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
			<MetaHead meta={metaDescription} />
			<BackgroundTitle title="contact" />
			<section>
				<p>{content.content}</p>
				<p>Email: <a className="text-yellow-400" href="mailto:neta.edmond@gmail.com">neta.edmond@gmail.com</a></p>
			</section>
		</>
	);
};

export default ContactPage;
