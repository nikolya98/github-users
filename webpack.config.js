const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const SOURCE = path.resolve(__dirname, 'src');
const BUILD = path.resolve(__dirname, 'public');

/** Мап для матчинга расширений при обработке лоудерами зависимостей разных типов */
const RULES_REGEXP = {
  nodeModules: /node_modules/,
  scripts: /\.(t|j)sx?$/,
  styles: /\.scss$/,
  stylesModules: /\.module\.scss$/,
};

/** Функция для получения правила обработки файлов стилей */
const getStylesLoader = (withModules = false) => [
  'style-loader',
  {
    loader: 'css-loader',
    options: {
      modules: withModules && {
        localIdentName: '[name]__[local]__[hash:base64:5]',
      },
      importLoaders: 1,
    },
  },
  'sass-loader',
];

/** Функция для получения правил обработки зависимостей разных типов */
const getRules = () => [
  {
    test: RULES_REGEXP.scripts,
    use: ['babel-loader'],
    exclude: RULES_REGEXP.nodeModules,
  },
  {
    test: RULES_REGEXP.styles,
    use: getStylesLoader(),
    exclude: RULES_REGEXP.stylesModules,
  },
  {
    test: RULES_REGEXP.stylesModules,
    use: getStylesLoader(true),
  },
];

/** Расширения файлов, которые будут резолвиться при обращении через алиасы */
const ALIASES_EXTENSIONS = ['.js', '.ts', '.tsx', '.scss', '...'];

/** Алиасы для сокращения путей при импортах */
const ALIASES = ['pages', 'components', 'styles', 'types', 'config', 'utils'];

/** Функция, которая возвращает настройки резолвинга алиасов */
const getAliases = () => ({
  extensions: ALIASES_EXTENSIONS,
  alias: ALIASES.reduce((prev, alias) => ({ ...prev, [alias]: path.join(SOURCE, alias) }), {}),
});

/** Функция, которая вернёт настройки dev сервера */
const getDevServer = () => ({
  client: {
    overlay: false,
  },
  host: 'localhost',
  port: 3000,
  https: true,
  historyApiFallback: true,
  hot: true,
  open: true,
});

/** Функция. которая возвращает массив плагинов */
const getPlugins = () => [
  new HtmlWebpackPlugin({
    template: path.join(SOURCE, 'index.html'),
  }),
];

module.exports = {
  mode: process.env.NODE_ENV || 'production',
  entry: path.join(SOURCE, 'index.tsx'),
  output: {
    path: BUILD,
    filename: 'bundle.[contenthash:8].js',
    clean: true,
    compareBeforeEmit: true,
    publicPath: '/',
  },
  module: {
    rules: getRules(),
  },
  resolve: getAliases(),
  plugins: getPlugins(),
  devServer: getDevServer(),
};
