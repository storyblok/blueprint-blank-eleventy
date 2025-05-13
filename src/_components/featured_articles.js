import { storyblokEditable } from '@storyblok/js';

function FeaturedArticles(blok) {
  const attrs = storyblokEditable(blok);

  return (
    `<section
      class="storyblok__outline"
      data-blok-uid="${attrs['data-blok-uid']}"
      data-blok-c="${attrs['data-blok-c']}"
     >
      <h2>Featured Articles</h2>
      <ul>
      ${blok.featured_articles.map((article) => {
        return (
          `<li>
            <a href="${article.full_slug}">${article.content.title}</a>
          </li>`
        );
      })}
      </ul>
    </section>`
  );
}

export default FeaturedArticles;
