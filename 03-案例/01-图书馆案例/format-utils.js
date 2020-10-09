function formatPrice(price, digits = 2) {

  if (typeof price !== "number" || typeof price !== "number") {
    price = Number(price) || 0
    digits = Number(digits) || 0
  }

  return "￥" + price.toFixed(digits)
}