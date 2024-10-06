import { useComputedColorScheme, useMantineColorScheme } from '@mantine/core'

export const useDarkTheme = () => {
  const colorScheme = useComputedColorScheme('dark')
  const { setColorScheme } = useMantineColorScheme()

  const setDarkTheme = () => setColorScheme('dark')

  return {
    isDarkTheme: colorScheme === 'dark',
    setDarkTheme
  }
}
