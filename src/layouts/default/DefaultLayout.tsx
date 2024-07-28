import { useNavigate } from 'react-router-dom'
import { Flex, Title } from '@mantine/core'
import type { PropsWithChildren } from 'react'

import { Events } from '@/components/Events'
import { ThemeToggle } from '@/components/ThemeToggle'
import { PATH_ROOT } from '@/site/paths'
import styles from './DefaultLayout.module.css'

const Header = () => {
  const navigate = useNavigate()

  const navigateHome = () => navigate(PATH_ROOT)

  return (
    <Flex
      component='header'
      align='center'
      justify='space-between'
      px='24px'
      h='60px'
      className={styles.header}
    >
      <Title
        component='h2'
        fz='20px'
        fw='600'
        className={styles.headerTitle}
        onClick={navigateHome}
      >
        Home
      </Title>

      <ThemeToggle />
    </Flex>
  )
}

export const DefaultLayout = ({ children }: PropsWithChildren) => (
  <Flex direction='column' w='100dwv'>
    <Header />

    <Flex component='main' px='24px' py='16px' direction='column' rowGap='4px' w='100%'>
      <Events />

      {children}
    </Flex>
  </Flex>
)
