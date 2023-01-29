import BackgroundTitle from "components/backgroundTitle";
import { MetaHead } from "components/metaHead";
import { GetStaticProps } from "next";
import { metaDescription, pageContent } from "types/layout";
import styles from "./about.module.scss";

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
	content: Record<string, pageContent>;
	metaDescription: metaDescription;
}

const AboutPage = ({ content, metaDescription }: PageProps) => {
	return (
		<>
			<MetaHead meta={metaDescription} />
			<BackgroundTitle title="about" />
			<section className={`before:content-01 ${styles.about}`}>
				<h2>
					<span className={styles.function}>whoAmI</span>() &#123;
				</h2>
				<p>
					<span className={styles.return}>return</span> "I am{" "}
					<span className={styles.code}>Edmond Yip</span>. A{" "}
					<span className={styles.code}>Frontend Engineer</span> 👨‍💻 base in{" "}
					<span className={styles.code}>Bristol 🇬🇧</span>. Working with{" "}
					<span className={styles.code}>Typescript, React and Vue</span>."
				</p>
				<div className={styles.code}>&#125; ;</div>
			</section>
			<section className={`before:content-02 ${styles.about}`}>
				<h2>
					<span className={styles.function}>geographicalLocation</span>() &#123;
				</h2>
				<p>
					<span className={styles.return}>return</span> "Born and educated in{" "}
					<span className={styles.code}>Hong Kong 🇭🇰</span>. Relocated to the{" "}
					<span className={styles.code}>United Kingdom 🇬🇧</span> in 2022."
				</p>
				<div className={styles.code}>&#125; ;</div>
			</section>
			<section className={`before:content-03 ${styles.about}`}>
				<h2>
					<span className={styles.function}>careerPath</span>() &#123;
				</h2>

				<p>
					<span className={styles.return}>return</span> "I change my career from
					a <span className={styles.code}>Web Designer 🎨</span> to{" "}
					<span className={styles.code}>Frontend Engineer 💻</span> at 2017."
				</p>
				<div className={styles.code}>&#125; ;</div>
			</section>
			<section className={`before:content-04 ${styles.about}`}>
				<h2>
					<span className={styles.function}>techSkills</span>() &#123;
				</h2>
				<p>
					<span className={styles.function}>const</span>{" "}
					<span className={styles.code}>css</span> = "Using{" "}
					<span className={styles.code}>
						SASS <img width={22} src="/img/sass.svg" />
					</span>{" "}
					to{" "}
					<span className={styles.code}>
						TailwindCSS <img width={22} src="/img/tailwindcss.svg" />
					</span>
					."
				</p>
				<p>
					<span className={styles.function}>const</span>{" "}
					<span className={styles.code}>framework</span> = "Learning with{" "}
					<span className={styles.code}>
						Vue <img width={22} src="/img/vue.svg" /> and Nuxt{" "}
						<img width={22} src="/img/nuxt.svg" />
					</span>{" "}
					to Working with{" "}
					<span className={styles.code}>
						React <img width={22} src="/img/react.svg" /> and Next
					</span>
					."
				</p>

				<p>
					<span className={styles.function}>const</span>{" "}
					<span className={styles.code}>language</span> = "From using{" "}
					<span className={styles.code}>
						Javascript <img width={22} src="/img/javascript.svg" />
					</span>{" "}
					to using{" "}
					<span className={styles.code}>
						Typescript <img width={22} src="/img/typescript.svg" />
					</span>
					."
				</p>

				<p>
					<span className={styles.function}>const</span>{" "}
					<span className={styles.code}>others</span> = &#91;
					<span className={styles.code}>&quot;Git&quot;</span>,
					<span className={styles.code}>&quot;Node&quot;</span>,
					<span className={styles.code}>&quot;Express&quot;</span>,
					<span className={styles.code}>&quot;Nginx&quot;</span>,
					<span className={styles.code}>&quot;Docker&quot;</span>,
					<span className={styles.code}>&quot;Webpack&quot;</span>,
					<span className={styles.code}>&quot;Threejs&quot;</span>,
					<span className={styles.code}>&quot;Jest&quot;</span>
					&#93;
				</p>
				<p>
					<span className={styles.return}>return</span> &#123; css, framework,
					<div className={styles.code}>&#125; ;</div>
				</p>
				<div className={styles.function}>&#125; ;</div>
			</section>
			<section className={`before:content-05 ${styles.about}`}>
				<h2>
					<span className={styles.function}>interest</span>() &#123;
				</h2>
				<p>
					<span className={styles.return}>return</span> "
					<span className={styles.code}>Playing Video Game 🎮 </span> ,{" "}
					<span className={styles.code}>Taking Photo 📷 </span> &{" "}
					<span className={styles.code}>I ❤️ My Family 👨‍👩‍👧‍👧 </span>
					."
				</p>
				<div className={styles.code}>&#125; ;</div>
			</section>
		</>
	);
};

export default AboutPage;
