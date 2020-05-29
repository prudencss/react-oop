import { create } from '@storybook/theming/create';
import rgb2hex from 'rgb2hex';

export default create({
	base: 'dark',

	colorPrimary: rgb2hex('rgb(255, 236, 179)').hex,
	colorSecondary: rgb2hex('rgb(225, 190, 231)').hex,

	// UI
	appBg: rgb2hex('rgb(0, 96, 100)').hex,
	appContentBg: rgb2hex('rgb(0, 77, 80)').hex,
	appBorderColor: rgb2hex('rgb(196, 62, 0)').hex,
	appBorderRadius: 4,

	// Typography
	fontBase: '"Alegreya Sans", sans',
	fontCode: 'monospace',

	// Text colors
	textColor: 'ivory',
	textInverseColor: rgb2hex('rgb(14, 0, 75)').hex,

	// Toolbar default and active colors
	barTextColor: 'silver',
	barSelectedColor: rgb2hex('rgb(14, 0, 75)').hex,
	barBg: rgb2hex('rgb(255, 236, 179)').hex,

	// Form colors
	inputBg: 'ivory',
	inputBorder: 'silver',
	inputTextColor: rgb2hex('rgb(14, 0, 75)').hex,
	inputBorderRadius: 4,

	brandTitle: 'Prudencss React FP/JS Storybook',
	brandUrl: 'https://prudencss.github.com/react-js-fp',
	brandImage: 'https://avatars1.githubusercontent.com/u/63896301?s=200&v=4',
});
