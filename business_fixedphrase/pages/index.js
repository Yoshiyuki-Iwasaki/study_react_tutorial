import { getDomainLocale } from "next/dist/next-server/lib/router/router";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [state, setState] = useState({ yourName: "", myName: "", content: "" });
  const firstGreeding = `お世話になっております。`;
  const finalGreeding = `何卒よろしくお願いいたします。`;
  const handleChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="container">
      <section className="topPageSection">
        <div className="topPageSection__left">
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
          <textarea
            value={state.content}
            type="text"
            onChange={handleChange}
            name="content"
          ></textarea>
        </div>
        <div className="topPageSection__right">
          <p className="topPageSection__right__text">{state.yourName}様</p>
          <p className="topPageSection__right__text">{firstGreeding}</p>
          <p className="topPageSection__right__text">{state.myName}と申します。</p>
          <p className="topPageSection__right__text">{state.content}</p>
          <p className="topPageSection__right__text">{finalGreeding}</p>
          <p className="topPageSection__right__text">{state.myName}</p>
        </div>
      </section>
    </div>
  );
}
