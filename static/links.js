// export const EE_KUMULUZ_URL = "https://ee.kumuluz.com";
// export const IO_KUMULUZ_URL = "https://kumuluz.io";
export const SUNESIS_URL = "https://sunesis.si";
// export const MICROPROFILE_URL = "https://microprofile.io";
// export const GITHUB_ORG_KUMULUZ = "https://github.com/kumuluz";

const sunesisLanguage = language => language === "sl" ? "sl" : "en";

export const getSunesisInsightsUrl = language =>
    `${SUNESIS_URL}/${sunesisLanguage(language)}/insights/`;

export const getSunesisContactUrl = language =>
    `${SUNESIS_URL}/${sunesisLanguage(language)}/#contact`;
//other links are in locales/common.json

// export const KUMULUZ_DIGITAL = {
//     API_URL: "https://api.kumuluz.com"
// };

// export const SOCIAL = {
//     TWITTER_URL: "https://twitter.com/kumuluz",
//     LINKEDIN_URL: "https://www.linkedin.com/company/kumuluz"
// };
