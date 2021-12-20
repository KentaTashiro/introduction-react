import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
  console.log("最初");
  const [num, setNum] = useState(0);
  const [faceShowFlg, setFaceShowFlg] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlg || setFaceShowFlg(true);
      } else {
        faceShowFlg && setFaceShowFlg(false);
      }
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  const onClickSwitchShowFlg = () => {
    setFaceShowFlg(!faceShowFlg);
  };

  return (
    <>
      <h1 style={{ color: "red" }}>index.jsを読み込んでるよ！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ！</button>
      <p>{num}</p>
      <button onClick={onClickSwitchShowFlg}>on/off</button>
      {faceShowFlg && <p>(≧▽≦)</p>}
    </>
  );
};

// export default App;
