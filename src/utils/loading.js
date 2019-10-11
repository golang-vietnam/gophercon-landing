import NProgress from 'nprogress'
import '@/css/nprogress.css'

export const init = () => {
  NProgress.configure({ minimum: 0.1, speed: 200, showSpinner: false })
}
