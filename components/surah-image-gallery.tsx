"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ZoomIn, Download } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface SurahImageGalleryProps {
  images: { src: string; alt: string; page: number }[];
  title?: string;
}

export function SurahImageGallery({
  images = [],
  title = "Surah Rahman Pages",
}: SurahImageGalleryProps) {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    if (images.length === 0) setCurrentPage(0);
    else if (currentPage > images.length - 1) setCurrentPage(images.length - 1);
  }, [images.length, currentPage]);

  if (images.length === 0) {
    return (
      <div className="space-y-6 text-center">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-muted-foreground">No pages available.</p>
        <div className="mx-auto max-w-sm">
          <Card>
            <CardContent className="p-6">
              <div className="aspect-[3/4] w-full rounded bg-muted" />
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const goToPage = (i: number) =>
    setCurrentPage(Math.min(Math.max(i, 0), images.length - 1));
  const nextPage = () => goToPage(currentPage + 1);
  const prevPage = () => goToPage(currentPage - 1);

  const currentImage = images[currentPage];
  const currentSrc = currentImage.src || "/placeholder.svg";
  const currentAlt = currentImage.alt || "Page";

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-muted-foreground">
          Page {currentImage.page} of {images.length}
        </p>
      </div>

      {/* Main Image Display */}
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="relative">
            <Dialog>
              {/* ✅ Use a real button for the trigger */}
              <DialogTrigger asChild>
                <button
                  type="button"
                  className="cursor-pointer group relative w-full"
                  aria-label="Open zoomed page image"
                >
                  <Image
                    src={currentSrc}
                    alt={currentAlt}
                    width={1200}
                    height={1800}
                    priority={currentPage === 0}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1024px"
                    className="w-full h-auto max-h-[800px] object-contain bg-white"
                  />
                  <span
                    className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                </button>
              </DialogTrigger>

              <DialogContent className="max-w-4xl max-h-[90vh] p-2">
                <div className="relative">
                  <Image
                    src={currentSrc}
                    alt={`${currentAlt} (zoom)`}
                    width={1600}
                    height={2400}
                    sizes="100vw"
                    className="w-full h-auto max-h-[80vh] object-contain bg-white rounded"
                  />
                  <Button variant="secondary" size="sm" className="absolute top-2 right-2" asChild>
                    <a href={currentSrc} download={`surah-rahman-page-${currentImage.page}.jpg`}>
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

        {/* ✅ Use a radiogroup for page selection */}
        <div
          role="radiogroup"
          aria-label="Page navigation"
          className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 w-full sm:w-auto"
        >
          <span className="text-sm text-muted-foreground">Go to page:</span>

          {/* Mobile: dropdown (native is fine) */}
          <div className="sm:hidden w-full">
            <label className="sr-only" htmlFor="page-select">Select page</label>
            <select
              id="page-select"
              className="w-full rounded-md border bg-background px-3 py-2 text-sm"
              value={currentPage + 1}
              onChange={(e) => goToPage(Number(e.target.value) - 1)}
            >
              {images.map((_, index) => (
                <option key={index} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </select>
          </div>

          {/* Desktop: radio-like buttons */}
          <div className="hidden sm:flex gap-1 overflow-x-auto max-w-[min(70vw,640px)] py-1">
            {images.map((_, index) => {
              const checked = index === currentPage;
              return (
                <button
                  key={index}
                  type="button"
                  role="radio"
                  aria-checked={checked}
                  onClick={() => goToPage(index)}
                  className={`w-8 h-8 rounded border text-sm ${
                    checked
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-input hover:bg-muted"
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>
        </div>

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
      <div className="flex gap-2 overflow-x-auto pb-2" aria-label="Thumbnails">
        {images.map((image, index) => {
          const selected = index === currentPage;
          return (
            <button
              key={index}
              type="button"
              onClick={() => goToPage(index)}
              className={`flex-shrink-0 border-2 rounded transition-colors ${
                selected ? "border-primary" : "border-transparent hover:border-muted-foreground"
              }`}
              aria-label={`Thumbnail page ${index + 1}${selected ? " (current)" : ""}`}
              aria-current={selected ? "true" : undefined}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt || `Thumbnail ${index + 1}`}
                width={80}
                height={100}
                sizes="80px"
                className="w-16 h-20 object-cover rounded"
              />
            </button>
          );
        })}
      </div>

      <div className="text-center">
        <Button variant="outline" className="flex items-center gap-2 mx-auto bg-transparent">
          <Download className="w-4 h-4" />
          Download All Pages
        </Button>
      </div>
    </div>
  );
}
