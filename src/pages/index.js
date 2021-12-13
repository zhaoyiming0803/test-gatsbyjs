import * as React from "react"

import { AuthingGuard } from '@authing/react-ui-components'
import '@authing/react-ui-components/lib/index.min.css'

const appId = '61ada53ae69e78d80e31d3e4'
const authingConfig = {
  apiHost: 'https://lb68p7-demo.authing.cn'
}

export async function getServerData() {
  try {
    const res = await fetch(`https://dog.ceo/api/breeds/image/random`)
    if (!res.ok) {
      throw new Error(`Response failed`)
    }
    return {
      props: await res.json(),
    }
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: {}
    }
  }
}

function onLogin (userInfo) {
  console.log('userInfo: ', userInfo)
}

const SSRPage = ({ serverData }) => (
  <main>
    <h1>SSR Page with Dogs</h1>
    <img alt="Happy dog" src={serverData.message} />
    <AuthingGuard appId={appId} config={authingConfig} onLogin={onLogin}></AuthingGuard>
  </main>
)

export default SSRPage
