import prisma from "./prisma";

const ID_ALPHABET = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";

const generateId = () => {
  let id = "";
  for (let i = 0; i < 6; ++i) {
    id += ID_ALPHABET.at(Math.random() * ID_ALPHABET.length);
  }
  return id;
};

export const findLink = async (id: string) => {
  return await prisma.link.findUnique({
    where: { id }
  });
};

export const saveLink = async (url: string, id: string | undefined) => {
  return await prisma.link.create({
    data: {
      id: generateId(),
      url: url,
      creator: id
    }
  });
};

export const findIncrementingVisits = async (id: string) => {
  try {
    return await prisma.link.update({
      where: {
        id
      },
      data: {
        visits: {
          increment: 1
        }
      }
    });
  } catch (e) {
    return null;
  }
};