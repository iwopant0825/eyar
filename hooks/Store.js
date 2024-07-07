import { create } from "zustand";

const useStore = create(set => ({
  test1:1,
  test2:2,
}));

export default useStore