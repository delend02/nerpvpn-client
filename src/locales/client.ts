'use client'

import { createI18nClient } from 'next-international/client'

import { importLocales } from './config'

export const { useI18n, useScopedI18n, I18nProviderClient, useChangeLocale, useCurrentLocale } =
	createI18nClient(importLocales)
