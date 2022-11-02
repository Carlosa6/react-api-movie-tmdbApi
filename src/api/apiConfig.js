const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "b991ec41d01d303eaa40772b4d204325",
  getOriginalImage: (imagePath) => {
    if (imagePath) {
      return `https://image.tmdb.org/t/p/original/${imagePath}`;
    } else {
      return "https://cdn.pixabay.com/photo/2021/07/21/12/49/error-6482984_960_720.png";
    }
  },
  getw500Image: (imagePath) => {
    if (imagePath) {
      return `https://image.tmdb.org/t/p/w500/${imagePath}`;
    } else {
      return "https://cdn.pixabay.com/photo/2021/07/21/12/49/error-6482984_960_720.png";
    }
  },
  getVideoUrl: (videoItem) => `https://www.youtube.com/embed/${videoItem}`,
};

export default apiConfig;
