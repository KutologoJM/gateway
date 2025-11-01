import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
    collections: {
        blog: defineCollection({
            type: 'page',
            source: 'blog/*.md',

        }),
        wiki: defineCollection({
            type: 'page',
            source: 'wiki/*.md',

        })
    }
});
