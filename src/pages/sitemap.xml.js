const EXTERNAL_DATA_URL = 'https://clinicannabis.com.co/blog';

function generateSiteMap(blogs) {
    return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://clinicannabis.com.co</loc>
       <priority>1.0</priority>
     </url>
     <url>
       <loc>https://clinicannabis.com.co/services</loc>
       <priority>0.9</priority>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}</loc>
       <priority>0.7</priority>
       <changefreq>daily</changefreq>
     </url>
     ${blogs
        .map(({slug}) => {
            return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}/${slug}`}</loc>
           <priority>0.6</priority>
       </url>
     `;
        })
        .join('')}
     <url>
       <loc>https://clinicannabis.com.co/contact</loc>
       <priority>0.8</priority>
     </url>
     <url>
       <loc>https://clinicannabis.com.co/seminario/seminario-iberoamericano</loc>
       <priority>1.0</priority>
     </url>
     <url>
       <loc>https://clinicannabis.com.co/legal</loc>
       <priority>0.3</priority>
     </url>
   </urlset>
 `;
}

function SiteMap() {
    // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({res}) {
    // We make an API call to gather the URLs for our site
    const request = await fetch(EXTERNAL_DATA_URL);
    const posts = await request.json();

    // We generate the XML sitemap with the posts data
    const sitemap = generateSiteMap(posts);

    res.setHeader('Content-Type', 'text/xml');
    // we send the XML to the browser
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
}

export default SiteMap;