import { useState } from "react";

function App() {
  const defaultText = "Hallo Hansi Pansi";
  const [text, setText] = useState(defaultText);

  const onCLick = () => {
    setText(text === defaultText ? randomEmoji() : defaultText);
  };

  return (
    <div className="w-full h-screen bg-slate-100 flex items-center  justify-center">
      <button
        onClick={onCLick}
        className="text-7xl p-4 rounded-lg border-2 border-gray-500 shadow"
      >
        <span>{text}</span>
      </button>
    </div>
  );
}

const emojis = [
  "😀",
  "😃",
  "😄",
  "😁",
  "😆",
  "😅",
  "😂",
  "🤣",
  "🥲",
  "🥹",
  "☺️",
  "😊",
  "😇",
  "🙂",
  "🙃",
  "😉",
  "😌",
  "😍",
  "🥰",
  "😘",
  "😗",
  "😙",
  "😚",
  "😋",
  "😛",
  "😝",
  "😜",
  "🤪",
  "🤨",
  "🧐",
  "🤓",
  "😎",
  "🥸",
  "🤩",
  "🥳",
  "😏",
  "😒",
  "😞",
  "😔",
  "😟",
  "😕",
  "🙁",
  "☹️",
  "😣",
  "😖",
  "😫",
  "😩",
  "🥺",
  "😢",
  "😭",
  "😮‍💨",
  "😤",
  "😠",
  "😡",
  "🤬",
  "🤯",
  "😳",
  "🥵",
  "🥶",
  "😱",
  "😨",
  "😰",
  "😥",
  "😓",
  "🫣",
  "🤗",
  "🫡",
  "🤔",
  "🫢",
  "🤭",
  "🤫",
  "🤥",
  "😶",
  "😶‍🌫️",
  "😐",
  "😑",
  "😬",
  "🫨",
  "🫠",
  "🙄",
  "😯",
  "😦",
  "😧",
  "😮",
  "😲",
  "🥱",
  "😴",
  "🤤",
  "😪",
  "😵",
  "😵‍💫",
  "🫥",
  "🤐",
  "🥴",
  "🤢",
  "🤮",
  "🤧",
  "😷",
  "🤒",
  "🤕",
  "🤑",
  "🤠",
  "😈",
  "👿",
  "👹",
  "👺",
  "🤡",
  "💩",
  "👻",
  "💀",
  "☠️",
  "👽",
  "👾",
  "🤖",
  "🎃",
  "😺",
  "😸",
  "😹",
  "😻",
  "😼",
  "😽",
  "🙀",
  "😿",
  "😾👋",
  "🤚",
  "🖐",
  "✋",
  "🖖",
  "👌",
  "🤌",
  "🤏",
  "✌️",
  "🤞",
  "🫰",
  "🤟",
  "🤘",
  "🤙",
  "🫵",
  "🫱",
  "🫲",
  "🫸",
  "🫷",
  "🫳",
  "🫴",
  "👈",
  "👉",
  "👆",
  "🖕",
  "👇",
  "☝️",
  "👍",
  "👎",
  "✊",
  "👊",
  "🤛",
  "🤜",
  "👏",
  "🫶",
  "🙌",
  "👐",
  "🤲",
  "🤝",
  "🙏",
  "✍️",
  "💅",
  "🤳",
  "💪",
  "🦾",
  "🦵",
  "🦿",
  "🦶",
  "👣",
  "👂",
  "🦻",
  "👃",
  "🫀",
  "🫁",
  "🧠",
  "🦷",
  "🦴",
  "👀",
  "👁",
  "👅",
  "👄",
  "🫦",
  "💋",
  "🩸",
  "👶",
  "👧",
  "🧒",
  "👦",
  "👩",
  "🧑",
  "👨",
  "👩‍🦱",
  "🧑‍🦱",
  "👨‍🦱",
  "👩‍🦰",
  "🧑‍🦰",
  "👨‍🦰",
  "👱‍♀️",
  "👱",
  "👱‍♂️",
  "👩‍🦳",
  "🧑‍🦳",
  "👨‍🦳",
  "👩‍🦲",
  "🧑‍🦲",
  "👨‍🦲",
  "🧔‍♀️",
  "🧔",
  "🧔‍♂️",
  "👵",
  "🧓",
  "👴",
  "👲",
  "👳‍♀️",
  "👳",
  "👳‍♂️",
  "🧕",
  "👮‍♀️",
  "👮",
  "👮‍♂️",
  "👷‍♀️",
  "👷",
  "👷‍♂️",
  "💂‍♀️",
  "💂",
  "💂‍♂️",
  "🕵️‍♀️",
  "🕵️",
  "🕵️‍♂️",
  "👩‍⚕️",
  "🧑‍⚕️",
  "👨‍⚕️",
  "👩‍🌾",
  "🧑‍🌾",
  "👨‍🌾",
  "👩‍🍳",
  "🧑‍🍳",
  "👨‍🍳",
  "👩‍🎓",
  "🧑‍🎓",
  "👨‍🎓",
  "👩‍🎤",
  "🧑‍🎤",
  "👨‍🎤",
  "👩‍🏫",
  "🧑‍🏫",
  "👨‍🏫",
  "👩‍🏭",
  "🧑‍🏭",
  "👨‍🏭",
  "👩‍💻",
  "🧑‍💻",
  "👨‍💻",
  "👩‍💼",
  "🧑‍💼",
  "👨‍💼",
  "👩‍🔧",
  "🧑‍🔧",
  "👨‍🔧",
  "👩‍🔬",
  "🧑‍🔬",
  "👨‍🔬",
  "👩‍🎨",
  "🧑‍🎨",
  "👨‍🎨",
  "👩‍🚒",
  "🧑‍🚒",
  "👨‍🚒",
  "👩‍✈️",
  "🧑‍✈️",
  "👨‍✈️",
  "👩‍🚀",
  "🧑‍🚀",
  "👨‍🚀",
  "👩‍⚖️",
  "🧑‍⚖️",
  "👨‍⚖️",
  "👰‍♀️",
  "👰",
  "👰‍♂️",
  "🤵‍♀️",
  "🤵",
  "🤵‍♂️",
  "👸",
  "🫅",
  "🤴",
  "🥷",
  "🦸‍♀️",
  "🦸",
  "🦸‍♂️",
  "🦹‍♀️",
  "🦹",
  "🦹‍♂️",
  "🤶",
  "🧑‍🎄",
  "🎅",
  "🧙‍♀️",
  "🧙",
  "🧙‍♂️",
  "🧝‍♀️",
  "🧝",
  "🧝‍♂️",
  "🧛‍♀️",
  "🧛",
  "🧛‍♂️",
  "🧟‍♀️",
  "🧟",
  "🧟‍♂️",
  "🧞‍♀️",
  "🧞",
  "🧞‍♂️",
  "🧜‍♀️",
  "🧜",
  "🧜‍♂️",
  "🧚‍♀️",
  "🧚",
  "🧚‍♂️",
  "🧌",
  "👼",
  "🤰",
  "🫄",
  "🫃",
  "🤱",
  "👩‍🍼",
  "🧑‍🍼",
  "👨‍🍼",
  "🙇‍♀️",
  "🙇",
  "🙇‍♂️",
  "💁‍♀️",
  "💁",
  "💁‍♂️",
  "🙅‍♀️",
  "🙅",
  "🙅‍♂️",
  "🙆‍♀️",
  "🙆",
  "🙆‍♂️",
  "🙋‍♀️",
  "🙋",
  "🙋‍♂️",
  "🧏‍♀️",
  "🧏",
  "🧏‍♂️",
  "🤦‍♀️",
  "🤦",
  "🤦‍♂️",
  "🤷‍♀️",
  "🤷",
  "🤷‍♂️",
  "🙎‍♀️",
  "🙎",
  "🙎‍♂️",
  "🙍‍♀️",
  "🙍",
  "🙍‍♂️",
  "💇‍♀️",
  "💇",
  "💇‍♂️",
  "💆‍♀️",
  "💆",
  "💆‍♂️",
  "🧖‍♀️",
  "🧖",
  "🧖‍♂️",
  "💅",
  "🤳",
  "💃",
  "🕺",
  "👯‍♀️",
  "👯",
  "👯‍♂️",
  "🕴",
  "👩‍🦽",
  "🧑‍🦽",
  "👨‍🦽",
  "👩‍🦼",
  "🧑‍🦼",
  "👨‍🦼",
  "🚶‍♀️",
  "🚶",
  "🚶‍♂️",
  "👩‍🦯",
  "🧑‍🦯",
  "👨‍🦯",
  "🧎‍♀️",
  "🧎",
  "🧎‍♂️",
  "🏃‍♀️",
  "🏃",
  "🏃‍♂️",
  "🧍‍♀️",
  "🧍",
  "🧍‍♂️",
  "👭",
  "🧑‍🤝‍🧑",
  "👬",
  "👫",
  "👩‍❤️‍👩",
  "💑",
  "👨‍❤️‍👨",
  "👩‍❤️‍👨",
  "👩‍❤️‍💋‍👩",
  "💏",
  "👨‍❤️‍💋‍👨",
  "👩‍❤️‍💋‍👨",
  "👪",
  "👨‍👩‍👦",
  "👨‍👩‍👧",
  "👨‍👩‍👧‍👦",
  "👨‍👩‍👦‍👦",
  "👨‍👩‍👧‍👧",
  "👨‍👨‍👦",
  "👨‍👨‍👧",
  "👨‍👨‍👧‍👦",
  "👨‍👨‍👦‍👦",
  "👨‍👨‍👧‍👧",
  "👩‍👩‍👦",
  "👩‍👩‍👧",
  "👩‍👩‍👧‍👦",
  "👩‍👩‍👦‍👦",
  "👩‍👩‍👧‍👧",
  "👨‍👦",
  "👨‍👦‍👦",
  "👨‍👧",
  "👨‍👧‍👦",
  "👨‍👧‍👧",
  "👩‍👦",
  "👩‍👦‍👦",
  "👩‍👧",
  "👩‍👧‍👦",
  "👩‍👧‍👧",
  "🗣",
  "👤",
  "👥",
  "🫂",
  "🧳",
  "🌂",
  "☂️",
  "🧵",
  "🪡",
  "🪢",
  "🪭",
  "🧶",
  "👓",
  "🕶",
  "🥽",
  "🥼",
  "🦺",
  "👔",
  "👕",
  "👖",
  "🧣",
  "🧤",
  "🧥",
  "🧦",
  "👗",
  "👘",
  "🥻",
  "🩴",
  "🩱",
  "🩲",
  "🩳",
  "👙",
  "👚",
  "👛",
  "👜",
  "👝",
  "🎒",
  "👞",
  "👟",
  "🥾",
  "🥿",
  "👠",
  "👡",
  "🩰",
  "👢",
  "👑",
  "👒",
  "🎩",
  "🎓",
  "🧢",
  "⛑",
  "🪖",
  "💄",
  "💍",
  "💼",
  "",
  "🐶",
  "🐱",
  "🐭",
  "🐹",
  "🐰",
  "🦊",
  "🐻",
  "🐼",
  "🐻‍❄️",
  "🐨",
  "🐯",
  "🦁",
  "🐮",
  "🐷",
  "🐽",
  "🐸",
  "🐵",
  "🙈",
  "🙉",
  "🙊",
  "🐒",
  "🐔",
  "🐧",
  "🐦",
  "🐦‍⬛",
  "🐤",
  "🐣",
  "🐥",
  "🦆",
  "🦅",
  "🦉",
  "🦇",
  "🐺",
  "🐗",
  "🐴",
  "🦄",
  "🐝",
  "🪱",
  "🐛",
  "🦋",
  "🐌",
  "🐞",
  "🐜",
  "🪰",
  "🪲",
  "🪳",
  "🦟",
  "🦗",
  "🕷",
  "🕸",
  "🦂",
  "🐢",
  "🐍",
  "🦎",
  "🦖",
  "🦕",
  "🐙",
  "🦑",
  "🦐",
  "🦞",
  "🦀",
  "🪼",
  "🪸",
  "🐡",
  "🐠",
  "🐟",
  "🐬",
  "🐳",
  "🐋",
  "🦈",
  "🐊",
  "🐅",
  "🐆",
  "🦓",
  "🫏",
  "🦍",
  "🦧",
  "🦣",
  "🐘",
  "🦛",
  "🦏",
  "🐪",
  "🐫",
  "🦒",
  "🦘",
  "🦬",
  "🐃",
  "🐂",
  "🐄",
  "🐎",
  "🐖",
  "🐏",
  "🐑",
  "🦙",
  "🐐",
  "🦌",
  "🫎",
  "🐕",
  "🐩",
  "🦮",
  "🐕‍🦺",
  "🐈",
  "🐈‍⬛",
  "🪽",
  "🪶",
  "🐓",
  "🦃",
  "🦤",
  "🦚",
  "🦜",
  "🦢",
  "🪿",
  "🦩",
  "🕊",
  "🐇",
  "🦝",
  "🦨",
  "🦡",
  "🦫",
  "🦦",
  "🦥",
  "🐁",
  "🐀",
  "🐿",
  "🦔",
  "🐾",
  "🐉",
  "🐲",
  "🌵",
  "🎄",
  "🌲",
  "🌳",
  "🌴",
  "🪹",
  "🪺",
  "🪵",
  "🌱",
  "🌿",
  "☘️",
  "🍀",
  "🎍",
  "🪴",
  "🎋",
  "🍃",
  "🍂",
  "🍁",
  "🍄",
  "🐚",
  "🪨",
  "🌾",
  "💐",
  "🌷",
  "🪷",
  "🌹",
  "🥀",
  "🌺",
  "🌸",
  "🪻",
  "🌼",
  "🌻",
  "🌞",
  "🌝",
  "🌛",
  "🌜",
  "🌚",
  "🌕",
  "🌖",
  "🌗",
  "🌘",
  "🌑",
  "🌒",
  "🌓",
  "🌔",
  "🌙",
  "🌎",
  "🌍",
  "🌏",
  "🪐",
  "💫",
  "⭐️",
  "🌟",
  "✨",
  "⚡️",
  "☄️",
  "💥",
  "🔥",
  "🌪",
  "🌈",
  "☀️",
  "🌤",
  "⛅️",
  "🌥",
  "☁️",
  "🌦",
  "🌧",
  "⛈",
  "🌩",
  "🌨",
  "❄️",
  "☃️",
  "⛄️",
  "🌬",
  "💨",
  "💧",
  "💦",
  "🫧",
  "☔️",
  "☂️",
  "🌊",
  "🌫",
];

const randomEmoji = (): string => {
  const res = emojis[Math.floor(Math.random() * emojis.length)];
  if (res) {
    return res;
  }
  return randomEmoji();
};

export default App;
