import React from "react";
import Image from "next/image";

const CompanyLogo = () => {
  return (
    <div className=" flex flex-wrap w-full justify-center items-center gap-20 pt-14 px-4">
      <div className="flex justify-center items-center">
        <Image src="/Logo (3).png" alt="Zaphier Logo" width={85} height={70} />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/Logo (4).png"
          alt="Pipe Drive Logo"
          width={100}
          height={100}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/Logo (5).png"
          alt="Cib Bank Logo"
          width={100}
          height={100}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/Logo (6).png"
          alt="Company 4 Logo"
          width={80}
          height={80}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/Logo (7).png"
          alt="Burnt Toast Logo"
          width={80}
          height={80}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/Logo (8).png"
          alt="Panda Doc Logo"
          width={80}
          height={80}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image src="/Logo (9).png" alt="Moz Logo" width={80} height={80} />
      </div>
    </div>
  );
};

export default CompanyLogo;