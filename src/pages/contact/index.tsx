// import { GetStaticProps } from "next";
// import { metaDescription, pageContent } from "types/layout";
import BackgroundTitle from "components/backgroundTitle";
import { MetaHead } from "components/metaHead";

// export const getStaticProps: GetStaticProps = async () => {
// 	const res = await fetch(`${process.env.BASE_URL}/api/contact`);
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
// 	content: pageContent;
// 	metaDescription: metaDescription;
// }

const ContactPage = () => {
	const data = {
		content: {
			title: "256pages",
			content: "Feel free to contact me if you have any idea want to realize.",
		},
		metaDescription: {
			pageTitle: "Contact Me",
			pageDescription:
				"Contact Edmond Yip when you have any idea want to realize.",
			canonicalUrl: "/contact",
		},
	};
	return (
		<>
			<MetaHead meta={data.metaDescription} />
			<BackgroundTitle title="contact" />
			<section>
				<p>{data.content.content}</p>
				<p>
					Email:{" "}
					<a className="text-yellow-400" href="mailto:neta.edmond@gmail.com">
						neta.edmond@gmail.com
					</a>
				</p>
			</section>
		</>
	);
};

export default ContactPage;
