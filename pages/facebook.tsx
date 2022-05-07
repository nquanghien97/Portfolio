import * as React from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';

export interface FacebookChatProps {
}

export default function FacebookChat (props: FacebookChatProps) {
  return (
    <div>
        <MessengerCustomerChat
            pageId="101380578051500"
            appId="3228824117442850"
        />,
    </div>
  );
}
