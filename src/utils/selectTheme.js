const themeList = [
  {
    background: "#000",
    color: "#fff",
    text: "default"
  },
  {
    background: "#ceeaba",
    color: "#333",
    text: "eye"
  },
  {
    background: "#eee",
    color: "#333",
    text: "night"
  },
  {
    background: "rgb(241, 236, 226)",
    color: "#333",
    text: "gold"
  }
];

const selectTheme = selector => {
  switch (selector) {
    case "ALL":
      return themeList;
    case "default":
      return themeList[0];
    case "eye":
      return themeList[1];
    case "night":
      return themeList[2];
    case "gold":
      return themeList[3];
    default:
      return themeList;
  }
};

export default selectTheme;
