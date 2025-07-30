'use client'

import { type FC } from 'react'

import { useKeenSlider } from 'keen-slider/react'

import { Icon } from '@/ui/Icon/Icon'

import { clsx } from '@/utils/clsx'

import styles from './Review.module.css'
import 'keen-slider/keen-slider.min.css'

const loremText =
	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt provident sequi ab nostrum, deleniti quam! Tenetur delectus atque, debitis aliquid, eum quas odit ullam aspernatur ducimus cumque sequi deserunt nisi!'

const Review: FC = () => {
	const reviews = [
		{ name: '@t_gremlen', text: 'КРУТО!', stars: 5 },
		{ name: '@roomtei', text: loremText, stars: 4 },
		{ name: '@t_gremlen', text: loremText, stars: 3 },
		{ name: 'roomtei', text: loremText, stars: 2 },
		{ name: 'roomtei', text: loremText, stars: 1 },
	]

	const [sliderRef] = useKeenSlider<HTMLDivElement>({
		loop: false,
		slides: {
			perView: 1,
			spacing: 10,
		},
		breakpoints: {
			'(min-width: 640px)': {
				slides: {
					perView: 2,
					spacing: 16,
				},
			},
			'(min-width: 1024px)': {
				slides: {
					perView: 3,
					spacing: 16,
				},
			},
		},
	})

	return (
		<div className="w-full mx-auto px-4 ">
			<div ref={sliderRef} className="keen-slider">
				{reviews.map((review, index) => (
					<div key={index} className={clsx(styles.slide, 'keen-slider__slide')}>
						<span className={styles.name}>{review.name}</span>
						<p className={styles.text}>{review.text}</p>
						<div>
							{Array.from({ length: review.stars }, (_, i) => (
								<Icon size={25} key={i} type="star" />
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Review
