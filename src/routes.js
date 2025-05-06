import { Router } from "express";
import customers from "./app/controllers/CustomersController";

const routes = new Router();
routes.get("/customers", customers.getAll);
routes.get("/customers/:id", customers.getOne);
routes.post("/customers", customers.create);
routes.put("/customers/:id", customers.update);
routes.delete("/customers/:id", customers.delete);

export default routes;
