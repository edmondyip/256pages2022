import { GetServerSideProps } from "next";
import { metaDescription, pageContent } from "types/layout";
import { MetaHead } from "components/metaHead";
import BackgroundTitle from "components/backgroundTitle";
import Link from "next/link";

export const getServerSideProps: GetServerSideProps = async () => {
	const res = await fetch(`${process.env.BASE_URL}/api/works`);
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

const WorksPage = ({ content, metaDescription }: PageProps) => {
	return (
		<>
			<MetaHead meta={metaDescription} />
				<BackgroundTitle title={content.title} />
			<section>
				<p>{content.content}</p>
				<Link href={"/works/works01"}>01</Link>
			</section>
		</>
	);
};

export default WorksPage;
