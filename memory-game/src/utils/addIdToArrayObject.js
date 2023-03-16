
export const addIdToArrayObject = (arr) => arr.map((card) => ({ ...card, id: Math.random() }));

