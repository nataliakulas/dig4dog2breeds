const adaptSubBreeds = (breed: [string, string[]]) => breed[1].map((subBreed: string) => breed[0] + '-' + subBreed);

export const adaptBreeds = (payload: { [key: string]: string[] }) =>
  Object.entries(payload)
    .map((breed: [string, string[]]) => (!!breed[1].length ? adaptSubBreeds(breed) : breed[0]))
    .flat();
