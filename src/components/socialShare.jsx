import React from 'react';

function SocialShare({ title }) {
  const shareUrl = window.location.href

  return (
    <div>
        <a
          href={`https://twitter.com/share?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
    </div>
  )
}

export default SocialShare;