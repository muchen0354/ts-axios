import { transformRequest, transformResponse } from '../helper/data'
import { flattenHeaders, processHeaders } from '../helper/headers'
import { buildURL } from '../helper/url'
import { AxiosPromise, AxiosRequestConfig, AxiosResponse } from '../types'
import xhr from './xhr'

export default function dispatchRequest(config: AxiosRequestConfig): AxiosPromise {
  processConfig(config)
  console.log('config', config)
  return xhr(config).then(res => {
    return transformResponseData(res)
  })
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = transformUrl(config)
  config.headers = transformHeaders(config)
  config.data = transformData(config)
  config.headers = flattenHeaders(config.headers, config.method!)
}

function transformUrl(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url!, params)
}

function transformData(config: AxiosRequestConfig): any {
  return transformRequest(config.data)
}

function transformHeaders(config: AxiosRequestConfig):any {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}

function transformResponseData(res: AxiosResponse): AxiosResponse {
  res.data = transformResponse(res.data)
  return res
}