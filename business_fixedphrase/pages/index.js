import { getDomainLocale } from "next/dist/next-server/lib/router/router";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [state, setState] = useState({ yourName: "", myName: "", content: "" });
  const firstGreeding = `お世話になっております`;
  const finalGreeding = `以上、よろしくお願いいたします`;
  const handleChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="container">
      <Head>
        <title>biz-text-gen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>ビジネス文章ジェネレーター</h1>
      <p>相手の名前:</p>
      <input
        value={state.yourName}
        type="text"
        onChange={handleChange}
        name="yourName"
      />
      <p>自分の名前:</p>
      <input
        value={state.myName}
        type="text"
        onChange={handleChange}
        name="myName"
      />
      <p>メール内容:</p>
      <input
        value={state.content}
        type="text"
        onChange={handleChange}
        name="content"
      />
      <hr />
      <h2>{state.yourName}様</h2>
      <h2>{firstGreeding}</h2>
      <h2>{state.myName}と申します。</h2>
      <h2>{state.content}</h2>
      <h2>{finalGreeding}</h2>
      <h2>{state.myName}</h2>
    </div>
  );
}
