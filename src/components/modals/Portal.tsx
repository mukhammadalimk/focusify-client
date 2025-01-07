import { useEffect, useState, ReactNode } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: ReactNode;
}

const Portal: React.FC<PortalProps> = ({ children }) => {
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    // Find the target div by its ID
    const target = document.getElementById("ipad-pro-root");
    setPortalRoot(target);
  }, []);

  if (!portalRoot) return null;

  return createPortal(children, portalRoot);
};

export default Portal;
