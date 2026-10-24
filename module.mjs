// @ts-check
import { module } from "@prisma/composer";
import apiServerService from "./artifacts/api-server/service.mjs";
import authscopeService from "./artifacts/authscope/service.mjs";

export default module("authscope-security-lab", ({ provision }) => {
  provision(apiServerService, { id: "apiserver" });
  provision(authscopeService);
});
