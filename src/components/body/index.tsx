import type { ReactNode } from "react";
import Sidebar from "../sidebar";

interface BodyProps {
  children: ReactNode;
}

const Body = ({ children }: BodyProps) => {
  return (
    <>
      <div className="w-full h-[calc(100vh-80px)] bg-[#F5F5F5] flex">
        <div className="w-[200px] h-full bg-[#E5E5E5]">
          <Sidebar />
        </div>
        <div className="w-full h-full">
          {children}
        </div>
      </div>
    </>
  );
};

export default Body;