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
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Facebook
      </a>
      <a
        href={`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(title)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
    </div>
  )
}

export default SocialShare;