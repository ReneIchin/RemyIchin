// import { defineConfig } from 'astro/config';

// export default defineConfig({
//     site: 'https://RemyIchin.github.io',
//     // base:'https://reneichin.github.io/RemyIchin.github.io/',
//   });

import { defineConfig } from 'astro/config';

const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  site: isProduction ? 'https://reneichin.github.io/RemyIchin.github.io' : 'http://localhost:3000',
  base: isProduction ? '/RemyIchin.github.io/' : '/',
});