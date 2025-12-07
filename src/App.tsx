import { useState, useEffect } from 'react'

function App() {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="container">
      <div className={`content ${isVisible ? 'fade-in' : ''}`}>
        <h1 className="text">
          这是我的数字空间
          <span className="cursor">_</span>
        </h1>
        <p className="subtitle">
          在这里，代码编织梦想，创意点亮屏幕
        </p>
      </div>
    </div>
  )
}

export default App