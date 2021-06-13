import { useEffect, useState } from "react";

export const useLoaded = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded((preState) => !preState), []);
  return loaded;
};
