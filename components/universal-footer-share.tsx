'use client'

import { usePathname } from 'next/navigation'
import { ShareButtons } from "@/components/share-buttons"

interface UniversalFooterShareProps {
  // Optional props to override defaults
  title?: string
  description?: string
  url?: string
}

export const UniversalFooterShare = ({ 
  title, 
  description, 
  url 
}: UniversalFooterShareProps) => {
  const pathname = usePathname()
  
  // Default content based on current page
  const getPageDefaults = () => {
    const baseUrl = "https://suraherahman.com"
    const currentUrl = url || `${baseUrl}${pathname}`
    
    // Page-specific default titles and descriptions
    const pageDefaults: Record<string, { title: string; description: string }> = {
      '/': {
        title: 'Surah Rahman - Listen, Read and Learn Online',
        description: 'Experience the beauty of Surah Rahman with audio recitations, translations, and spiritual benefits. Learn about the Most Merciful through this blessed chapter of the Quran.'
      },
      '/blog': {
        title: 'Islamic Articles and Insights - Surah Rahman Blog',
        description: 'Discover Islamic wisdom, Quranic insights, and spiritual guidance through our collection of articles about faith, worship, and Islamic teachings.'
      },
      '/surah-rahman-listen-online': {
        title: 'Listen to Surah Rahman Online - Beautiful Recitations',
        description: 'Listen to beautiful recitations of Surah Rahman by renowned Qaris. Experience the melodious verses of Ar-Rahman with clear audio and spiritual reflection.'
      },
      '/surah-rahman-read-online': {
        title: 'Read Surah Rahman Online - Arabic Text with Translation',
        description: 'Read Surah Rahman online in Arabic with English translation. Follow along with the blessed verses of the Most Merciful chapter of the Quran.'
      },
      '/surah-rahman-arabic': {
        title: 'Surah Rahman in Arabic - Original Quranic Text',
        description: 'Read the complete Arabic text of Surah Rahman as revealed in the Holy Quran. Experience the original verses in their pure Arabic form.'
      },
      '/surah-rahman-urdu': {
        title: 'Surah Rahman in Urdu - Translation and Meaning',
        description: 'Read Surah Rahman with Urdu translation and understand the meaning of this blessed chapter about Allah\'s mercy and creation.'
      },
      '/surah-rahman-english': {
        title: 'Surah Rahman in English - Translation and Commentary',
        description: 'Read Surah Rahman in English with detailed translation and commentary. Understand the profound meanings of this chapter about divine mercy.'
      },
      '/surah-rahman-benefits': {
        title: 'Benefits of Reciting Surah Rahman - Spiritual Rewards',
        description: 'Discover the spiritual benefits and rewards of reciting Surah Rahman. Learn about the blessings and virtues of this merciful chapter.'
      },
      '/qari-abdul-basit': {
        title: 'Qari Abdul Basit Recitation - Surah Rahman',
        description: 'Listen to the beautiful recitation of Surah Rahman by the legendary Qari Abdul Basit. Experience his melodious and soul-stirring voice.'
      },
      '/mishari-al-afasi': {
        title: 'Mishari Al-Afasi Recitation - Surah Rahman',
        description: 'Enjoy the captivating recitation of Surah Rahman by Sheikh Mishari Al-Afasi. Listen to his clear and beautiful Quranic recitation.'
      },
      '/surah-rahman-pdf': {
        title: 'Surah Rahman PDF - Download and Print',
        description: 'Download Surah Rahman PDF with Arabic text, translation, and transliteration. Perfect for offline reading and study.'
      },
      '/about-us': {
        title: 'About Surah Rahman - Our Mission and Vision',
        description: 'Learn about our mission to share the beauty and wisdom of Surah Rahman with Muslims worldwide through digital resources and education.'
      },
      '/contact-us': {
        title: 'Contact Us - Surah Rahman',
        description: 'Get in touch with us for questions, suggestions, or feedback about Surah Rahman resources and Islamic content.'
      },
      '/privacy-policy': {
        title: 'Privacy Policy - Surah Rahman',
        description: 'Read our privacy policy to understand how we protect your personal information and data while using our Islamic resources.'
      },
      '/terms-and-conditions': {
        title: 'Terms and Conditions - Surah Rahman',
        description: 'Review our terms and conditions for using the Surah Rahman website and accessing our Islamic educational content.'
      }
    }
    
    // Check for blog posts
    if (pathname.startsWith('/blog/')) {
      return {
        title: 'Islamic Article - Surah Rahman Blog',
        description: 'Read this Islamic article with spiritual insights and Quranic wisdom. Share this knowledge with others to spread beneficial Islamic teachings.'
      }
    }
    
    // Return page-specific defaults or fallback
    return pageDefaults[pathname] || {
      title: 'Surah Rahman - Islamic Resources and Spiritual Guidance',
      description: 'Discover the beauty of Surah Rahman and Islamic teachings. Share this resource to help others connect with their faith and spirituality.'
    }
  }
  
  const defaults = getPageDefaults()
  const currentUrl = url || `https://suraherahman.com${pathname}`
  
  return (
    
      
      
      <div className="flex justify-center">
        <ShareButtons 
          url={currentUrl}
          title={title || defaults.title}
          description={description || defaults.description}
        />
      </div>
    
  )
}