import Image from 'next/image';
import React from 'react';

export const PageFooter: React.FC = () => (
  <div className='h-[630px] bg-gray-700 py-10 px-20 text-lg text-white'>
    <div className='mb-16 border-b-4 border-white'>
      <div className='flex pb-5'>
        {/* ロゴ */}
        <div className='pt-12 text-left'>
          <Image src='/img/logo.png' alt='logo' width={150} height={60}></Image>
        </div>
        {/* コメント */}
        <p className='pt-16 pl-60 font-bold'>良き仲間との出会い人生最大の財産である</p>
        {/* アイコン */}
        <div className='pl-60'>
          <p className='pb-5 text-center'>＼SNSでシェア／</p>
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
    </div>

    <div className='flex'>
      <div>
        <p className='pb-5 pr-72 font-bold'>About</p>
        <ul>
          <li>悩み</li>
          <li>解決策</li>
          <li>料金</li>
        </ul>
      </div>
      <div>
        <p className='pb-5 pr-72 font-bold'>Legal</p>
        <ul>
          <li>利用規約</li>
          <li>プライバシポリシー</li>
          <li>突起法表記</li>
          <li>運営会社</li>
        </ul>
      </div>
      <div>
        <p className='pb-5 font-bold'>Links</p>
        <ul>
          <li>メディアキット</li>
          <li>サイトマップ</li>
        </ul>
      </div>
    </div>
    <p className='pt-24 text-center'>
      ©︎&nbsp;2022,&nbsp;KIKAGAKU,&nbsp;&nbsp;Inc.,&nbsp;&nbsp;All&nbsp;&nbsp;right&nbsp;&nbsp;reserved.
    </p>
  </div>
);
