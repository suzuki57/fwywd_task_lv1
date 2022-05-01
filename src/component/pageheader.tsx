import Image from 'next/image';
import React from 'react';
import { Link as Scroll } from 'react-scroll';

export const PageHeader: React.FC = () => (
  <div className='fixed z-10 flex h-[100px] w-[1680px] bg-primary-800'>
    <div className='flex-1 px-10 py-5 text-left hover:cursor-pointer hover:opacity-70'>
      <Scroll to='top' smooth={true}>
        <Image src='/img/logo.png' alt='logo' width={150} height={60}></Image>
      </Scroll>
    </div>
    <div className='pr-60 text-center text-lg text-white'>
      <a>
        <button className='h-[100px] w-[150px] hover:border-b-[6px] hover:border-primary-100 hover:bg-primary-600'>
          <Scroll to='top' smooth={true}>
            TOP
          </Scroll>
        </button>
      </a>
      <a>
        <button className='h-[100px] w-[150px] hover:border-b-[6px] hover:border-primary-100 hover:bg-primary-600'>
          <Scroll to='sympathy' smooth={true}>
            悩み
          </Scroll>
        </button>
      </a>
      <a>
        <button className='h-[100px] w-[150px] hover:border-b-[6px] hover:border-primary-100 hover:bg-primary-600'>
          <Scroll to='benefit' smooth={true}>
            解決策
          </Scroll>
        </button>
      </a>
      <a>
        <button className='h-[100px] w-[150px] hover:border-b-[6px] hover:border-primary-100 hover:bg-primary-600'>
          <Scroll to='pricing' smooth={true}>
            料金
          </Scroll>
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
