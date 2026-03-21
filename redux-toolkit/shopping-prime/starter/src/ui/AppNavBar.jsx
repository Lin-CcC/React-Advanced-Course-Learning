import React, { useEffect } from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { Badge } from 'primereact/badge';
import { Button } from 'primereact/button';
import { useDispatch } from 'react-redux';
import { openDialog } from '../reudx/Slice/dialogSlice';

export default function AppNavBar() {
  const [currentTheme, setCurrentTheme] = React.useState('light');
  const dispatch = useDispatch();

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `src/themes/lara-${currentTheme}-cyan/theme.css`;
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    }; //这个语句是清理代码，第一次加载时不会被执行，第二次加载时会被执行，清理上一次加载的主题样式表。
  }, [currentTheme]);

  function toggleTheme() {
    if (currentTheme === 'light') {
      setCurrentTheme('dark');
    } else {
      setCurrentTheme('light');
    }
  }

  const itemRenderer = (item) => (
    <a className="flex align-items-center p-menuitem-link">
      <span className={item.icon} />
      <span className="mx-2">{item.label}</span>
      {item.badge && <Badge className="ml-auto" value={item.badge} />}
      {item.shortcut && (
        <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">
          {item.shortcut}
        </span>
      )}
    </a>
  );

  const items = [
    {
      label: 'Cart',
      icon: 'pi pi-shopping-cart',
      badge: 3,
      template: itemRenderer,
      command: () => {
        dispatch(openDialog());
      },
    },
  ];

  const start = (
    <img
      alt="logo"
      src="https://primefaces.org/cdn/primereact/images/logo.png"
      height="40"
      className="mr-2"
    ></img>
  );
  const end = (
    <div className="flex align-items-center gap-2">
      <InputText
        placeholder="Search"
        type="text"
        className="w-8rem sm:w-auto"
        style={{ marginRight: '10px' }}
      />
      <Button
        icon={`pi ${currentTheme === 'light' ? 'pi-moon' : 'pi-sun'}`}
        outlined
        onClick={() => {
          toggleTheme();
        }}
      />
    </div>
  );

  return (
    <div className="card">
      <Menubar model={items} start={start} end={end} />
    </div>
  );
}
