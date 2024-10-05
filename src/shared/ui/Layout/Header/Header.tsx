import { Flex, Title } from '@mantine/core'

import { useNavigate } from '@/shared/lib/router'
import { ThemeToggle } from '@/features/theme'
import styles from './Header.module.css'

export const Header = () => {
  const navigate = useNavigate()

  const navigateHome = () => navigate('/')

  return (
    <Flex
      component='header'
      align='center'
      justify='space-between'
      px='24px'
      h='60px'
      className={styles.root}
    >
      <Title component='h2' fz='20px' fw='600' className={styles.title} onClick={navigateHome}>
        Home
      </Title>

      <ThemeToggle />
    </Flex>
  )
}
