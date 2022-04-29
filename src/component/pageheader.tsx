import Image from 'next/image';
import React from 'react';

export const PageHeader: React.FC = () => (
  <div className='flex h-[100px] bg-primary-800'>
    <div className='px-10 flex-3 py-5 text-left'>
      <Image src='/img/logo.png' alt='logo' width={150} height={60}></Image>
    </div>
    <div className='my-8 flex-1 text-center text-lg text-white'>
      <a href='' className='px-20'>
        TOP
      </a>
      <a href='' className='px-20'>
        悩み
      </a>
      <a href='' className='px-20'>
        解決策
      </a>
      <a href='' className='px-20'>
        料金
      </a>
    </div>
    <div className="mx-10 my-3 flex-2 text-right">
      <button className="rounded h-[76px] w-[292px] text-white text-lg bg-gradient-to-r from-orange to-yellow hover:opacity-70 ">資料ダウンロード</button>
    </div>
  </div>
);
