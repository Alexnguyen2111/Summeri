import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-2'>
      </nav>
      <h1 className='head_text'>
        Tóm tắt và dịch mọi bài viết với <br className='max-md:hidden' />
        <span className='orange_gradient '>Sumeri</span>
      </h1>
      <h2 className='desc '>
        Với Summeri bạn có thể dịch mọi bài báo từ mọi ngôn ngữ ra Tiếng Việt 
      </h2>
      <h2 className='desc '>
        Dán link bài báo vào ô phía dưới để bắt đầu
      </h2>
    </header>
  );
};

export default Hero;
