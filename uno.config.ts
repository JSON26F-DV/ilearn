import transformerVariantGroup from '@unocss/transformer-variant-group'
import presetWind4 from '@unocss/preset-wind4'
import { defineConfig, presetAttributify } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'
import presetIcons from '@unocss/preset-icons'
import presetTagify from '@unocss/preset-tagify'
import { presetScrollbar } from 'unocss-preset-scrollbar'

export default defineConfig({
  theme: {
    fontFamily: {
      mountain: 'Mountain, sans-serif',
    },
  },

  shortcuts: [
    {
      flex_centered: 'flex flex-col items-center justify-center text-center',
      flex_full: 'flex flex-[1] w-100% h-100%',
    },
  ],

  presets: [
    presetWind4(),
    presetAttributify(),
    presetScrollbar(),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
        // ...
      },
    }),
    presetTagify(),
  ],
  transformers: [
    transformerVariantGroup(),
    transformerDirectives({
      applyVariable: ['--at-apply', '--uno-apply', '--uno'],
    }),
  ],
  safelist: ['fluent-color:options-32'],

  rules: [
    // Neutrals
    ['ivory', { color: '#dfdfd6' }],
    ['bg-ivory', { 'background-color': '#dfdfd6' }],

    ['obsidian', { color: '#202122' }],
    ['bg-obsidian', { 'background-color': '#202122' }],

    ['abyss', { color: '#112432' }],
    ['bg-abyss', { 'background-color': '#112432' }],

    // Greens
    ['emerald', { color: '#0d5938' }],
    ['bg-emerald', { 'background-color': '#0d5938' }],

    ['verdure', { color: '#2de193' }],
    ['bg-verdure', { 'background-color': '#2de193' }],

    ['moss', { color: '#03160e' }],
    ['bg-moss', { 'background-color': '#03160e' }],

    // Blues
    ['cobalt', { color: '#022164' }],
    ['bg-cobalt', { 'background-color': '#022164' }],

    ['azure', { color: '#0348dd' }],
    ['bg-azure', { 'background-color': '#0348dd' }],

    ['haze', { color: '#9bbafd' }],
    ['bg-haze', { 'background-color': '#9bbafd' }],

    // Gold
    ['sun', { color: '#e0bc2e' }],
    ['bg-sun', { 'background-color': '#e0bc2e' }],

    ['heading', { color: '#1a1a1a' }],
    ['body', { color: '#333333' }],
    ['small', { color: '#555555' }],
  ],
})
