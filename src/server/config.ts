import { readConfig } from './readConfig'

export type ICEServer = {
  url: string
  urls: string[] | string
  auth: 'secret'
  username: string
  secret: string
} | {
  url: string
  urls: string[] | string
  auth: undefined
  username: string
  credential: string
}

export interface Config {
  baseUrl: string
  iceServers: ICEServer[]
  ssl?: {
    cert: string
    key: string
  }
  store?: StoreConfig
}

export type StoreConfig = {
  host: string
  port: number
  prefix: string
  type: 'redis'
} | {
  type: 'memory'
}

const cfg = readConfig()

export const config: Config = {
  baseUrl: cfg.get('baseUrl', ''),
  iceServers: cfg.get('iceServers'),
  ssl: cfg.get('ssl', undefined),
}
