export interface TProduct {
  id: number;
  title: string;
  image: string;
  category: string;
  price: number;
  description: string;
  rating: {
    rate: number;
    count: number;
  };
}
