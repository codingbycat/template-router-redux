import path from 'path';

const resolve = (dir: string) => path.resolve(__dirname, dir);

const cracoConfig = {
  webpack: {
    alias: {
      '@': resolve('src'),
      api: resolve('src/api'),
      router: resolve('src/router'),
      components: resolve('src/components'),
      pages: resolve('src/pages'),
      store: resolve('src/store')
    }
  }
};

export default cracoConfig;
