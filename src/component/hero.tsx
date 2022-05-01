import React from 'react';
import useSWR from 'swr';
import fetch from 'unfetch';

const apiUrl = 'https://api.steinhq.com/v1/storages/626c8f004906bb05373f664f/sheet1';

export const Hero: React.FC = () => {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data, error } = useSWR(apiUrl, fetcher);

  if (error) return <div>failed to load</div>;
  return (
    <div id='top' className='z-0 h-[960px] bg-hero bg-cover'>
      <div className='pl-16 pt-52'>
        <p className='text-[64px] font-bold'>良心ある自己実現が</p>
        <p className='text-[64px] font-bold'>できる世界へ</p>
        <p className='pt-16 text-[32px] font-bold'>貢献が正しく評価される仕組みを創る</p>
        <p className='pt-32 pl-5 font-bold text-orange'>
          ＼現在<span className='text-[32px]'>&nbsp;{!data ? "集計中" : data.length}&nbsp;名</span>がダウンロード／
        </p>
        <a href='https://docs.google.com/forms/d/e/1FAIpQLSf8D2W6099KIuc6IdDBsFRBpNUn1JL1fqmodwTQXUouCcrbSQ/viewform'>
          <button className='h-[76px] w-[292px] rounded bg-gradient-to-r from-orange to-yellow text-lg text-white hover:opacity-70 '>
            資料ダウンロード
          </button>
        </a>
      </div>
    </div>
  );
};
