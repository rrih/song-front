import React from 'react'

const IndexPage = () => {
  return (
    <>
      <div className="bg-blue-500 p-10 text-center text-white">
        <h2 className="p-5">カラオケの楽曲点数管理ツール</h2>
        <ul className="text-left">
          <li className="p-3">楽曲スコア記録</li>
          <li className="p-3">スレッド形式記録(TBD)</li>
          <li className="p-3">お気に入り</li>
          <li className="p-3">通常検索</li>
          <li className="p-3">カテゴリ検索</li>
          <li className="p-3">ユーザー検索(TBD)</li>
          <li className="p-3">機種検索</li>
          <li className="p-3">カテゴリ登録</li>
          <li className="p-3">履歴(TBD)</li>
          <li className="p-3">設定</li>
        </ul>
      </div>
    </>
  )
}

export default IndexPage
