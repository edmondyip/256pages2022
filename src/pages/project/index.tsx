import { GetServerSideProps } from "next";
import { metaDescription, pageContent } from "types/layout";

export const getServerSideProps: GetServerSideProps = async () => {
	const res = await fetch(`${process.env.BASE_URL}/api/project`);
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

const ProjectPage = ({ content, metaDescription, projects }: PageProps) => {
	return (
		<section>
			<h1>{content.title}</h1>
			<div>{content.content}</div>
		</section>
	);
};

export default ProjectPage;
