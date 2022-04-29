import Image from 'next/image';
import React from 'react';

export const CTA: React.FC = () => (
  <div className='flex h-[680px] bg-gradient-to-r from-primary-800 to-primary-500 font-bold text-white'>
    <div className='pl-32 pt-40'>
      <p className='text-[64px]'>
        良き仲間<span className='text-[48px]'>との出会いは</span>
      </p>
      <p className='pb-20 text-[64px]'>
        人生最大<span className='text-[48px]'>の</span>財産
        <span className='text-[48px]'>である</span>
      </p>
      <button className='t h-[100px] w-[400px] rounded bg-gradient-to-r from-orange to-yellow text-2xl text-white hover:opacity-70 '>
        資料ダウンロード
      </button>
    </div>
    <div className='m-auto'>
      <Image src='/img/cta.png' alt='cta' width={600} height={600}></Image>
    </div>
  </div>
);
