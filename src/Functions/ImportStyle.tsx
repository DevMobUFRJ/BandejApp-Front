export default function ImportStyle(styleMobile: any, styleWeb: any) {
  const style = window.innerWidth/window.innerHeight <= 1 ? styleMobile : styleWeb;
  return style;
}