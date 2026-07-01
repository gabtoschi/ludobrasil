import { useState } from "react";

export default function useRandomSublist<T>(list: T[], size: number) {
  const getRandomSublist = () => {
    const max = list.length;
    const ids: number[] = [];
    const sublist: T[] = [];

    while (ids.length < size) {
      // eslint-disable-next-line react-hooks/purity
      const randomId = Math.floor(Math.random() * max);

      if (!ids.includes(randomId)) {
        ids.push(randomId);
        sublist.push(list[randomId]);
      }
    }

    return sublist;
  }

  const [sublist, setSublist] = useState<T[]>(getRandomSublist());
  const reroll = () => {
    setSublist(getRandomSublist());
  }

  return { sublist, reroll }

}