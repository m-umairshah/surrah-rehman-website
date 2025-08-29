"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, ExternalLink, ZoomIn, ZoomOut } from "lucide-react"

interface PDFViewerProps {
  src: string
  title?: string
  downloadUrl?: string
}

export function PDFViewer({ src, title = "PDF Document", downloadUrl }: PDFViewerProps) {
  const [isFullscreen, setIsFullscreen] = useState(false)

  const pdfViewUrl = `${src}#view=FitH&toolbar=1&navpanes=1&scrollbar=1`

  const openInNewTab = () => {
    window.open(pdfViewUrl, "_blank")
  }

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 space-y-0 pb-4">
  <CardTitle className="text-base sm:text-lg text-center sm:text-left">{title}</CardTitle>
  
  <div className="flex flex-wrap justify-center sm:justify-end items-center gap-2 w-full sm:w-auto">
    <Button
      variant="outline"
      size="sm"
      onClick={toggleFullscreen}
      className="flex items-center gap-2 bg-transparent w-full sm:w-auto justify-center"
    >
      {isFullscreen ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
      {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
    </Button>

    <Button
      variant="outline"
      size="sm"
      onClick={openInNewTab}
      className="flex items-center gap-2 bg-transparent w-full sm:w-auto justify-center"
    >
      <ExternalLink className="w-4 h-4" />
      Open
    </Button>

    {downloadUrl && (
      <Button
        variant="outline"
        size="sm"
        asChild
        className="flex items-center gap-2 bg-transparent w-full sm:w-auto justify-center"
      >
        <a href={downloadUrl} download>
          <Download className="w-4 h-4" />
          Download
        </a>
      </Button>
    )}
  </div>
</CardHeader>

      <CardContent className="p-0">
        <div className={`relative ${isFullscreen ? "fixed inset-0 z-50 bg-background p-4" : ""}`}>
          {isFullscreen && (
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">{title}</h2>
              <Button variant="outline" size="sm" onClick={toggleFullscreen}>
                <ZoomOut className="w-4 h-4 mr-2" />
                Exit Fullscreen
              </Button>
            </div>
          )}
          <div className={`border rounded-lg overflow-hidden ${isFullscreen ? "h-[calc(100vh-8rem)]" : "h-[600px]"}`}>
            <object data={pdfViewUrl} type="application/pdf" className="w-full h-full" title={title}>
              <iframe src={pdfViewUrl} className="w-full h-full" title={title} loading="lazy" />
            </object>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
