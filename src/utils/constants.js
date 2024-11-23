export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR =
  "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e";

 export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
      // Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY
    }
  };

  export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

  export const BG_URL =
  "https://img.freepik.com/free-photo/cinematography-symbols-black-background_23-2147698946.jpg?t=st=1732363790~exp=1732367390~hmac=6ec0aa5e49f584b87134bfb74bdda10776e837669d65b30e52d9dd270b7b0996&w=1060"

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];



export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY
