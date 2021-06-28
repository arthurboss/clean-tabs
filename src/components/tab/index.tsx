import React from 'react';

type TTab = { src: string };

const Tab = ({ src }: TTab) => {
  const title = src.split('\n')[0];

  const tab = src
    .split('\n')
    .slice(1)
    .join('\n')
    .replace(/(^\s*(?!.+)\n+)|(\n+\s+(?!.+)$)/g, '');

  return (
    <>
      <h2>{title}</h2>
      <pre>{tab}</pre>
    </>
  );
};

export default Tab;
