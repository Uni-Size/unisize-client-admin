import Stock from "@/components/asset/modal/Stock";

interface useModalProp {
  modalType: string;
}

export default function useModal({ modalType }: useModalProp) {
  switch (modalType) {
    case "stock":
      return <Stock />;
    default:
      return;
  }
}
