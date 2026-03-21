import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { useDispatch, useSelector } from 'react-redux';
import { openDialog, closeDialog } from '../reudx/Slice/dialogSlice';
export default function AppDialog() {
  const dialogStatus = useSelector((state) => state.dialog.value);
  const dispatch = useDispatch();
  return (
    <div className="card flex justify-content-center">
      <Dialog
        header="Header"
        visible={dialogStatus}
        style={{ width: '50vw' }}
        onHide={() => {
          if (!dialogStatus) return;
          dispatch(closeDialog());
        }}
      >
        <p className="m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Dialog>
    </div>
  );
}
