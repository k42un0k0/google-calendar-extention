import { Message } from "./messages";

chrome.runtime.onMessage.addListener((message: Message) => {
  switch (message.type) {
  }
});
