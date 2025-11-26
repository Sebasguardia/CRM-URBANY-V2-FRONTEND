export default function formatNumber(num) {
  return new Intl.NumberFormat("es-PE").format(num);
}
