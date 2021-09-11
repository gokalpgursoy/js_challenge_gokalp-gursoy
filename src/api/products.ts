import { GetProductsDTO } from '@/models/GetProductsDTO';

const api = {
  getProducts: async (limit = 6, offset = 0): Promise<GetProductsDTO> => {
    const response = await fetch(
      `https://api.musement.com/api/v3/activities?limit=${limit}&offset=${offset}`,
    );
    return response.json();
  },
};
export { api };
