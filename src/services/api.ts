export const getProducts = async () => {
  try {
    const response = await fetch('https://dummyjson.com/products');
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  } finally {
    //   setLoading(false);
  }
};
