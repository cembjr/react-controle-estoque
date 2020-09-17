declare global {
  interface Number {
    format(): string;
    formatMoeda(): string;
  }
}
// eslint-disable-next-line no-extend-native
Number.prototype.format = function () {
  const number = this;
  var ret = Number(number.toFixed(2)).toLocaleString("pt-br");
  ret = !!ret.split(",")[1] ? ret : `${ret},00`;
  return ret;
};

// eslint-disable-next-line no-extend-native
Number.prototype.formatMoeda = function () {
    const number = this;
    var ret = Number(number.toFixed(2)).toLocaleString("pt-br");
    ret = !!ret.split(",")[1] ? ret : `${ret},00`;
    return `R$ ${ret}`;
  };
export {};
