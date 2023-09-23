import React from 'react';
import { ShareIcon } from '@heroicons/react/24/outline';

function SocialShare({ title }) {
  const shareUrl = window.location.href

  return (
    <div className='flex justify-center items-center w-full gap-3 py-3'>
      <a
        href={`https://twitter.com/share?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className='flex justify-center items-center px-2 py-1 gap-2 text-xs bg-white border border-black rounded-full'>
          <ShareIcon className='h-5'/>
          Twitter
        </div>
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className='flex justify-center items-center px-2 py-1 gap-2 text-xs bg-white border border-black rounded-full'>
          <ShareIcon className='h-5'/>
          Facebook
        </div>
      </a>
      <a
        href={`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(title)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className='flex justify-center items-center px-2 py-1 gap-2 text-xs bg-white border border-black rounded-full'>
          <ShareIcon className='h-5'/>
          Linkedin
        </div>
      </a>
    </div>
  )
}

export default SocialShare;