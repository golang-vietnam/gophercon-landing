import { onLoading } from 'react-static'
import NProgress from 'nprogress'
import '@/css/nprogress.css'

export const init = () => {
  NProgress.configure({ minimum: 0.1, speed: 200, showSpinner: false })
}

export const unsubscribe = onLoading(loading => {
  loading ? NProgress.start() : NProgress.done()
})
