import { MetadataRoute } from 'next';

const baseURI = "https://clinicannabis.com.co";

const sitemap = (): MetadataRoute.Sitemap => [
    {
        url: baseURI,
    },
    {
        url: `${baseURI}/servicios`,
    },
    {
        url: `${baseURI}/contacto`,
    },
    {
        url: `${baseURI}/blog`,
    },
    {
        url: `${baseURI}/testimonios`,
    },
    {
        url: `${baseURI}/servicios/clinica-del-dolor`,
    },
];
export default sitemap