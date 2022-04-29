import Image from 'next/image';
import React from 'react';

export const Hero: React.FC = () => 
  (
    <div>
      <div className='bg-hero bg-cover h-[950px]'>
        <div>
          <p className="text-[64px] font-bold">良心ある自己実現</p>
          <p className="text-[64px] font-bold">ができる世界へ</p>

          <p className="text-[32px] font-bold">貢献が正しく評価される仕組みを創る</p>

          <p className="text-orange font-bold">\現在<span className="text-[32px]">100名</span>がダウンロード/</p>

          <button className="rounded h-[76px] w-[292px] text-white text-lg bg-gradient-to-r from-orange to-yellow hover:opacity-70 ">資料ダウンロード</button>
        </div>

      </div>
    </div> 
    );
