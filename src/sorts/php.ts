import { getSortingSetting } from "../registration";

export default text => {
  const sort = (a: string, b: string) => {
    if (getSortingSetting() === 'length') {
      return a.length - b.length;
    }
    return a.localeCompare(b);
  };

  let uses = text
    .filter(
      line =>
        line.startsWith('use') && line.endsWith(';')
    )
    .sort(sort);

  let currentUse = 0;
  const newText = text.map(line => {
    if (line.startsWith('use')) {
      return uses[currentUse++];
    }
    return line;
  });

  return newText.join('\n');

  // return `${startTag}\n\n${namespace}\n${uses.join('\n')}${code.join('\n')}`;
};
