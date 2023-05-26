import strictFetch from "@/http";
import qs from "qs";

interface Login {
  username: string;
  password: string;
}
// 登录
export async function login({ username, password }: Login) {
  return strictFetch({
    url: "/login",
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
    },
    data: qs.stringify({
      username,
      password,
    }),
  });
}
