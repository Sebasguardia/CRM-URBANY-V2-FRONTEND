import { create } from "zustand";

const dashboardStore = create((set) => ({
  sales: [],
  setSales: (sales) => set({ sales })
}));

export default dashboardStore;
