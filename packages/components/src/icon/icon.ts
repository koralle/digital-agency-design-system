import type {
  OutlinedIconToken,
  RoundedIconToken,
  SharpIconToken,
} from './tokens'

export type IconToken =
  | OutlinedIconToken
  | RoundedIconToken
  | SharpIconToken
  | (string & Record<never, never>)
export type IconType = 'outlined' | 'rounded' | 'sharp'
export type IconWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700
export type IconGrade = -25 | 0 | 200
export type IconSize = 16 | 20 | 24 | 32 | 40 | 48

export interface IconProps {
  id?: string
  role?: string
  color?: string
  icon: IconToken
  type?: IconType
  fill?: boolean
  weight?: IconWeight
  grade?: IconGrade
  size?: IconSize
  ariaLabel?: string
  ariaHidden?: boolean
}
