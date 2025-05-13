import storyblok from '../_utils/storyblok.js';
import Feature from '../_components/feature.js'
import Teaser from '../_components/teaser.js'
import Grid from '../_components/grid.js'
import FeaturedArticles from '../_components/featured_articles.js'

export default async function pages() {
  const response = await storyblok.getAll('cdn/stories', {
    version: 'draft', // or "published"
    content_type: 'page',
    resolve_relations: "featured-articles.featured_articles"
  });
  
  return response.map(story => {
    const permalink = story.slug === 'home' ? '/' : `/${story.full_slug}/`;
    const name = story.name;
    const body = story.content.body
      .map(blok => {
        switch (blok.component) {
          case 'feature':
            return Feature(blok);
          case 'teaser':
            return Teaser(blok);
          case 'grid':
            return Grid(blok);
          case 'featured-articles':
            return FeaturedArticles(blok);
          default:
            throw new Error(`Could not resolve ${blok.component} block.`);
        }
      })
      .join('');
    
    return {
      permalink,
      name,
      body,
    };
  })
}
