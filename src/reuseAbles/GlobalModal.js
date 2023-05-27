import React from "react";
import { Dialog } from "primereact/dialog";

const GlobalModal = ({ open, setOpen, image }) => {
  return (
    <div>
      <Dialog
        header="Full Size Image "
        visible={open}
        onHide={() => setOpen(false)}
      >
        <div className="sm:w-[500px] w-full">
          <img src={image} alt="pic" className="w-full" />
        </div>
      </Dialog>
    </div>
  );
};

export default GlobalModal;
