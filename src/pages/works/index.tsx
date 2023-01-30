import { GetStaticProps } from "next";
import { metaDescription, pageContent } from "types/layout";
import { work } from "pages/api/works";
import { MetaHead } from "components/metaHead";
import BackgroundTitle from "components/backgroundTitle";
import WorkListItem from "components/workItems";
import styles from "./works.module.scss";

// export const getStaticProps: GetStaticProps = async () => {
// 	const res = await fetch(`${process.env.BASE_URL}/api/works`);
// 	const data = await res.json();
// 	const pageProps: PageProps = {
// 		content: data.content,
// 		metaDescription: data.metaDescription,
// 		works: data.works,
// 	};

// 	return {
// 		props: pageProps,
// 	};
// };

// interface PageProps {
// 	content: pageContent;
// 	metaDescription: metaDescription;
// 	works: work[];
// }

const WorksPage = () => {
	const data = {
		content: {
			title: "works",
			content: "I developed over 100 websites in my career.",
		},
		metaDescription: {
			pageTitle: "works - 256pages",
			pageDescription: "See works by Edmond Yip",
			canonicalUrl: "/works",
		},
		works: [
			{
				name: "256pages",
				id: "256",
				cover: "/img/256pages.png",
				video: "video/256pages.mp4",
				url: "https://2017.256pages.com",
				shortDescription:
					"First personl website built by Javascript Framework.",
				description: "",
				techStack: "",
				personalGrowth: "",
				challenges: "",
			},
			{
				name: "Vistair System",
				id: "vistair",
				cover: "/img/vistair.png",
				video: "video/vistair.mp4",
				url: "",
				shortDescription:
					"A Risk Management System in a Aviation Safety Software",
				description: "",
				techStack: "",
				personalGrowth: "",
				challenges: "",
			},
		],
	};

	return (
		<>
			<MetaHead meta={data.metaDescription} />
			<BackgroundTitle title="works" />
			<section className={styles.works}>
				<h2>
					<span className={styles.function}>works</span>() &#123;
				</h2>
				<p>
					<span className={styles.return}>return</span> &quot;
					<span className={styles.code}>
						I create over 100 website in my career.
					</span>
					&quot;
				</p>
				<div className={styles.code}>&#125; ;</div>
			</section>
			<section className={styles.worksList}>
				<ul>
					<WorkListItem works={data.works} />
				</ul>
			</section>
		</>
	);
};

export default WorksPage;
