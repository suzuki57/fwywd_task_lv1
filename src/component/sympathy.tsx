import Image from 'next/image';
import React from 'react';

export const Sympathy: React.FC = () => (
  <div id="sympathy" className='z-0 h-[1100px] bg-primary-50'>
    <p className='m-auto mb-16 w-[36%] border-b-4 border-yellow pt-28 text-center text-2xl font-bold text-primary-800'>
      夢を叶える仲間が欲しい、あなたへ
    </p>
    <div className='m-auto flex w-[36%] text-lg font-bold text-primary-800'>
      <div className='flex-10'>
        <Image src='/icon/check.png' alt='check' width={40} height={40}></Image>
      </div>
      <p className='flex-1 pt-1'>新しいことを始めたい気持ちは強い</p>
    </div>
    <div className='m-auto flex w-[36%] text-lg font-bold text-primary-800'>
      <div className='flex-10'>
        <Image src='/icon/check.png' alt='check' width={40} height={40}></Image>
      </div>
      <p className='flex-1 pt-1'>学びに必要な教材がたくさんあることは知っている</p>
    </div>
    <div className='m-auto flex w-[36%] text-lg font-bold text-primary-800'>
      <div className='flex-10'>
        <Image src='/icon/check.png' alt='check' width={40} height={40}></Image>
      </div>
      <p className='flex-1 pt-1'>最後のひと押しの勇気が欲しい</p>
    </div>
    {/* 悩み１ */}
    <div className='m-auto flex w-9/12 pt-10'>
      <div className='flex-1'>
        <div className='m-auto h-[614px] w-[500px]  rounded bg-white text-center text-lg font-bold shadow-lg'>
          <p className='w-1/6 bg-primary-800 text-[18px] text-white'>悩み１</p>
          <div className='text-primary-800'>
            <p className='m-auto w-[35%] border-b-4 border-yellow pt-8'>
              <span className='text-2xl'>仲間</span>がいない
            </p>
            <div className='py-8'>
              <Image src='/img/sympathy1.png' alt='sympathy1' width={315} height={315}></Image>
            </div>
            <p>会社の同僚や友人と一緒に</p>
            <p>学ぶのは難しい</p>
          </div>
        </div>
      </div>
      {/* 悩み */}
      <div className='flex-1'>
        <div className='m-auto h-[614px] w-[500px]  rounded bg-white text-center text-lg font-bold shadow-lg'>
          <p className='w-1/6 bg-primary-800 text-[18px] text-white'>悩み２</p>
          <div className='text-primary-800'>
            <p className='m-auto w-[40%] border-b-4 border-yellow pt-8'>
              <span className='text-2xl'>目的</span>があいまい
            </p>
            <div className='py-8'>
              <Image src='/img/sympathy2.png' alt='sympathy2' width={315} height={315}></Image>
            </div>
            <p>ゆるい繋がりのコミュニティでは</p>
            <p>目的が達成できない</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
