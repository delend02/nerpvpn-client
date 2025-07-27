'use client'

import type { FC, MouseEventHandler } from 'react'

import {
	Button as HeroUIButton,
	ButtonGroup as HeroUIButtonGroup,
	ButtonGroupProps as HeroUIButtonGroupProps,
	ButtonProps as HeroUIButtonProps,
} from '@heroui/button'
import { Spinner } from '@heroui/react'

interface ButtonProps
	extends Pick<
		HeroUIButtonProps,
		| 'color'
		| 'variant'
		| 'size'
		| 'type'
		| 'className'
		| 'isDisabled'
		| 'isLoading'
		| 'radius'
		| 'startContent'
		| 'endContent'
		| 'isIconOnly'
		| 'aria-label'
		| 'title'
		| 'children'
	> {
	onClick?: MouseEventHandler<HTMLButtonElement> | undefined
}

export const Button: FC<ButtonProps> = ({ onClick, ...props }) => {
	return (
		<HeroUIButton
			{...props}
			type={!!onClick ? 'button' : 'submit'}
			onPress={onClick as any}
			spinner={props.isLoading ? <Spinner /> : undefined}
			title={props.title || props['aria-label'] || undefined}
			aria-label={props['aria-label'] || props.title || undefined}
		/>
	)
}

type ButtonGroupProps = Pick<
	HeroUIButtonGroupProps,
	'children' | 'variant' | 'color' | 'size' | 'radius' | 'fullWidth' | 'isDisabled'
>
export const ButtonGroup: FC<ButtonGroupProps> = (props) => <HeroUIButtonGroup {...props} />
