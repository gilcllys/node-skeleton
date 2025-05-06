let customers = [
  { id: 1, name: "Dev Samurai", site: "https://devsamurai.com.br" },
  { id: 2, name: "Google", site: "https://google.com.br" },
  { id: 3, name: "UOL", site: "https://uol.com.br" },
];

class CustomersController {
  //listagem do resgistro
  getAll(req, res) {
    return res.json(customers);
  }
  // Recupera um registro
  getOne(req, res) {
    const id = parseInt(req.params.id);
    const customer = customers.find((customer) => customer.id === id);
    const status = customer ? 200 : 404;

    console.log("GET:: /customers/:id", customer);
    return res.status(status).json(customer);
  }
  // Cria um registro
  create(req, res) {
    const { name, site } = req.body;
    const id = customers[customers.length - 1].id + 1;
    const newCustomer = { id, name, site };
    customers.push(newCustomer);
    return res.status(201).json(newCustomer);
  }
  // Atualiza um registro
  update(req, res) {
    const id = parseInt(req.params.id);
    const { name, site } = req.body;
    const index = customers.findIndex((customer) => customer.id == id);
    if (!index) {
      return res.status(404).json({ error: "Customer not found" });
    }
    customers[index] = { id: parseInt(id), name: name, site: site };
    return res.status(200).json(customers[index]);
  }
  // Deleta um registro
  delete(req, res) {
    const id = parseInt(req.params.id);
    const index = customers.findIndex((customer) => customer.id == id);
    const status = index ? 200 : 404;
    if ((index) => 0) {
      customers.splice(index, 1);
    }

    return res.status(status).json(customers);
  }
}

export default new CustomersController();
