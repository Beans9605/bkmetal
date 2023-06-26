import preAxios from "axios";

interface CopListParams {}

const axios = preAxios.create({
  baseURL: process.env.NEXT_PUBLIC_DELIVERY_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const deliCopList = async (): Promise<any> => {
  const res = await axios.get("/delivery-hyphen/mapping/search");

  if (res.status !== 200) {
    throw new Error(`Response status is "${res.status}"`);
  }

  if (!res.data.success) {
    throw new Error(`Result is Fail "${res.data.code}"`);
  }

  const copList = res.data.data;

  return copList;
};
