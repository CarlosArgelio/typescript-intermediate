type Sizes = 'S' | 'M' | 'L' | 'XL';
type userId = string | number;
interface Product {
  id: userId;
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
}

const products: Product[] = [];

products.push({
  id: '1',
  title: 'p1',
  createdAt: new Date(),
  stock: 12,
  size: "S"
})

const addProduct = (data: Product) => {
  products.push(data);
}
