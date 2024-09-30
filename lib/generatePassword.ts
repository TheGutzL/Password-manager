export const generatePassword = (lenght = 12) => {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
  let password = "";
  for (let i = 0, n = charset.length; i < lenght; i++) {
    password += charset.charAt(Math.floor(Math.random() * n));
  }

  return password;
};
