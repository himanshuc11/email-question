type Key = "read" | "fav";

export function getDataFromLocalStore(key: Key) {
  try {
    const jsonItem = localStorage.getItem(key);
    if (jsonItem) {
      const object = JSON.parse(jsonItem);
      return object;
    }
    return null;
  } catch {
    return null;
  }
}

export function storeDataToLocalStore(key: Key, value: number) {
  try {
    const data = getDataFromLocalStore(key) as number[];
    let newArray = [value];
    if (data) {
      const isAlreadyPresent = data?.find((elem) => elem === value);
      if (isAlreadyPresent) {
        newArray = data?.filter((elem) => elem !== value);
      } else {
        newArray = [...data, value];
      }
    }
    const stringified = JSON.stringify(newArray);
    return localStorage.setItem(key, stringified);
  } catch {
    return null;
  }
}
