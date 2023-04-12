import { useCallback } from "react";
// Dùng useHook để lấy API
// useCallback để tối ưu hóa quá trình render components. Hạn chế việc render dư thừa

const useRequest = () => {
  const sendRequest = useCallback(async (getData = () => {}) => {
    const response = await fetch(
      "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
    );
    // console.log(response);
    if (!response.ok) {
      throw new Error("Get data fail!");
    }

    const data = await response.json();
    // console.log(data);
    getData(data);
  }, []);

  return sendRequest;
};

export default useRequest;
