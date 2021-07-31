import { useEffect, useState } from "react";
import { Message } from "../messages";

export default function App() {
  const [selector, setSelector] = useState("");
  useEffect(() => {
    chrome.storage.local.get({ selector }, ({ selector }) => {
      setSelector(selector);
    });
    chrome.runtime.onMessage.addListener((message: Message) => {});
  }, []);

  return <div style={{ padding: 20 }}></div>;
}
