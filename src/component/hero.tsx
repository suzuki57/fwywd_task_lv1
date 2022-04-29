import React from 'react';

export const Hero: React.FC = () => (
  <div>
    <div className='h-[960px] bg-hero bg-cover'>
      <div className='pl-16 pt-52'>
        <p className='text-[64px] font-bold'>良心ある自己実現が</p>
        <p className='text-[64px] font-bold'>できる世界へ</p>
        <p className='pt-16 text-[32px] font-bold'>貢献が正しく評価される仕組みを創る</p>
        <p className='pt-32 pl-4 font-bold text-orange'>
          ＼現在<span className='text-[32px]'>100名</span>がダウンロード／
        </p>
        <button className='h-[76px] w-[292px] rounded bg-gradient-to-r from-orange to-yellow text-lg text-white hover:opacity-70 '>
          資料ダウンロード
        </button>
      </div>
    </div>
  </div>
);
