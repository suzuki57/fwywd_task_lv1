import Image from 'next/image';
import React from 'react';
import { Link as Scroll } from 'react-scroll';

export const PageFooter: React.FC = () => (
  <div className='z-0 h-[630px] bg-primary-800 py-10 px-20 text-lg text-white'>
    <div className='mb-16 border-b-4 border-white'>
      <div className='flex pb-5'>
        {/* ロゴ */}
        <div className='pt-12 text-left hover:opacity-70'>
          <Scroll to='top' smooth={true}>
            <Image src='/img/logo.png' alt='logo' width={150} height={60}></Image>
          </Scroll>
        </div>
        {/* コメント */}
        <p className='pt-16 pl-60 font-bold'>良き仲間との出会い人生最大の財産である</p>
        {/* アイコン */}
        <div className='pl-60'>
          <p className='pb-5 text-center'>＼SNSでシェア／</p>
          <div className='flex'>
            <div className='mr-5 h-[62px] w-[62px] rounded bg-white'>
              <div className='p-3'>
                <a href='' className='hover:opacity-70'>
                  <Image src='/icon/facebook.png' alt='facebook' width={35} height={40}></Image>
                </a>
              </div>
            </div>
            <div className='mr-5 h-[62px] w-[62px] rounded bg-white'>
              <div className='p-3'>
                <a href='' className='hover:opacity-70'>
                  <Image src='/icon/twitter.png' alt='twitter' width={35} height={40}></Image>
                </a>
              </div>
            </div>
            <div className='mr-5 h-[62px] w-[62px] rounded bg-white'>
              <div className='p-3'>
                <a href='' className='hover:opacity-70'>
                  <Image src='/icon/line.png' alt='line' width={35} height={40}></Image>
                </a>
              </div>
            </div>
            <div className='mr-5 h-[62px] w-[62px] rounded bg-white'>
              <div className='p-3'>
                <a href='' className='hover:opacity-70'>
                  <Image src='/icon/hatebu.png' alt='hatebu' width={35} height={40}></Image>
                </a>
              </div>
            </div>
            <div className='h-[62px] w-[62px] rounded bg-white'>
              <div className='p-3'>
                <a href='' className='hover:opacity-70'>
                  <Image src='/icon/pinterest.png' alt='pinterest' width={35} height={40}></Image>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='flex'>
      <div>
        <p className='pb-5 pr-72 font-bold'>About</p>
        <a href='' className='block hover:opacity-70'>
          <Scroll to='sympathy' smooth={true}>
            悩み
          </Scroll>
        </a>
        <a href='' className='block hover:opacity-70'>
          <Scroll to='benefit' smooth={true}>
            解決策
          </Scroll>
        </a>
        <a href='' className='block hover:opacity-70'>
          <Scroll to='pricing' smooth={true}>
            料金
          </Scroll>
        </a>
      </div>
      <div>
        <p className='pb-5 pr-72 font-bold'>Legal</p>
        <a href='' className='block hover:opacity-70'>
          利用規約
        </a>
        <a href='' className='block hover:opacity-70'>
          プライバシポリシー
        </a>
        <a href='' className='block hover:opacity-70'>
          特記法表記
        </a>
        <a href='' className='block hover:opacity-70'>
          運営会社
        </a>
      </div>
      <div>
        <p className='pb-5 font-bold'>Links</p>
        <a href='' className='block hover:opacity-70'>
          メディアキット
        </a>
        <a href='' className='block hover:opacity-70'>
          サイトマップ
        </a>
      </div>
    </div>
    <p className='pt-24 text-center'>
      ©︎&nbsp;2022,&nbsp;KIKAGAKU,&nbsp;&nbsp;Inc.,&nbsp;&nbsp;All&nbsp;&nbsp;right&nbsp;&nbsp;reserved.
    </p>
  </div>
);
