import { create } from "zustand";

import { Product } from "@/types";

interface PreviewModalStore {
  isOpen: boolean;
  data?: Product;
  onClose: () => void;
  onOpen: (product: Product) => void;
}

const usePreviewModal = create<PreviewModalStore>((set) => ({
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  onOpen: (product: Product) => set({ isOpen: true, data: product }),
  data: undefined,
}));

export default usePreviewModal;
