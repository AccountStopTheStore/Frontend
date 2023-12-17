import { atom } from "recoil";

export interface UploadImageFileAtomProps {
  isUploadImage: boolean;
  selectedImage: string | undefined;
  selectedImageFile: File | null;
}

export const uploadImageFileAtom = atom<UploadImageFileAtomProps>({
  key: "uploadImageFileAtom",
  default: {
    isUploadImage: false,
    selectedImage: undefined,
    selectedImageFile: null,
  },
});

export const isReceiptAtom = atom({
  key: "isReceiptAtom",
  default: false,
});
