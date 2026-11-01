module.exports = function (eleventyConfig) {

  // Copy theses files without processing.
  eleventyConfig.addPassthroughCopy('src/assets');
  eleventyConfig.addPassthroughCopy('src/BingSiteAuth.xml');
  eleventyConfig.addPassthroughCopy('src/google66739705c82e4bdc.html');

  // ignore the _drafts directory
  eleventyConfig.ignores.add("src/_drafts/**");

  eleventyConfig.addGlobalData("eleventyComputed.permalink", function () {
    return (data) => {
      if (!data.tags || !data.tags.includes("posts")) {
        return data.permalink;
      }

      const date = new Date(data.page.date);

      const year = date.getUTCFullYear();
      const month = String(date.getUTCMonth() + 1).padStart(2, "0");
      const day = String(date.getUTCDate()).padStart(2, "0");

      const slug = data.page.fileSlug.replace(/^\d{4}-\d{2}-\d{2}-/, "");

      return `/articles/${year}/${month}/${day}/${slug}/`;
    };
  });

  eleventyConfig.addLiquidFilter("absoluteUrl", function (url) {
    const siteUrl = "https://jaredsartblog.net";
    return new URL(url, siteUrl).href;
  });



  // Set cutom directories
  return {
    dir: {
      input: "src",
      includes: "_templates",
      data: "_data",
      output: "_site"
    }
  }
}
