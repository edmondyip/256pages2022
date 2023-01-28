import { GetServerSideProps } from "next";
import { metaDescription, pageContent } from "types/layout";
import { MetaHead } from "components/metaHead";
import BackgroundTitle from "components/backgroundTitle";
import { work } from "pages/api/works";
import styles from "./works.module.scss";
import { WorkListItem } from "./listItem";

export const getServerSideProps: GetServerSideProps = async () => {
	const res = await fetch(`${process.env.BASE_URL}/api/works`);
	const data = await res.json();
	const pageProps: PageProps = {
		content: data.content,
		metaDescription: data.metaDescription,
		works: data.works,
	};

	return {
		props: pageProps,
	};
};

interface PageProps {
	content: pageContent;
	metaDescription: metaDescription;
	works: work[];
}

const WorksPage = ({ content, metaDescription, works }: PageProps) => {
	return (
		<>
			<MetaHead meta={metaDescription} />
			<BackgroundTitle title={content.title} />
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
					<WorkListItem works={works} />
				</ul>
			</section>
		</>
	);
};

export default WorksPage;
