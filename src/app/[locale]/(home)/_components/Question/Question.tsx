'use client'

import type { FC } from 'react'

import { Accordion, AccordionItem } from '@heroui/react'

import { Icon } from '@/ui/Icon/Icon'

import styles from './Question.module.css'

interface QuestionProps {}

const faqItems = [
	{
		key: '1',
		title: 'Что такое ваш сервис?',
		content: 'Наш сервис предоставляет безопасное и быстрое подключение к сети через VPN.',
	},
	{
		key: '2',
		title: 'Как установить приложение?',
		content: 'Скачайте приложение с сайта, установите и следуйте простым инструкциям.',
	},
	{
		key: '3',
		title: 'Есть ли бесплатный период?',
		content: 'Да, у нас есть 7-дневный пробный период с полным функционалом.',
	},
]

const Question: FC<QuestionProps> = () => {
	return (
		<Accordion variant="splitted">
			{faqItems.map(({ key, title, content }) => (
				<AccordionItem
					key={key}
					aria-label={`Accordion ${key}`}
					classNames={{
						base: '!shadow-none p-4 px-8',
					}}
					title={<span className={styles.title}>{title}</span>}
					indicator={({ isOpen }) =>
						!isOpen ? (
							<Icon size={20} type="plus" />
						) : (
							<Icon className="rotate-90" size={20} type="minus" />
						)
					}
				>
					<span className={styles.content}>{content}</span>
				</AccordionItem>
			))}
		</Accordion>
	)
}

export default Question
