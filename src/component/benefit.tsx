import Image from 'next/image';
import React from 'react';

export const Benefit: React.FC = () => (
  <div id="benefit" className='z-0 h-[1300px] bg-benefit bg-cover text-center text-2xl font-bold text-primary-800'>
    <p className='m-auto w-[45%] border-b-4 border-yellow pt-28'>
      あなたが本気で変わるために必要な２つの条件
    </p>
    <p className='py-12 text-[48px]'>
      成果&nbsp;＝&nbsp;モチベーション&nbsp;&nbsp;×&nbsp;&nbsp;能力
    </p>

    {/* 仲間 */}
    <div className='m-auto flex w-9/12'>
      <div className='m-auto h-[700px] w-[500px]  rounded bg-primary-50 text-center text-lg font-bold shadow-lg'>
        <p className='pt-10'>仲間</p>
        <div className='py-5'>
          <Image src='/icon/arrow2.png' alt='arrow2' width={30} height={30}></Image>
        </div>
        <p className='m-auto w-[52%] border-b-4 border-yellow text-2xl'>モチベーション</p>
        <div className='py-6'>
          <Image src='/img/benefit1.png' alt='benefit1' width={315} height={315}></Image>
        </div>
        <p>熱量の高い</p>
        <p>最高の仲間と切磋琢磨</p>
      </div>

      {/* 目的 */}
      <div className='m-auto h-[700px] w-[500px]  rounded bg-primary-50 text-center text-lg font-bold shadow-lg'>
        <p className='pt-10'>目的</p>
        <div className='py-5'>
          <Image src='/icon/arrow2.png' alt='arrow2' width={30} height={30}></Image>
        </div>
        <p className='m-auto w-[15%] border-b-4 border-yellow text-2xl'>能力</p>
        <div className='py-6'>
          <Image src='/img/benefit2.png' alt='benefit2' width={315} height={315}></Image>
        </div>
        <p>プロレベルで必要な</p>
        <p>技術ロードマップを網羅</p>
      </div>
    </div>

    <div className='pt-20'>
      <p>良き仲間と目的を持った学びができる環境を提供します。</p>
      <p>成果に繋がる学びがここにあります。</p>
    </div>
  </div>
);
