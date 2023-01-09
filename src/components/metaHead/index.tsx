import Head from "next/head";
import { metaDescription } from "types/layout";
import { useTheme } from "next-themes";

interface metaData {
	meta: metaDescription;
}

export const MetaHead = (metaData: metaData) => {
	const { resolvedTheme } = useTheme();
	const path = resolvedTheme ?? "light";
	const meta = metaData.meta;

	return (
		<Head>
			<title>{meta.pageTitle}</title>
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<meta
				name="description"
				content={meta.pageDescription}
				key="description"
			/>
			<meta property="og:title" content={meta.pageTitle} key="title" />
			<meta property="og:description" content={meta.pageDescription} />
			<meta property="og:locale" content="en_US" />
			<meta property="og:url" content={meta.canonicalUrl} />
			{meta.previewImage && (
				<meta property="og:image" content={meta.previewImage} />
			)}
			<link rel="canonical" href={meta.canonicalUrl} />
			<link rel="icon" href="favicon.svg" type="image/svg+xml" />

			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href={`${path}/apple-touch-icon.png`}
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href={`${path}/favicon-32x32.png`}
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href={`${path}/favicon-16x16.png`}
			/>
			<link rel="manifest" href={`${path}/site.webmanifest`} />
			<link
				rel="mask-icon"
				href={`${path}/safari-pinned-tab.svg`}
				color="#ffc600"
			/>
			<meta name="msapplication-TileColor" content="#ffc40d" />
			<meta name="theme-color" content="#ffffff" />
		</Head>
	);
};
