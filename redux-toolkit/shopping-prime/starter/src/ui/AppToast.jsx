import React, { useRef } from 'react';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function AppToast() {
  const toast = useRef(null);

  const showSuccess = () => {
    toast.current.show({
      severity: 'success',
      summary: 'Success',
      detail: 'Message Content',
      life: 3000,
    });
  };

  const showInfo = () => {
    toast.current.show({
      severity: 'info',
      summary: 'Info',
      detail: 'Message Content',
      life: 3000,
    });
  };

  const showWarn = () => {
    toast.current.show({
      severity: 'warn',
      summary: 'Warning',
      detail: 'Message Content',
      life: 3000,
    });
  };

  const showError = () => {
    toast.current.show({
      severity: 'error',
      summary: 'Error',
      detail: 'Message Content',
      life: 3000,
    });
  };

  const showSecondary = () => {
    toast.current.show({
      severity: 'secondary',
      summary: 'Secondary',
      detail: 'Message Content',
      life: 3000,
    });
  };

  const showContrast = () => {
    toast.current.show({
      severity: 'contrast',
      summary: 'Contrast',
      detail: 'Message Content',
      life: 3000,
    });
  };
}
