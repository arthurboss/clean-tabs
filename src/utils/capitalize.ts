export function capitalizeText(title: string) {
  const split_title = title.split('-');

  for (let i = 0; i < split_title.length; i++) {
    split_title[i] = split_title[i][0].toUpperCase() + split_title[i].slice(1);
  }

  return split_title.join(' ');
}
