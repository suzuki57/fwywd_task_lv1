import Image from 'next/image';
import React from 'react';

export const Pricing: React.FC = () => (
  <div className='h-[1400px] bg-primary-50 font-bold'>
    <div className='text-center text-lg text-primary-800'>
      <p className='pt-20 text-[48px]'>料金</p>
      <p className='pt-5 pb-10'>＼学びのスタイルに合わせた３つのプランを用意／</p>
      <p>＼おすすめ／</p>
    </div>

    <div className='m-auto flex w-11/12'>
      {/* 起業挑戦プラン */}
      <div className='m-auto'>
        <div className='h-[800px] w-[500px]  rounded bg-white text-center text-lg font-bold text-primary-800 shadow-lg'>
          <div className='py-10 px-16'>
            <p>
              <span className='text-2xl'>起業挑戦</span>プラン
            </p>
            <div className='py-4'>
              <p>これから起業する人を</p>
              <p>全力で支援するプラン</p>
            </div>
            <p className='pb-5'>
              月額<span className='text-2xl'>&nbsp;3,000&nbsp;</span>円
              <span className='text-xs'>（税抜）</span>
            </p>
            <div className='flex'>
              <p className='flex-1 text-left'>会費</p>
              <p className='flex-1 text-right'>月額&nbsp;0&nbsp;円</p>
            </div>
            <p className='text-right text-sm'>税込&nbsp;0&nbsp;円</p>
            <div className='flex pt-5'>
              <p className='flex-1 text-left'>ツール利用料</p>
              <p className='flex-1 text-right'>月額&nbsp;3,000&nbsp;円</p>
            </div>
            <p className='text-right text-sm'>税込&nbsp;3,300&nbsp;円</p>
            <div className='my-5 border-y-4 border-primary-200 py-5 px-10'>
              <div className='flex py-2'>
                <Image src='/icon/check.png' alt='check' width={36} height={36}></Image>
                <p>仲間との学び</p>
              </div>
              <div className='flex pb-2'>
                <Image src='/icon/check.png' alt='check' width={36} height={36}></Image>
                <p>コース課題と解答集</p>
              </div>
              <div className='flex pb-2'>
                <Image src='/icon/check.png' alt='check' width={36} height={36}></Image>
                <p>仲間とのイベント参加</p>
              </div>
              <div className='flex'>
                <div>
                  <Image src='/icon/notcheck1.png' alt='notcheck1' width={36} height={36}></Image>
                </div>
                <p className='text-primary-200'>運営側の質問対応</p>
              </div>
            </div>
            <div className='pl-28'>
              <div className='flex pb-2'>
                <Image src='/icon/check.png' alt='check' width={36} height={36}></Image>
                <p>入学試験</p>
              </div>
              <div className='flex'>
                <Image src='/icon/check.png' alt='check' width={36} height={36}></Image>
                <p>Web面接</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* スタンダードプラン */}
      <div className='m-auto'>
        <div className='h-[800px] w-[500px] rounded bg-primary-800 text-center text-lg font-bold text-white shadow-lg'>
          <div className='py-10 px-16'>
            <p>
              <span className='text-2xl'>スタンダード</span>プラン
            </p>
            <div className='py-4'>
              <p>仕事と学びを両立したい人に</p>
              <p>おすすめのプラン</p>
            </div>
            <p className='pb-5'>
              月額<span className='text-2xl'>&nbsp;13,000&nbsp;</span>円
              <span className='text-xs'>（税抜）</span>
            </p>
            <div className='flex'>
              <p className='flex-1 text-left'>会費</p>
              <p className='flex-1 text-right'>月額&nbsp;10,000&nbsp;円</p>
            </div>
            <p className='text-right text-sm'>税込&nbsp;11,000&nbsp;円</p>
            <div className='flex pt-5'>
              <p className='flex-1 text-left'>ツール利用料</p>
              <p className='flex-1 text-right'>月額&nbsp;3,000&nbsp;円</p>
            </div>
            <p className='text-right text-sm'>税込&nbsp;3,300&nbsp;円</p>
            <div className='my-5 border-y-4 border-primary-200 py-5 px-10'>
              <div className='flex py-2'>
                <Image src='/icon/check.png' alt='check' width={36} height={36}></Image>
                <p>仲間との学び</p>
              </div>
              <div className='flex pb-2'>
                <Image src='/icon/check.png' alt='check' width={36} height={36}></Image>
                <p>コース課題と解答集</p>
              </div>
              <div className='flex pb-2'>
                <Image src='/icon/check.png' alt='check' width={36} height={36}></Image>
                <p>仲間とのイベント参加</p>
              </div>
              <div className='flex'>
                <div>
                  <Image src='/icon/notcheck2.png' alt='notcheck2' width={36} height={36}></Image>
                </div>
                <p className='text-primary-600'>運営側の質問対応</p>
              </div>
            </div>
            <div className='pl-28'>
              <div className='flex pb-2'>
                <Image src='/icon/check.png' alt='check' width={36} height={36}></Image>
                <p>入学試験</p>
              </div>
              <div className='flex'>
                <Image src='/icon/notcheck2.png' alt='notcheck2' width={36} height={36}></Image>
                <p className='text-primary-600'>Web面接</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* フルサポートプラン */}

      <div className='m-auto'>
        <div className='h-[800px] w-[500px]  rounded bg-white text-center text-lg font-bold text-primary-800 shadow-lg'>
          <div className='py-10 px-16'>
            <p>
              <span className='text-2xl'>フルサポート</span>プラン
            </p>
            <div className='py-4'>
              <p>標準プランに加えて運営側からの</p>
              <p>フォロー希望の方向け</p>
            </div>
            <p className='pb-5'>
              月額<span className='text-2xl'>&nbsp;63,000&nbsp;</span>円
              <span className='text-xs'>（税抜）</span>
            </p>
            <div className='flex'>
              <p className='flex-1 text-left'>会費</p>
              <p className='flex-1 text-right'>月額&nbsp;60,000&nbsp;円</p>
            </div>
            <p className='text-right text-sm'>税込&nbsp;66,000&nbsp;円</p>
            <div className='flex pt-5'>
              <p className='flex-1 text-left'>ツール利用料</p>
              <p className='flex-1 text-right'>月額&nbsp;3,000&nbsp;円</p>
            </div>
            <p className='text-right text-sm'>税込&nbsp;3,300&nbsp;円</p>
            <div className='my-5 border-y-4 border-primary-200 py-5 px-10'>
              <div className='flex py-2'>
                <Image src='/icon/check.png' alt='check' width={36} height={36}></Image>
                <p>仲間との学び</p>
              </div>
              <div className='flex pb-2'>
                <Image src='/icon/check.png' alt='check' width={36} height={36}></Image>
                <p>コース課題と解答集</p>
              </div>
              <div className='flex pb-2'>
                <Image src='/icon/check.png' alt='check' width={36} height={36}></Image>
                <p>仲間とのイベント参加</p>
              </div>
              <div className='flex'>
                <div>
                  <Image src='/icon/check.png' alt='check' width={36} height={36}></Image>
                </div>
                <p>運営側の質問対応</p>
              </div>
            </div>
            <div className='pl-28'>
              <div className='flex pb-2'>
                <Image src='/icon/check.png' alt='check' width={36} height={36}></Image>
                <p>入学試験</p>
              </div>
              <div className='flex'>
                <Image src='/icon/notcheck1.png' alt='notcheck1' width={36} height={36}></Image>
                <p className='text-primary-200'>Web面接</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='pt-16 pl-40 text-lg text-primary-800'>
      <div className='flex pb-5'>
        <Image src='/icon/check.png' alt='check' width={36} height={36}></Image>
        <p className='pl-2'>
          基本的には同じプランの方とチームになりますが、集まっている人数によって変動します。
        </p>
      </div>
      <div className='flex pb-5'>
        <Image src='/icon/check.png' alt='check' width={36} height={36}></Image>
        <p className='pl-2'>
          起業挑戦プランはWeb面接にてビジネスプランのプレゼンテーションで審査いたします。
        </p>
      </div>
      <div className='flex'>
        <Image src='/icon/check.png' alt='check' width={36} height={36}></Image>
        <p className='pl-2'>
          起業挑戦プランの方が初年度以降を継続希望の場合は月額&nbsp;10,000&nbsp;円の標準へと自動的に移行します。
        </p>
      </div>
    </div>
  </div>
);
