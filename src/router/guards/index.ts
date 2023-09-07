import { Router } from "vue-router";
import { permissionGuard } from "./permission";
import { titleGuard } from "./title";

export function registerGuards(router: Router) {
  const beforeGuards = [titleGuard, permissionGuard];
  const afterGuards: any[] = [];
  beforeGuards.forEach((guard) => router.beforeEach(guard));
  afterGuards.forEach((guard) => router.beforeEach(guard));
}
