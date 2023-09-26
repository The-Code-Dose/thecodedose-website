import React, {useState, useEffect} from 'react';
import { ShareIcon } from '@heroicons/react/24/outline';

function SocialShare({ title }) {
  const [encodedCurrentUrl, setEncodedCurrentUrl] = useState("")
  const platforms = [
    {
      name: "Twitter",
      baseUrl: "https://twitter.com/share?url",
      param: "text"
    },
    {
      name: "Facebook",
      baseUrl: "https://www.facebook.com/sharer/sharer.php?u",
      param: null
    },
    {
      name: "Linkedin",
      baseUrl: "https://www.linkedin.com/shareArticle?url",
      param: "title"
    },
  ]

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Access the window object only on the client side
      setEncodedCurrentUrl(encodeURIComponent(window.location.href))
    }
  }, [])

  const getHref = ({ baseUrl, param }) => {
    const encodedParamQuery = param ? `&${param}=${encodeURIComponent(title)}` : ""
    
    return `${baseUrl}=${encodedCurrentUrl}${encodedParamQuery}`
  }

  return (
    <div className='flex justify-center items-center w-full gap-3 py-3'>
      {platforms.map(platform => (
        <a
          href={getHref(platform)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className='flex justify-center items-center px-2 py-1 gap-2 text-xs bg-white border border-black rounded-full'>
            <ShareIcon className='h-5'/>
            {platform.name}
          </div>
        </a>
      ))}
    </div>
  )
}

export default SocialShare;