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
	content: Record<string, pageContent>;
	metaDescription: metaDescription;
}

const AboutPage = ({ content, metaDescription }: PageProps) => {
	return (
		<>
			<MetaHead meta={metaDescription} />
			<BackgroundTitle title="about" />
			<section className="before:content-01">
				<h2>
					<span className="text-blue-600">whoAmI</span>() &#123;
				</h2>
				<p>
					<span className="text-pink-400">return</span> "I am{" "}
					<span className="text-orange-300">Edmond Yip</span>. A{" "}
					<span className="text-orange-300">Frontend Engineer</span> 👨‍💻 base in{" "}
					<span className="text-orange-300">Bristol 🇬🇧</span>. Working with{" "}
					<span className="text-orange-300">Typescript, React and Vue</span>."
				</p>
				<div className="text-yellow-400 text-size-3xl">&#125; ;</div>
			</section>
			<section className="before:content-02">
				<h2>
					<span className="text-blue-600">geographicalLocation</span>() &#123;
				</h2>
				<p>
					<span className="text-pink-400">return</span> "Born and educated in{" "}
					<span className="text-orange-300">Hong Kong 🇭🇰</span>. Relocated to
					the <span className="text-orange-300">United Kingdom 🇬🇧</span> in
					2022."
				</p>
				<div className="text-yellow-400 text-size-3xl">&#125; ;</div>
			</section>
			<section className="before:content-03">
				<h2>
					<span className="text-blue-600">careerPath</span>() &#123;
				</h2>

				<p>
					<span className="text-pink-400">return</span> "I change my career from
					a <span className="text-orange-300">Web Designer 🎨</span> to{" "}
					<span className="text-orange-300">Frontend Engineer 💻</span> at
					2017."
				</p>
				<div className="text-yellow-400 text-size-3xl">&#125; ;</div>
			</section>
			<section className="before:content-04">
				<h2>
					<span className="text-blue-600">techSkills</span>() &#123;
				</h2>
				<p>
					<span className="text-blue-600">const</span>{" "}
					<span className="text-orange-300">css</span> = "Using{" "}
					<span className="text-orange-300">
						SASS <img width={22} src="/img/sass.svg" />
					</span>{" "}
					to{" "}
					<span className="text-orange-300">
						TailwindCSS <img width={22} src="/img/tailwindcss.svg" />
					</span>
					."
				</p>
				<p>
					<span className="text-blue-600">const</span>{" "}
					<span className="text-orange-300">framework</span> = "Learning with{" "}
					<span className="text-orange-300">
						Vue <img width={22} src="/img/vue.svg" /> and Nuxt{" "}
						<img width={22} src="/img/nuxt.svg" />
					</span>{" "}
					to Working with{" "}
					<span className="text-orange-300">
						React <img width={22} src="/img/react.svg" /> and Next
					</span>
					."
				</p>

				<p>
					<span className="text-blue-600">const</span>{" "}
					<span className="text-orange-300">language</span> = "From using{" "}
					<span className="text-orange-300">
						Javascript <img width={22} src="/img/javascript.svg" />
					</span>{" "}
					to using{" "}
					<span className="text-orange-300">
						Typescript <img width={22} src="/img/typescript.svg" />
					</span>
					."
				</p>

				<p>
					<span className="text-blue-600">const</span>{" "}
					<span className="text-orange-300">others</span> = &#91;
					<span className="text-orange-300">"Git"</span>,
					<span className="text-orange-300">"Node"</span>,
					<span className="text-orange-300">"Express"</span>,
					<span className="text-orange-300">"Nginx"</span>,
					<span className="text-orange-300">"Docker"</span>,
					<span className="text-orange-300">"Webpack"</span>,
					<span className="text-orange-300">"Threejs"</span>,
					<span className="text-orange-300">"Jest"</span>
					&#93;
				</p>
				<p>
					<span className="text-pink-400">return</span> &#123; css, framework,
					language, others &#125;
				</p>
				<div className="text-yellow-400 text-size-3xl">&#125; ;</div>
			</section>
			<section className="before:content-05">
				<h2>
					<span className="text-blue-600">interest</span>() &#123;
				</h2>
				<p>
					<span className="text-pink-400">return</span> "
					<span className="text-orange-300">Playing Video Game 🎮 </span> ,{" "}
					<span className="text-orange-300">Taking Photo 📷 </span> &{" "}
					<span className="text-orange-300">I ❤️ My Family 👨‍👩‍👧‍👧 </span>
					."
				</p>
				<div className="text-yellow-400 text-size-3xl">&#125; ;</div>
			</section>
		</>
	);
};

export default AboutPage;
