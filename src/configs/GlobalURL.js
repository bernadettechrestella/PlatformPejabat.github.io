var BASEURL = 'https://apirajawaliloginandregister.herokuapp.com/'
var NEWS2URL = 'https://berita-indo-api.vercel.app/'
var NEWSURL = 'https://newsapi.org/'

module.exports = {
    API_URL_AUTH : `${BASEURL}api/user/`,
    API_URL_NEWS : `${NEWSURL}v2/top-headlines?country=id&apiKey=f6b37ebf032b442cb81d45842aaac861`,
    API_URL_NEWS2 : `${NEWS2URL}v1/antara-news/politik`
}