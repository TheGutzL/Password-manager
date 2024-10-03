export const generateRandomUsername = (length = 8) => {
  const adjectives = [
    "Quick",
    "Bright",
    "Funny",
    "Silent",
    "Clever",
    "Brave",
    "Happy",
    "Sly",
    "Wise",
    "Bold",
  ];
  const nouns = [
    "Lion",
    "Tiger",
    "Bear",
    "Eagle",
    "Shark",
    "Wolf",
    "Hawk",
    "Dragon",
    "Panther",
    "Falcon",
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const randomItem = (array: any) =>
    array[Math.floor(Math.random() * array.length)];

  let username = "";
  username += randomItem(adjectives);
  username += randomItem(nouns);
  username += Math.floor(Math.random() * 1000);

  if (username.length > length) {
    username = username.substring(0, length);
  }

  return username;
};
