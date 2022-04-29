import Image from 'next/image';
import React from 'react';

export const PageFooter: React.FC = () => (
  <div className='h-[700px] bg-gray-700 p-10 text-white'>
    <div className='border-b-4 border-white'>
      <div className='flex-3 px-10 py-5 text-left'>
        <Image src='/img/logo.png' alt='logo' width={150} height={60}></Image>
      </div>
      <p className='text-lg font-bold'>良き仲間との出会い人生最大の財産である</p>
      <p className='pt-5 text-lg'>＼SNSでシェア／</p>

      <div className='flex'>
        <div className='mr-5 h-[62px] w-[62px] rounded bg-white'>
          <div className='p-3'>
            <Image src='/icon/facebook.png' alt='facebook' width={35} height={40}></Image>
          </div>
        </div>

        <div className='mr-5 h-[62px] w-[62px] rounded bg-white'>
          <div className='p-3'>
            <Image src='/icon/twitter.png' alt='twitter' width={35} height={40}></Image>
          </div>
        </div>

        <div className='mr-5 h-[62px] w-[62px] rounded bg-white'>
          <div className='p-3'>
            <Image src='/icon/line.png' alt='line' width={35} height={40}></Image>
          </div>
        </div>

        <div className='mr-5 h-[62px] w-[62px] rounded bg-white'>
          <div className='p-3'>
            <Image src='/icon/hatebu.png' alt='hatebu' width={35} height={40}></Image>
          </div>
        </div>

        <div className='h-[62px] w-[62px] rounded bg-white'>
          <div className='p-3'>
            <Image src='/icon/pinterest.png' alt='pinterest' width={35} height={40}></Image>
          </div>
        </div>
      </div>
    </div>
  </div>
);
