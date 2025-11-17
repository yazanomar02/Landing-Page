import { useState, useRef, useEffect } from "react";

export function ActionMenu() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();


  // إغلاق القائمة عند الضغط خارجها
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  return (
    <div style={{ position: "relative" }} ref={dropdownRef}>
      <div className="action-btn" onClick={() => setOpen(!open)}>
        ⋮
      </div>

      {open && (
        <div className="dropdown-menu">
          <div className="dropdown-item">Show</div>
          <div className="dropdown-item">Edit</div>
          <div className="dropdown-item delete">Delete</div>
        </div>
      )}
    </div>
  );
}
