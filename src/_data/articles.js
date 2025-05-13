import storyblok from '../_utils/storyblok.js';
import { richTextResolver } from '@storyblok/richtext';

const { render } = richTextResolver();

export default async function pages() {
  const response = await storyblok.getAll('cdn/stories', {
    version: 'draft', // or "published"
    starts_with: 'articles',
    content_type: 'article',
  });

  return response.map((story) => {
    const permalink = `/${story.full_slug}/`;
    const title = story.content.title;
    const content = render(story.content.content);

    return {
      permalink,
      title,
      content,
    };
  });
}
