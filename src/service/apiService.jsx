import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

// const options = {
//   params: {
//     q: "search_query",
//     maxResults: "50",
//   },

//   headers: {
//     "x-rapidapi-key": import.meta.env.VITE_PUBLIC_KEY,
//     "x-rapidapi-host": BASE_URL,
//     "Cache-Control": "no-cache",
//   },
// };

const options = {
  params: {
    // relatedToVideoId: "7ghhRHRP6t4", // Misol uchun, video ID
    // part: "id,snippet",
    // type: "video",
    maxResults: "50",
  },
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_PUBLIC_KEY,
    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
    "Cache-Control": "no-cache",
  },
};

export const AppService = {
  async fetching(url) {
    const response = await axios.get(`${BASE_URL}/${url}`, options);
    return response.data;
  },
};

// export const AppService = async () => {
//   try {
//     const response = await axios.get(
//       "https://youtube-v31.p.rapidapi.com/search",
//       {
//         params: {
//           relatedToVideoId: "7ghhRHRP6t4",
//           part: "id,snippet",
//           type: "video",
//           maxResults: 50,
//         },
//         headers: {
//           "x-rapidapi-key": "your_actual_api_key",
//           "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
//         },
//       }
//     );
//     console.log("API javobi:", response.data);
//   } catch (error) {
//     console.error("Xatolik yuz berdi:", error);
//   }
// };
// AppService();

// async fetching() {
//   const response = await axios.get(
//     `${BASE_URL}/search?q=search_query&maxResults=50`,

//     {
//       headers: {
//         "x-rapidapi-key": import.meta.env.VITE_PUBLIC_KEY,
//         "x-rapidapi-host": " youtube-v31.p.rapidapi.com",
//       },
//     }
//   );
//   return response.data;
// },

// const response = await axios.get(
//   "/youtube-media-downloader/search?q=search_query&maxResults=50",
//   `/${url}`,
//   options
// );
