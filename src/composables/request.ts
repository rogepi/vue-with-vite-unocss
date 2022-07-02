import { createFetch } from '@vueuse/core'
// message

const baseUrl = import.meta.env.VITE_BASE_URL

export const useRequest = createFetch({
  baseUrl,
  options: {
    timeout: 10000,

    // 拦截器
    async beforeFetch({ options }) {
      const token = await getToken()
      options.headers = {
        ...options.headers,
        // 自定义请求头
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
      return { options }
    },

    afterFetch(ctx) {
      if (ctx.data !== null)
        return ctx.data
    },
    onFetchError(ctx) {
      // Message.error(ctx.data.message)
      return ctx
    },
  },
})

function getToken() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('token')
    }, 1000)
  },
  )
}
