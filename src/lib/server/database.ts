const links = new Map<string, Link>();

const ID_ALPHABET = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";

const generateId = () => {
  let id = "";
  for (let i = 0; i < 6; ++i) {
    id += ID_ALPHABET.at(Math.random() * ID_ALPHABET.length);
  }
  return id;
};

export const findLink = (id: string) => {
  return links.get(id);
};

export const saveLink = (url: string) => {
  const id = generateId();
  const link: Link = {
    url,
    id,
    createdAt: new Date(),
    clicks: 0
  };
  links.set(id, link);
  return link;
};