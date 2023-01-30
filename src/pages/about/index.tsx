// import { GetStaticProps } from "next";
// import Image from "next/image";
import Image from "components/Image"
// import { metaDescription, pageContent } from "types/layout";
import BackgroundTitle from "components/backgroundTitle";
import { MetaHead } from "components/metaHead";
import styles from "./about.module.scss";

// export const getStaticProps: GetStaticProps = async () => {
// 	const res = await fetch(`${process.env.BASE_URL}/api/about`);
// 	const data = await res.json();

// 	const pageProps: PageProps = {
// 		content: data.content,
// 		metaDescription: data.metaDescription,
// 	};

// 	return {
// 		props: pageProps,
// 	};
// };

// interface PageProps {
// 	content: Record<string, pageContent>;
// 	metaDescription: metaDescription;
// }

const AboutPage = () => {
	const data = {
		metaDescription: {
			pageTitle: "About - 256pages",
			pageDescription:
				"I am Edmond Yip. A Frontend Engineer 👨‍💻 base in Bristol 🇬🇧. Working with Typescript, React and Vue",
			canonicalUrl: "/about",
		},
		content: {
			about: {
				title: "about",
				content:
					"Hi, I am Edmond Yip, a Frontend Engineer 👨‍💻 base in Bristol 🇬🇧. Working with Typescript, React and Vue.",
			},
			location: {
				title: "location",
				content: "I living from Hong Kong 🇭🇰 to United Kingdom 🇬🇧",
			},
			position: {
				title: "position",
				content: "I working from Design 🎨 to Develop 💻",
			},
			framework: {
				title: "framework",
				content: "I learning from Vue to React",
			},
		},
	};

	return (
		<>
			<MetaHead meta={data.metaDescription} />
			<BackgroundTitle title="about" />
			<section className={`before:content-01 ${styles.about}`}>
				<h2>
					<span className={styles.function}>whoAmI</span>() &#123;
				</h2>
				<p>
					<span className={styles.return}>return</span> &quot;I am{" "}
					<span className={styles.code}>Edmond Yip</span>. A{" "}
					<span className={styles.code}>Frontend Engineer</span> 👨‍💻 base in{" "}
					<span className={styles.code}>Bristol 🇬🇧</span>. Working with{" "}
					<span className={styles.code}>Typescript, React and Vue</span>.&quot;
				</p>
				<div className={styles.code}>&#125; ;</div>
			</section>
			<section className={`before:content-02 ${styles.about}`}>
				<h2>
					<span className={styles.function}>geographicalLocation</span>() &#123;
				</h2>
				<p>
					<span className={styles.return}>return</span> &quot;Born and educated
					in <span className={styles.code}>Hong Kong 🇭🇰</span>. Relocated to the{" "}
					<span className={styles.code}>United Kingdom 🇬🇧</span> in 2022.&quot;
				</p>
				<div className={styles.code}>&#125; ;</div>
			</section>
			<section className={`before:content-03 ${styles.about}`}>
				<h2>
					<span className={styles.function}>careerPath</span>() &#123;
				</h2>

				<p>
					<span className={styles.return}>return</span> &quot;I change my career
					from a <span className={styles.code}>Web Designer 🎨</span> to{" "}
					<span className={styles.code}>Frontend Engineer 💻</span> at
					2017.&quot;
				</p>
				<div className={styles.code}>&#125; ;</div>
			</section>
			<section className={`before:content-04 ${styles.about}`}>
				<h2>
					<span className={styles.function}>techSkills</span>() &#123;
				</h2>
				<p>
					<span className={styles.function}>const</span>{" "}
					<span className={styles.code}>css</span> = &quot;Using{" "}
					<span className={styles.code}>
						SASS <Image height={22} width={22} alt="SASS" src="/img/sass.svg" />
					</span>{" "}
					to{" "}
					<span className={styles.code}>
						TailwindCSS{" "}
						<Image
							height={22}
							width={22}
							alt="TailwindCSS"
							src="/img/tailwindcss.svg"
						/>
					</span>
					.&quot;
				</p>
				<p>
					<span className={styles.function}>const</span>{" "}
					<span className={styles.code}>framework</span> = &quot;Learning with{" "}
					<span className={styles.code}>
						Vue <Image height={22} width={22} alt="Vue" src="/img/vue.svg" />{" "}
						and Nuxt{" "}
						<Image height={22} width={22} alt="Nuxt" src="/img/nuxt.svg" />
					</span>{" "}
					to Working with{" "}
					<span className={styles.code}>
						React{" "}
						<Image height={22} width={22} alt="React" src="/img/react.svg" />{" "}
						and Next
					</span>
					.&quot;
				</p>

				<p>
					<span className={styles.function}>const</span>{" "}
					<span className={styles.code}>language</span> = &quot;From using{" "}
					<span className={styles.code}>
						Javascript{" "}
						<Image
							height={22}
							width={22}
							alt="Javascript"
							src="/img/javascript.svg"
						/>
					</span>{" "}
					to using{" "}
					<span className={styles.code}>
						Typescript{" "}
						<Image
							height={22}
							width={22}
							alt="Typescript"
							src="/img/typescript.svg"
						/>
					</span>
					.&quot;
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
					<span className={styles.return}>return</span> &quot;
					<span className={styles.code}>Playing Video Game 🎮 </span> ,{" "}
					<span className={styles.code}>Taking Photo 📷 </span> &{" "}
					<span className={styles.code}>I ❤️ My Family 👨‍👩‍👧‍👧 </span>
					.&quot;
				</p>
				<div className={styles.code}>&#125; ;</div>
			</section>
		</>
	);
};

export default AboutPage;
