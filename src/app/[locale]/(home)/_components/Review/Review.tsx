'use client'

import { type FC, useEffect, useState } from 'react'

import { useKeenSlider } from 'keen-slider/react'

import { Icon } from '@/ui/Icon/Icon'

import { clsx } from '@/utils/clsx'

import styles from './Review.module.css'
import 'keen-slider/keen-slider.min.css'

interface ReviewProps {}

const loremText =
	'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt provident sequi ab nostrum, deleniti quam! Tenetur delectus atque, debitis aliquid, eum quas odit ullam aspernatur ducimus cumque sequi deserunt nisi!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt provident sequi ab nostrum, deleniti quam! Tenetur delectus atque, debitis aliquid, eum quas odit ullam aspernatur ducimus cumque sequi deserunt nisi!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt provident sequi ab nostrum, deleniti quam! Tenetur delectus atque, debitis aliquid, eum quas odit ullam aspernatur ducimus cumque sequi deserunt nisi!'

const Review: FC<ReviewProps> = () => {
	const reviews = [
		{ name: '@t_gremlen', text: 'КРУТО!', stars: 5 },
		{ name: '@roomtei', text: loremText, stars: 4 },
		{ name: '@t_gremlen', text: loremText, stars: 3 },
		{ name: 'roomtei', text: loremText, stars: 2 },
		{ name: 'roomtei', text: loremText, stars: 1 },
	]

	const [perView, setPerView] = useState(1)

	useEffect(() => {
		const handleResize = () => {
			const w = window.innerWidth
			if (w >= 1024) setPerView(3)
			else if (w >= 640) setPerView(2)
			else setPerView(1)
		}

		handleResize() // Init
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	const [sliderRef] = useKeenSlider<HTMLDivElement>({
		loop: false,
		slides: {
			perView: perView,
			spacing: 16,
		},
	})

	return (
		<div className="max-w-7xl mx-auto px-4">
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
