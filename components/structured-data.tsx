import Script from "next/script"

interface StructuredDataProps {
  type: "website" | "article" | "audioObject" | "person"
  data: any
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const generateSchema = () => {
    const baseSchema = {
      "@context": "https://schema.org",
    }

    switch (type) {
      case "website":
        return {
          ...baseSchema,
          "@type": "WebSite",
          name: data.name || "Surah Rahman",
          description: data.description || "Complete Surah Rahman with recitations and translations",
          url: data.url || "https://suraherahman.com",
          inLanguage: ["ar", "ur", "en"],
          about: {
            "@type": "Thing",
            name: "Surah Rahman",
            description: "Chapter 55 of the Holy Quran",
          },
          publisher: {
            "@type": "Organization",
            name: "Surah Rahman Website",
            url: "https://suraherahman.com",
          },
        }

      case "article":
        return {
          ...baseSchema,
          "@type": "Article",
          headline: data.title,
          description: data.description,
          url: data.url,
          datePublished: data.datePublished || "2025-01-28",
          dateModified: data.dateModified || "2025-01-28",
          author: {
            "@type": "Organization",
            name: "Surah Rahman Website",
          },
          publisher: {
            "@type": "Organization",
            name: "Surah Rahman Website",
            url: "https://suraherahman.com",
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": data.url,
          },
          about: {
            "@type": "Thing",
            name: "Surah Rahman",
            description: "Chapter 55 of the Holy Quran",
          },
        }

      case "audioObject":
        return {
          ...baseSchema,
          "@type": "AudioObject",
          name: data.name,
          description: data.description,
          url: data.url,
          duration: data.duration,
          encodingFormat: "audio/mpeg",
          inLanguage: "ar",
          about: {
            "@type": "Thing",
            name: "Surah Rahman",
            description: "Chapter 55 of the Holy Quran",
          },
          creator: {
            "@type": "Person",
            name: data.reciter,
          },
        }

      case "person":
        return {
          ...baseSchema,
          "@type": "Person",
          name: data.name,
          description: data.description,
          url: data.url,
          jobTitle: "Quranic Reciter",
          knowsAbout: ["Quran", "Islamic Recitation", "Tajweed"],
          nationality: data.nationality,
        }

      default:
        return baseSchema
    }
  }

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(generateSchema()),
      }}
    />
  )
}
