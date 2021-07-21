import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core";
import path from "path";

export default {
  dbName: "messagelite",
  debug: !__prod__,
  type: "postgresql",
  entities: [Post],
  migrations: {
    // create an absolute path
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
} as Parameters<typeof MikroORM.init>[0];
// cast as const to access inner properties not just "string " with export default
// handling it above in a more advanced way where I know what the type of init's first paramater is
