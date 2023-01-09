export interface navItem {
	label: string;
	path: string;
}

export interface layout {
	nav: navItem[];
	header: string;
	footer: string;
}

export interface pageContent {
	title: string;
	content: string;
}

export interface metaDescription {
	pageTitle: string;
	pageDescription: string;
	canonicalUrl: string;
	previewImage?: string;
}

