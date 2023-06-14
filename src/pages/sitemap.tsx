import { MetadataRoute } from 'next'

const baseURI = "https://clinicannabis.com.co";

const sitemap = (): MetadataRoute.Sitemap => [
    {
        url: baseURI,
    },
    {
        url: `${baseURI}/services`,
    },
    {
        url: `${baseURI}/contact`,
    },
    {
        url: `${baseURI}/blog`,
    },
    {
        url: `${baseURI}/seminario/seminario-iberoamericano`,
    },
];
export default sitemap