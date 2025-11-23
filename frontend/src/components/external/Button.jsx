import React from "react";
import GlareHover from "./GlareHover.jsx";

const Button = ({
  onClick,
  type = 'button',
  className = "",
  children,
  width = "120px",
  height = "44px",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 text-sm font-semibold text-white bg-transparent border-none flex items-center gap-2 ${className}`}
      aria-label="Login"
    >
      <GlareHover
        width={width}
        height={height}
        background={`linear-gradient(135deg,#9E59ED,#7B00FF)`}
        borderRadius="999px"
        glareColor="#ffffff"
        glareOpacity={0.22}
        glareAngle={-45}
        glareSize={220}
        transitionDuration={600}
        className="w-full"
        style={{ boxShadow: "0 6px 18px rgba(43,7,118,0.35)" }}
      >
        {children}
      </GlareHover>
    </button>
  );
};

export default Button;
