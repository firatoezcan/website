export const getImage = (src: string) => {
  if (src.charAt(0) === "/") src = src.substring(1)
  try {
    return require(`public/${src}`);
  } catch (error) {
    if (error.code === "MODULE_NOT_FOUND") {
      return require("public/static/notfound.png")
    }
    throw error
  }
};
