import { Product } from "./product.model";
import { CreateProductDto, GetProductDto, UpdateProductDto } from "./product.dto";
import faker from "@faker-js/faker";


export const products: Product[] = [];

export const getProducts = (dto: GetProductDto): Product[] => {
  // code
  return products;
}

export const getProduct = (id: string) => {
  //
}

export const addProduct = (data: CreateProductDto): Product => {
  const newProduct = {
    ...data,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent()
    }
  }
  products.push(newProduct);
  return newProduct
}

export const updateProduct = (id: Product['id'], changes: UpdateProductDto): Product => {
  const index = products.findIndex(item => item.id === id);
  const prevData = products[index];

  products[index] = {
    ...prevData,
    ...changes,
  }

  return products[index];
}

export const deleteProduct = (id: string | number) => {
  //
}
