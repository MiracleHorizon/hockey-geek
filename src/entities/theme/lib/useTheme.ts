import { useComputedColorScheme, useMantineColorScheme } from '@mantine/core'

export const useTheme = () => {
  const colorScheme = useComputedColorScheme('dark')

  const { setColorScheme, clearColorScheme, toggleColorScheme } = useMantineColorScheme()

  const setLightTheme = () => setColorScheme('light')
  const setDarkTheme = () => setColorScheme('dark')

  return {
    isDark: colorScheme === 'dark',
    setColorScheme,
    clearColorScheme,
    toggleColorScheme,
    setLightTheme,
    setDarkTheme
  }
}
