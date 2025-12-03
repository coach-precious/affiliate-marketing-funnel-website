import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("master-class", "routes/master-class.tsx"),
  route("yes-or-no", "routes/yes-or-no.tsx"),
  route("tiktok", "routes/tiktok.tsx"),
] satisfies RouteConfig;
