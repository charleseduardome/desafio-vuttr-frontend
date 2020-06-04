import { useState } from 'react';

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [idTool, setIdTool] = useState('');

  function toggle(id: string) {
    setIsShowing(!isShowing);
    setIdTool(id);
  }

  function closeModal() {
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    toggle,
    closeModal,
    idTool,
  };
};

export default useModal;
