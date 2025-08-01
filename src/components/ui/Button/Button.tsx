'use client'

import type { FC, MouseEventHandler } from 'react'

import {
	Button as HeroUIButton,
	ButtonGroup as HeroUIButtonGroup,
	ButtonGroupProps as HeroUIButtonGroupProps,
	ButtonProps as HeroUIButtonProps,
} from '@heroui/button'
import { Link, Spinner } from '@heroui/react'

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
		| 'href'
	> {
	onClick?: MouseEventHandler<HTMLButtonElement> | undefined
	isExternal?: boolean
}

export const Button: FC<ButtonProps> = ({ onClick, isExternal, ...props }) => {
	return (
		<HeroUIButton
			{...props}
			as={!!props.href ? Link : undefined}
			isExternal={isExternal}
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
