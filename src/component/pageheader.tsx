import Image from 'next/image';
import React from 'react';

export const PageHeader: React.FC = () => (
  <div className='fixed z-10 flex h-[100px] w-[1680px] bg-primary-800'>
    <div className='flex-1 px-10 py-5 text-left'>
      <Image src='/img/logo.png' alt='logo' width={150} height={60}></Image>
    </div>
    <div className='pr-60 text-center text-lg text-white'>
      <a href='#top'>
        <button className='h-[100px] w-[150px] hover:border-b-[6px] hover:border-primary-100 hover:bg-primary-600'>
          TOP
        </button>
      </a>
      <a href='#sympathy'>
        <button className='h-[100px] w-[150px] hover:border-b-[6px] hover:border-primary-100 hover:bg-primary-600'>
          悩み
        </button>
      </a>
      <a href='#benefit'>
        <button className='h-[100px] w-[150px] hover:border-b-[6px] hover:border-primary-100 hover:bg-primary-600'>
          解決策
        </button>
      </a>
      <a href='#pricing'>
        <button className='h-[100px] w-[150px] hover:border-b-[6px] hover:border-primary-100 hover:bg-primary-600'>
          料金
        </button>
      </a>
    </div>
    <div className='mx-10 my-3 flex-1 text-right'>
      <a href='https://docs.google.com/forms/d/e/1FAIpQLSf8D2W6099KIuc6IdDBsFRBpNUn1JL1fqmodwTQXUouCcrbSQ/viewform'>
        <button className='h-[76px] w-[292px] rounded bg-gradient-to-r from-orange to-yellow text-lg text-white hover:opacity-70'>
          資料ダウンロード
        </button>
      </a>
    </div>
  </div>
);
