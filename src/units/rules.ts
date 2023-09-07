// 邮箱校验
export function IsEmail(str: string) {
  return /^\w+((\.\w+){0,3})+@[a-z0-9]+\.[a-z]{2,4}$/.test(str);
}
// 手机号校验
export function phoneRules(value: string) {
  return /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/.test(
    value,
  );
}

// 密码校验
export function passwordRules(value: string) {
  // 必须包含大小写字母、数字、特殊字符长度再9-16位之间
  return /^.*(?=.{8,16})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/.test(
    value,
  );
}
