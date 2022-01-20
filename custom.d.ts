declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
  export { content as ReactComponent };
}

declare module "*.json" {
  const value: any;
  export default value;
}
