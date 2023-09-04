/*eslint-disable*/
export default function (ctx, inject) {
    let {
        app: { $axios },
    } = ctx;
const yaska = $axios.create()
yaska.defaults.withCredentials = true
yaska.setBaseURL(process.env.baseURL)
inject('yaskaApi', yaska)
}