'use client'

import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, MessageCircle, Share2 } from "lucide-react"

interface ShareButtonsProps {
  url: string
  title: string
  description?: string
}

export const ShareButtons = ({ url, title, description }: ShareButtonsProps) => {
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)
  const encodedDescription = encodeURIComponent(description || title)

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    instagram: `https://www.instagram.com/`, // Instagram doesn't support direct URL sharing
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
  }

  const handleShare = (platform: string) => {
    if (platform === 'instagram') {
      // For Instagram, we'll just open Instagram since they don't support direct URL sharing
      window.open(shareLinks.instagram, '_blank')
      return
    }
    
    const shareUrl = shareLinks[platform as keyof typeof shareLinks]
    window.open(shareUrl, '_blank', 'noopener,noreferrer,width=600,height=400')
  }

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: description,
          url,
        })
      } catch (error) {
        console.log('Error sharing:', error)
      }
    } else {
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(url)
        alert('Link copied to clipboard!')
      } catch (error) {
        console.log('Error copying to clipboard:', error)
      }
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-3 mb-6">
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Share this article:</span>
      
      <div className="flex items-center gap-2">
        {/* Facebook */}
        <Button
          variant="outline"
          size="sm"
          className="p-2 hover:bg-blue-50 hover:border-blue-200 dark:hover:bg-blue-950 transition-colors"
          onClick={() => handleShare('facebook')}
          title="Share on Facebook"
        >
          <Facebook className="h-4 w-4 text-blue-600" />
        </Button>

        {/* Twitter/X */}
        <Button
          variant="outline"
          size="sm"
          className="p-2 hover:bg-gray-50 hover:border-gray-300 dark:hover:bg-gray-800 transition-colors"
          onClick={() => handleShare('twitter')}
          title="Share on X (Twitter)"
        >
          <Twitter className="h-4 w-4 text-gray-800 dark:text-gray-200" />
        </Button>

        {/* WhatsApp */}
        <Button
          variant="outline"
          size="sm"
          className="p-2 hover:bg-green-50 hover:border-green-200 dark:hover:bg-green-950 transition-colors"
          onClick={() => handleShare('whatsapp')}
          title="Share on WhatsApp"
        >
          <MessageCircle className="h-4 w-4 text-green-600" />
        </Button>

        {/* Instagram */}
        <Button
          variant="outline"
          size="sm"
          className="p-2 hover:bg-pink-50 hover:border-pink-200 dark:hover:bg-pink-950 transition-colors"
          onClick={() => handleShare('instagram')}
          title="Open Instagram"
        >
          <Instagram className="h-4 w-4 text-pink-600" />
        </Button>

        {/* Native Share / Copy Link */}
        {/* <Button
          variant="outline"
          size="sm"
          className="p-2 hover:bg-gray-50 hover:border-gray-300 dark:hover:bg-gray-800 transition-colors"
          onClick={handleNativeShare}
          title="Share or Copy Link"
        >
          <Share2 className="h-4 w-4 text-gray-600 dark:text-gray-400" />
        </Button> */}
      </div>
    </div>
  )
}