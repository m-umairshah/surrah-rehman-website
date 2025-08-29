"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ZoomIn, Download } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

interface SurahImageGalleryProps {
  images: {
    src: string
    alt: string
    page: number
  }[]
  title?: string
}

export function SurahImageGallery({ images, title = "Surah Rahman Pages" }: SurahImageGalleryProps) {
  const [currentPage, setCurrentPage] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % images.length)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToPage = (index: number) => {
    setCurrentPage(index)
  }

  const currentImage = images[currentPage]

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-muted-foreground">
          Page {currentImage?.page || currentPage + 1} of {images.length}
        </p>
      </div>

      {/* Main Image Display */}
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="relative">
            <Dialog>
              <DialogTrigger asChild>
                <div className="cursor-pointer group relative">
                  <img
                    src={currentImage?.src || "/placeholder.svg"}
                    alt={currentImage?.alt}
                    className="w-full h-auto max-h-[800px] object-contain bg-white"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] p-2">
                <div className="relative">
                  <img
                    src={currentImage?.src || "/placeholder.svg"}
                    alt={currentImage?.alt}
                    className="w-full h-auto max-h-[80vh] object-contain bg-white rounded"
                  />
                  <Button variant="secondary" size="sm" className="absolute top-2 right-2" asChild>
                    <a href={currentImage?.src} download={`surah-rahman-page-${currentImage?.page}.jpg`}>
                      <Download className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>

      {/* Navigation Controls */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
  {/* Prev */}
  <Button
    variant="outline"
    onClick={prevPage}
    disabled={currentPage === 0 || images.length <= 1}
    className="flex items-center gap-2 bg-transparent justify-center w-full sm:w-auto"
    aria-label="Previous page"
  >
    <ChevronLeft className="w-4 h-4" />
    Previous
  </Button>

  {/* Page controls */}
  <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 w-full sm:w-auto">
    <span className="text-sm text-muted-foreground">Go to page:</span>

    {/* Mobile: dropdown */}
    <div className="sm:hidden w-full">
      <select
        className="w-full rounded-md border bg-background px-3 py-2 text-sm"
        value={currentPage + 1}
        onChange={(e) => goToPage(Number(e.target.value) - 1)}
        aria-label="Select page"
      >
        {images.map((_, index) => (
          <option key={index} value={index + 1}>
            {index + 1}
          </option>
        ))}
      </select>
    </div>

    {/* Desktop: numbered buttons */}
    <div className="hidden sm:flex gap-1 overflow-x-auto max-w-[min(70vw,640px)] py-1">
      {images.map((_, index) => (
        <Button
          key={index}
          variant={index === currentPage ? "default" : "outline"}
          size="sm"
          onClick={() => goToPage(index)}
          className="w-8 h-8 p-0"
          aria-current={index === currentPage ? "page" : undefined}
          aria-label={`Go to page ${index + 1}`}
        >
          {index + 1}
        </Button>
      ))}
    </div>
  </div>

  {/* Next */}
  <Button
    variant="outline"
    onClick={nextPage}
    disabled={currentPage === images.length - 1 || images.length <= 1}
    className="flex items-center gap-2 bg-transparent justify-center w-full sm:w-auto"
    aria-label="Next page"
  >
    Next
    <ChevronRight className="w-4 h-4" />
  </Button>
</div>


      {/* Thumbnail Strip */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => goToPage(index)}
            className={`flex-shrink-0 border-2 rounded transition-colors ${
              index === currentPage ? "border-primary" : "border-transparent hover:border-muted-foreground"
            }`}
          >
            <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-16 h-20 object-cover rounded" />
          </button>
        ))}
      </div>

      {/* Download All Button */}
      <div className="text-center">
        <Button variant="outline" className="flex items-center gap-2 mx-auto bg-transparent">
          <Download className="w-4 h-4" />
          Download All Pages
        </Button>
      </div>
    </div>
  )
}
