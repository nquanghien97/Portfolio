import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState, useEffect} from 'react'
import MessengerCustomerChat from 'react-messenger-customer-chat';

function MyApp({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }
  if (typeof window === 'undefined') {
    return <></>;
  } else {

    return (
      <>
        <Component {...pageProps} />
        <div>
          <MessengerCustomerChat
                pageId="101380578051500"
                appId="3228824117442850"
            />,
        </div>
      </>
    )
  }
}

export default MyApp
