import { EnvConfig } from 'types'
import { constants } from './constants'

const validateEnv = (key: keyof EnvConfig): string => {
  const value = process.env[key]
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`)
  }
  return value
}

export const environmentConfig: EnvConfig = {
  DATO_TOKEN: validateEnv('DATO_TOKEN'),
  DATO_PREVIEW: validateEnv('DATO_PREVIEW') === 'true',
}

export const config = {
  ...environmentConfig,
  ...constants,
}
