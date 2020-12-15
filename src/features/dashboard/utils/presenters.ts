import capitalize from 'common/utils/capitalize';

export const renderBreed = (breed: string) =>
  breed
    .split('-')
    .map((name: string) => capitalize(name))
    .reverse()
    .join(' ');
