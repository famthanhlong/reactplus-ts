import api from "./CreateAPI";

export const postData = async (path: string, body: any) => {
  return await api.post(path, {
    name: body.name,
    email: body.email,
    password: body.password,
  });
};
