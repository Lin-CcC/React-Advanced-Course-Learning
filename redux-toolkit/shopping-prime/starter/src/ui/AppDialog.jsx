import { Dialog } from 'primereact/dialog';
import { useDispatch, useSelector } from 'react-redux';
import { closeDialog } from '../reudx/Slice/dialogSlice';
import ShoppingList from './ShoppingList';

export default function AppDialog() {
  const dialogStatus = useSelector((state) => state.dialog.value);
  const dispatch = useDispatch();
  return (
    <div className="card flex justify-content-center">
      <Dialog
        visible={dialogStatus}
        onHide={() => {
          if (!dialogStatus) return;
          dispatch(closeDialog());
        }}
      >
        <ShoppingList />
      </Dialog>
    </div>
  );
}
