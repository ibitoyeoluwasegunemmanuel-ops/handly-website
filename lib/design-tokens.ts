export const designTokens = {
  // Color System
  colors: {
    primary: '#158F72',
    primaryDark: '#0E6B55',
    primaryDarker: '#052622',
    primaryLight: '#E6F4EF',

    // Accent Colors for visual interest
    accent: '#FF6B35',      // Vibrant orange
    accentLight: '#FFE5D9',

    secondary: '#4F46E5',   // Indigo
    secondaryLight: '#E0E7FF',

    // Neutral palette
    text: {
      primary: '#0F172A',
      secondary: '#64748B',
      tertiary: '#94A3B8',
      inverse: '#FFFFFF',
    },

    background: {
      default: '#FFFFFF',
      alt: '#F8FAFC',
      elevated: '#F1F5F9',
    },

    border: '#E2E8F0',
    borderLight: '#F1F5F9',
  },

  // Typography System
  typography: {
    fontFamily: {
      sans: '"Geist", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      mono: '"Geist Mono", monospace',
    },

    sizes: {
      // Hero Heading
      h1: {
        fontSize: 'clamp(2.5rem, 7vw, 4rem)',
        fontWeight: 800,
        lineHeight: 1.1,
        letterSpacing: '-0.02em',
      },
      // Page Heading
      h2: {
        fontSize: 'clamp(2rem, 5vw, 2.5rem)',
        fontWeight: 700,
        lineHeight: 1.2,
        letterSpacing: '-0.01em',
      },
      // Section Heading
      h3: {
        fontSize: 'clamp(1.5rem, 3vw, 1.875rem)',
        fontWeight: 700,
        lineHeight: 1.3,
      },
      // Card Heading
      h4: {
        fontSize: '1.25rem',
        fontWeight: 700,
        lineHeight: 1.3,
      },
      // Body
      body: {
        fontSize: '1rem',
        fontWeight: 400,
        lineHeight: 1.6,
      },
      // Small
      small: {
        fontSize: '0.875rem',
        fontWeight: 400,
        lineHeight: 1.5,
      },
      // Tiny
      tiny: {
        fontSize: '0.75rem',
        fontWeight: 500,
        lineHeight: 1.4,
      },
    },
  },

  // Spacing System
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
    '3xl': '64px',
    '4xl': '100px',
  },

  // Border Radius
  radius: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '20px',
    '2xl': '24px',
    full: '9999px',
  },

  // Shadows - Premium depth
  shadows: {
    // Subtle elevation
    sm: '0 1px 2px 0 rgba(15, 23, 42, 0.05)',

    // Standard elevation
    md: '0 4px 6px -1px rgba(15, 23, 42, 0.1), 0 2px 4px -1px rgba(15, 23, 42, 0.06)',

    // Card elevation
    lg: '0 10px 15px -3px rgba(15, 23, 42, 0.1), 0 4px 6px -2px rgba(15, 23, 42, 0.05)',

    // Prominent elevation
    xl: '0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 10px 10px -5px rgba(15, 23, 42, 0.04)',

    // Premium hover/premium cards
    '2xl': '0 25px 50px -12px rgba(21, 143, 114, 0.15)',

    // Inset shadow for depth
    inset: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
  },

  // Gradients - Premium visual interest
  gradients: {
    primary: 'linear-gradient(135deg, #158F72 0%, #0E6B55 100%)',
    primaryAlt: 'linear-gradient(to right, #158F72 0%, #4F46E5 100%)',
    accent: 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)',

    // Glassmorphism effect
    glass: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',

    // Text gradients
    textPrimary: 'linear-gradient(135deg, #158F72 0%, #0E6B55 100%)',
    textAccent: 'linear-gradient(to right, #FF6B35 0%, #FF8C42 100%)',
  },

  // Transitions - Smooth interactions
  transitions: {
    fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
    base: '200ms cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
    slower: '500ms cubic-bezier(0.4, 0, 0.2, 1)',
  },

  // Breakpoints
  breakpoints: {
    xs: '0px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  // Container
  container: {
    maxWidth: '1280px',
    padding: '24px',
  },
};

export type DesignTokens = typeof designTokens;
