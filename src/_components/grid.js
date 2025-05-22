import Feature from './feature.js';
import Teaser from './teaser.js';

function Grid(blok) {
	return `<div class="grid">
      ${blok.columns
				.map((nestedBlok) => {
					switch (nestedBlok.component) {
						case 'feature':
							return Feature(nestedBlok);
						case 'teaser':
							return Teaser(nestedBlok);
						default:
							throw new Error(
								`Grid could not resolve ${nestedBlok.component}.`,
							);
					}
				})
				.join('')}
    </div>`;
}

export default Grid;
