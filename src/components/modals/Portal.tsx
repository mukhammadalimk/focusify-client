import { createPortal } from "react-dom";
import { ReactNode, useEffect, useState } from "react";

interface PortalProps {
  children: ReactNode;
  containerId: string;
}

const Portal: React.FC<PortalProps> = ({ children, containerId }) => {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    // Check if the container already exists
    let portalContainer = document.getElementById(containerId);

    if (!portalContainer) {
      // If it doesn't exist, create and append it
      portalContainer = document.createElement("div");
      portalContainer.id = containerId;
      portalContainer.classList.add("flex", "z-[200]"); // Add necessary classes
      document.body.appendChild(portalContainer);
    }

    setContainer(portalContainer);

    // No cleanup needed since the container remains in the DOM
  }, [containerId]);

  if (!container) return null;

  return createPortal(children, container);
};

export default Portal;
