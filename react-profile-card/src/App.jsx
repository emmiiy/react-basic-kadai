import "./App.css";
import { useState } from "react";
import { ProfileCard } from "./ProfileCard";

// 社員のプロフィール情報をprofiles配列で保持する
const profiles = [
  {
    name: "侍健太",
    age: 37,
    bio: "プロジェクトマネージャー。チームの進捗管理と課題解決が得意です。",
  },
  {
    name: "刀沢彩香",
    age: 32,
    bio: "フルスタックエンジニア。新規サービスの設計から運用まで担当しています。",
  },
  {
    name: "戦国広志",
    age: 24,
    bio: "若手バックエンドエンジニア。Node.jsでAPI開発に挑戦中です。",
  },
  {
    name: "武士山美咲",
    age: 27,
    bio: "UI/UXデザイナー。使いやすく美しいデザインを追求しています。",
  },
  {
    name: "武者小路勇気",
    age: 29,
    bio: "フロントエンドエンジニア。ReactとTypeScriptを使って開発中です。",
  },
];

function App() {
  // useStateで現在のインデックス（index）を管理する（初期値は0）
  const [order, setOrder] = useState(0);

  // 現在のプロフィールを受け渡す
  const currentProfile = profiles[order];

  //ボタンを押したらインデックスが1つ進むようにhandleClick()関数を定義する
  const handleClick = () => {
    setOrder((order + 1) % profiles.length);
  };

  return (
    <>
      <ProfileCard {...currentProfile} />
      <button onClick={handleClick}>次のプロフィール</button>
    </>
  );
}

export default App;
