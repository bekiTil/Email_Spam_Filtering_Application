import { DefaultSeoProps } from "next-seo";

export const baseUrl = "https://gmail-clone-martstech.vercel.app";

export const defaultSEO: DefaultSeoProps = {
  title: "Gmail Filter",
  description:
    "Gmail is email that's intuitive, efficient, and useful. 15 GB of storage, less spam, and mobile access.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    site_name: "Email Filter ",
    images: [
      {
        
        url: `images/brand.png`,
        alt: "Email Filer",
      },
    ],
  },
};
