require('dotenv').config();

module.exports = {
    plugins: [
        // Tell gatsby which theme you will be using, because themes are also plugins
        {
            resolve: "gatsby-wordpress-theme-babykeks",
            options: {
                wordPressUrl: `${ process.env.SITE_URL }`
            }
        }
    ]
};