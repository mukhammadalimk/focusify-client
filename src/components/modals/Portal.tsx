import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: ReactNode;
}

const Portal: React.FC<PortalProps> = ({ children }) => {
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    // Create modal root dynamically
    let modalRoot = document.getElementById("modal-root");
    if (!modalRoot) {
      modalRoot = document.createElement("div");
      modalRoot.id = "modal-root";
      document.body.appendChild(modalRoot);
    }
    setPortalRoot(modalRoot);

    // Clean up when unmounting
    return () => {
      if (modalRoot) {
        document.body.removeChild(modalRoot);
      }
    };
  }, []);

  if (!portalRoot) return null; // Avoid calling createPortal until portalRoot is set

  return createPortal(children, portalRoot);
};

export default Portal;
