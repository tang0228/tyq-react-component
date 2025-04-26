import './App.css'
import TButton from './components/Button/Button'
import TLink from './components/Link/Link'
import TKeyframes from './components/Keyframes/keyframes'
import TInput from './components/Input/Input'

import { GlobalStyles } from './components/Theme/global'
import { lightTheme, darkTheme } from './components/Theme/theme'

import { ThemeProvider } from 'styled-components'

import { useState } from 'react'

// 定义一个名为App的函数组件
function App() {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    console.log(123);

    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  // 返回一个React片段，包含两个部分：一个文本节点和一个Button组件
  return (
    <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
      // 文本节点，显示"Button"
        Button
        <TButton $primary onClick={toggleTheme}>切换主题</TButton>
        Link
        <TLink href="https://www.google.com" target="_blank">Google</TLink>
        Keyframes
        <TKeyframes>
          {theme}
        </TKeyframes>
        input
        <TInput placeholder="请输入内容" defaultValue="@probablyup" />
        <TInput $inputColor="rebeccapurple" defaultValue="@probablyup" />
      </>

    </ThemeProvider >
  )
}

export default App
