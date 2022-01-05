import { addDecorator } from '@storybook/react';
import { ThemeProvider } from '@mui/material';
import { ThemeProvider as Emotion10ThemeProvider } from 'emotion-theming';
import { theme } from '../src/mui/theme';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator((story) => {
  return (
    <Emotion10ThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>{story()}</ThemeProvider>
    </Emotion10ThemeProvider>
  )
})
