import React from "react";
import { Dialog } from "primereact/dialog";

const MobileModal = ({ open, setOpen, image }) => {
  return (
    <div>
      <Dialog
        header="Full Size Image "
        visible={open}
        onHide={() => setOpen(false)}
      >
        <div className="sm:w-[300px] w-full">
          <img src={image} alt="pic" className="w-full" />
        </div>
      </Dialog>
    </div>
  );
};

export default MobileModal;
