import "./App.css";
import { Card, Image } from "antd";
function App() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <label style={{ marginBottom: "20px", fontSize: "17px" }}>
        前端候选人肖建军 非在职期个人进修内容
      </label>
      <a href="https://docs.qq.com/mind/DT29kWVVJenRQVGlJ">Code Complete</a>{" "}
      <br></br>
      <a href="https://leetcode.cn/u/xiao_jianjun/">Leetcode</a> <br></br>
      <a href="https://docs.qq.com/mind/DT0tMaUhFdVVKV1hp">数据结构</a>{" "}
      <br></br>
      <a href="https://zhuanlan.zhihu.com/p/468146523">计算机网络</a> <br></br>
      <a href="https://docs.qq.com/mind/DT0lGRE1SUlNrSGZW">
        程序员的职业素养
      </a>{" "}
      <br></br>
      <a href="https://github.com/SoftwareEngineerPalace/Demo--design_pattern">
        设计模式
      </a>{" "}
      <br></br>
      <a href="https://zhuanlan.zhihu.com/p/502130522">Refactoring</a> <br></br>
      <a href="https://docs.qq.com/mind/DT3BNTUNZdmhVU3ZR">架构设计概论</a>
      <br></br>
      <a href="https://docs.qq.com/mind/DT3lwRWhIZUdUcEdp">electron</a>
      <br></br>
      <a href="https://docs.qq.com/mind/DT2RHd2FNdGJ5ek1Q">Chrome 扩展开发</a>
      <br></br>
      <Card title="计算机组成原理" style={{ marginBottom: "20px" }}>
        <a href="https://docs.qq.com/mind/DT2xKUlZ1U2pGT0Vw">体系概述</a>
        <br></br>
        <a href="https://docs.qq.com/mind/DT0lMdXREYXVGamR1">
          数据的表示与运算
        </a>
      </Card>
      <Card title="英语语法大全" style={{ marginBottom: "20px" }}>
        <a href="https://docs.qq.com/mind/DT2hUZXNYUU1PQllm">简单句 1</a>
        <br></br>
        <a href="https://docs.qq.com/mind/DT2hzam92RmpsYk5Q">简单句 2</a>
        <br></br>
        <a href="https://docs.qq.com/mind/DT1NhYnphakVlZm1z">长难句</a>
      </Card>
      <Card title="帮助记忆的小程序">
        <Image width={100} height={100} src="/assets/applet.jpg"></Image>
      </Card>
    </div>
  );
}

export default App;
