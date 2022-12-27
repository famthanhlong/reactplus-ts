import api from "./CreateAPI";

export const getTask = async (path: string) => {
  const respone = await api.get(path);
  return respone.data;
};
