import { type FC } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

import { TextAreaProps as HeroUITextAreaProps, Textarea as HeroUITextarea } from '@heroui/input'

export interface InputProps
	extends Pick<
		HeroUITextAreaProps,
		| 'label'
		| 'labelPlacement'
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
		| 'onChange'
		| 'startContent'
		| 'endContent'
		| 'description'
		| 'autoComplete'
		| 'minRows'
		| 'maxRows'
		| 'onKeyDown'
		| 'isInvalid'
	> {
	// react-hook-form
	register: UseFormRegisterReturn<any>
	registerFile?: UseFormRegisterReturn<any>

	error?: string | boolean | undefined
}

export const Textarea: FC<InputProps> = ({ register, error, ...props }) => {
	return (
		<HeroUITextarea
			{...props}
			{...register}
			isInvalid={!!error || props.isInvalid}
			errorMessage={typeof error === 'string' ? error : undefined}
		/>
	)
}
