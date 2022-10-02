export const getUserById = (id: string) => {
  return {
    where: {
      userId: id,
    },
  };
};
