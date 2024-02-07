import Image from "next/image";

export const Header = () => {
  return (
    <header className="fixed left-0 right-0 top-0 h-20 bg-[#dfdfdf30] dark:bg-[#20202320] backdrop-blur-[10px] z-[2]">
      <div className="ml-auto mr-auto h-full md:w-[572px] sm:w-full">
        {/* <Image
          src="https://gennyoon.github.io/assets/images/logo.png"
          alt="logo"
          width={40}
          height={40}
        /> */}
        <h1 className="text-xl font-extrabold">GennYoon의 블로그</h1>
      </div>
    </header>
  );
};
