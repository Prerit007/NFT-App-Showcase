import { Download, Features, Wrapper } from "./components";
import assets from "./assets";
import styles from "./styles/Global";

const App = () => {
  return (
    <>
      <Wrapper
        title="Your Own Store of Nifty NFTs. Start Selling & Growing"
        description="Buy, Sell, Collect NFTs & Earn Crypto"
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />

      <Wrapper
        title="Smart User interface MarketPlace"
        description="Experience a nice UI of ProNef NFT MarketPlace. "
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />

      <Wrapper
        title="Deployment"
        description="ProNef is built using Expo which natively runs on all Users' Devices.
        You can easily get your app on People's Hands"
        mockupImg={assets.feature}
        reverse
      />

      <Wrapper
        title="Showcase the Store"
        description="The App has 2 different screens, One is the Home, 
        which displays all the NFTs & the other one has Complete Information about the NFT plus the Bids & Bidders"
        mockupImg={assets.mockup}
        banner="banner02"
      />

      <Download />

      <div className="px-4 py-2 justify-center items-center bg-primary flex-xol text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Made with Love by <span className="bold">Hurricane ✌</span>
        </p>
      </div>
    </>
  );
};

export default App;
