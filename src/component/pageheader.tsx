import Image from 'next/image';
import React from 'react';

export const PageHeader: React.FC = () => (
  <div className='flex h-[100px] bg-primary-800'>
    <div className='px-10 flex-1 py-5 text-left'>
      <Image src='/img/logo.png' alt='logo' width={150} height={60}></Image>
    </div>
    <div className='pr-60 text-center text-lg text-white'>
      <button className='h-[100px] w-[150px] hover:bg-primary-600'>TOP</button>
      <button className='h-[100px] w-[150px] hover:bg-primary-600'>悩み</button>
      <button className='h-[100px] w-[150px] hover:bg-primary-600'>解決策</button>
      <button className='h-[100px] w-[150px] hover:bg-primary-600'>料金</button>
    </div>
    <div className="mx-10 my-3 flex-1 text-right">
      <button className="rounded h-[76px] w-[292px] text-white text-lg bg-gradient-to-r from-orange to-yellow hover:opacity-70">資料ダウンロード</button>
    </div>
  </div>
);
