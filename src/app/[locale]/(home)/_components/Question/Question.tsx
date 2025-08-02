'use client'

import type { FC } from 'react'

import { Accordion, AccordionItem } from '@heroui/react'

import { Icon } from '@/ui/Icon/Icon'

import styles from './Question.module.css'

import { useScopedI18n } from '@/locales/client'

interface QuestionProps {}

const Question: FC<QuestionProps> = () => {
	const t = useScopedI18n('pages.home.section_9.faq')

	const faqItems = [
		{ key: '1', question: t('0.question'), answer: t('0.answer') },
		{ key: '2', question: t('1.question'), answer: t('1.answer') },
		{ key: '3', question: t('2.question'), answer: t('2.answer') },
		{ key: '4', question: t('3.question'), answer: t('3.answer') },
		{ key: '5', question: t('4.question'), answer: t('4.answer') },
		{ key: '6', question: t('5.question'), answer: t('5.answer') },
		{ key: '7', question: t('6.question'), answer: t('6.answer') },
	]

	return (
		<Accordion variant="splitted">
			{faqItems.map(({ question, answer }, index) => (
				<AccordionItem
					key={index}
					aria-label={`Accordion ${index}`}
					classNames={{
						base: '!shadow-none p-4 tb:p-6 ds:p-7',
						trigger: 'p-0',
						content: 'pt-2 tb:pt-4',
					}}
					title={<span className={styles.title}>{question}</span>}
					indicator={({ isOpen }) =>
						!isOpen ? (
							<Icon size={20} type="plus" />
						) : (
							<Icon className="rotate-90" size={20} type="minus" />
						)
					}
				>
					<span className={styles.content}>{answer}</span>
				</AccordionItem>
			))}
		</Accordion>
	)
}

export default Question
