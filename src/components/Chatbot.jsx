import React, { useEffect } from 'react';

function ChatBot() {
  useEffect(() => {
    window._be = window._be || {};
    window._be.id = "65e7758d5f58f40007e17252";
    (function() {
      var be = document.createElement('script');
      be.type = 'text/javascript';
      be.async = true;
      be.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdn.chatbot.com/widget/plugin.js';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(be, s);
    })();
  }, []);

  return (
    <div id="root"></div>
  );
}

export default ChatBot;
