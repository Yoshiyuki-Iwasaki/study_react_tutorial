import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [state, setState] = useState({ lName: "", fName: "" });
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
      <input
        value={state.lName}
        type="text"
        onChange={handleChange}
        name="lName"
      />
      <input
        value={state.fName}
        type="text"
        onChange={handleChange}
        name="fName"
      />
      <h2>
        {state.lName},{state.fName}様
      </h2>
      <h2>{firstGreeding}</h2>
      <h2>{finalGreeding}</h2>
    </div>
  );
}
