import { addProduct } from "./products/product.service";

addProduct({
  id: '1',
  title: 'p1',
  createdAt: new Date(),
  updatedAt: new Date(),
  stock: 12,
  size: "S",
  category: {
    id: '13',
    name: 'c1',
    createdAt: new Date(),
    updatedAt: new Date(),
  }
})
