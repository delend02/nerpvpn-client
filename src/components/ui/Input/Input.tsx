import { type FC } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

import { Input as HeroUIInput, InputProps as HeroUIInputProps } from '@heroui/input'

import { PasswordInput } from './components/Password'

export interface InputProps
	extends Pick<
		HeroUIInputProps,
		| 'label'
		| 'labelPlacement'
		| 'type'
		| 'placeholder'
		| 'className'
		| 'classNames'
		| 'defaultValue'
		| 'variant'
		| 'size'
		| 'color'
		| 'radius'
		| 'isDisabled'
		| 'isReadOnly'
		| 'isRequired'
		| 'isClearable'
		| 'onClear'
		| 'value'
		| 'onValueChange'
		| 'startContent'
		| 'endContent'
		| 'description'
		| 'autoComplete'
		| 'isInvalid'
	> {
	// react-hook-form
	register: UseFormRegisterReturn<any>
	registerFile?: UseFormRegisterReturn<any>

	isPassword?: boolean
	error?: string | boolean | undefined
}

export const Input: FC<InputProps> = ({ isPassword, register, error, ...props }) => {
	if (!isPassword)
		return (
			<HeroUIInput
				{...props}
				{...register}
				isInvalid={!!error || props.isInvalid}
				errorMessage={typeof error === 'string' ? error : undefined}
			/>
		)
	else return <PasswordInput {...props} register={register} error={error} />
}
