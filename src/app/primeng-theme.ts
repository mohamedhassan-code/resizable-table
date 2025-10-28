import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
import { PrimeNGConfigType } from 'primeng/config';

const preset = definePreset(Aura, {
  semantic: {
    colorScheme: {
      light: {
        primary: {
          '50': '#E6EEF3',
          '100': '#CCDDE7',
          '200': '#99BBCF',
          '300': '#6699B7',
          '400': '#33779F',
          '500': '#003462',
          '600': '#002E58',
          '700': '#00274E',
          '800': '#002044',
          '900': '#001A3A', // Darkest shade
        },
        surface: {
          '0': '#ffffff',
          '50': '#F9FAFB',
          '100': '#F3F4F6',
          '200': '#E5E7EB',
          '300': '#D1D5DB',
          '400': '#9CA3AF',
          '500': '#6B7280',
          '600': '#4B5563',
          '700': '#374151',
          '800': '#1F2937',
          '900': '#111827',
          '950': '#0d111c',
        },

        formField: {
          background: '{surface.0}',
          borderColor: '{gray.300}',
          borderColorHover: '{primary.100}',
          color: '{primary.700}',
          placeholderColor: '{gray.700}',
          paddingX: '0.625rem',
          paddingY: '0.625rem',
          shadow: '0 0 #0000, 0 0 #0000, 0 1px 2px 0 {primary.500}`',
        },
      },
    },
  },
});

export const AppTheme: PrimeNGConfigType = {
  translation: {
    dateFormat: 'dd-mm-yy',
  },
  theme: {
    preset: preset,
    options: {
      cssLayer: {
        name: 'primeng',
        order: 'primeng, app-components',
      },
      darkModeSelector: false,
    },
  },
};
