// Workaround --isolatedModules issue in order to reexport interfaces as of https://github.com/facebook/create-react-app/issues/6054#issuecomment-447974467
export * from './Component';
export { default } from './Component';
