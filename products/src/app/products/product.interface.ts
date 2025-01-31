export interface Product {
  id: number;
  title: string;
  description: string | null;
  price: number;
  thumbnail: string;
  brand: string;
  category: string;
  stock: number;
  availabilityStatus: 'In Stock' | 'Low Stock' | 'Out of Stock';
  rating: number;
}
