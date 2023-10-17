import api from './api';

const characterService = {
  getAllCharacter: async () => {
    try {
      const res = await api.get('/characters');
      if (res.status === 200 || res.status === 201) {
        return res.data;
      } else {
        throw new Error(`Erro ao obter dados: ${res.status}`);
      }
    } catch (error) {
      console.error('Erro ao buscar personagens');
      throw error;
    }
  }
};

export default characterService;
