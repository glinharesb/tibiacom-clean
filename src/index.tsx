import './index.scss'

import { MainMenu } from './components/MainMenu'

export const App = () => {
  return (
    <>
      <div className="main-header" />
      <div className="main-site-container">
        <MainMenu />
      </div>
    </>
  )
}
