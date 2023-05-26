// 判断是否是数值
export function isRealNum(val: any) {
  // isNaN()函数 把空串 空格 以及NUll 按照0来处理 所以先去除，
  if (val === "" || val == null) {
    return false;
  }
  return !isNaN(val);
}

// 判断是否为空值
export function isEmpty(val: any) {
  return ["", null, undefined].some((i) => i === val);
}
