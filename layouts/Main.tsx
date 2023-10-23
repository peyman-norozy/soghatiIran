import React from "react";

const Main: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <main className="w-full">{children}</main>;
};

export default Main;
