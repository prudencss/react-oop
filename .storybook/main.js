const path = require('path');

module.exports = {
	stories: ['../src/stories/*.stories.tsx'],
	addons: [
		'@storybook/preset-create-react-app',
		'@storybook/addon-actions/register',
		'@storybook/addon-links/register',
		'@storybook/addon-knobs/register',
		{
			name: '@storybook/addon-docs',
			options: {
				configureJSX: true,
				babelOptions: {},
				sourceLoaderOptions: null,
			},
		},
		{
			name: '@storybook/addon-storysource',
			options: {
				rule: {
					include: [path.resolve(__dirname, '../src')],
				},
				loaderOptions: {
					prettierConfig: {
						stylelintIntegration: true,
						useTabs: true,
						tabWidth: 2,
						trailingComma: 'all',
						singleQuote: true,
						semi: true,
						printWidth: 80,
						quoteProps: 'consistent',
						bracketSpacing: true,
						jsxBracketSameLine: false,
						arrowParens: 'avoid',
					},
				},
			},
		},
	],
};
