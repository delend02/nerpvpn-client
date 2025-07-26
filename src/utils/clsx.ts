import cl, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const clsx = (...inputs: ClassValue[]) => {
	return twMerge(cl(inputs))
}
