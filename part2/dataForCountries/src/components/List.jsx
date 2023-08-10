import { ListItem } from './ListItem';

export const List = ({ countries }) => {
  const list = countries.map((country) => (
    <ListItem name={country.name.common} />
  ));

  return <ul>{list}</ul>;
};
