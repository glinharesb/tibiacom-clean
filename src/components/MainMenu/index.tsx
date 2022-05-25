import './index.scss'

export const MainMenu = () => {
  return (
    <div className="main-menu">
      <div id="MenuColumn">
        <div id="LeftArtwork">
          <a href="/">
            <img
              id="TibiaLogoArtworkTop"
              src="https://static.tibia.com/images/global/header/tibia-logo-artwork-top.gif"
            />
          </a>
          <img
            id="LogoLink"
            src="https://static.tibia.com/images/global/header/tibia-logo-artwork-string.gif"
          />
        </div>
        <div className="SmallMenuBox">
          <div className="SmallBoxTop" />
          <div className="SmallBoxBorder" />
        </div>
      </div>
    </div>
  )
}
