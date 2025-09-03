import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface PaginationProps {
  currentPage: number
  totalPages: number
  baseUrl: string
}

export function Pagination({ currentPage, totalPages, baseUrl }: PaginationProps) {
  if (totalPages <= 1) return null

  const getPageNumbers = () => {
    const pages = []
    const showPages = 5 // Show 5 page numbers at most

    let startPage = Math.max(1, currentPage - Math.floor(showPages / 2))
    const endPage = Math.min(totalPages, startPage + showPages - 1)

    // Adjust start page if we're near the end
    if (endPage - startPage + 1 < showPages) {
      startPage = Math.max(1, endPage - showPages + 1)
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i)
    }

    return pages
  }

  const pageNumbers = getPageNumbers()

  return (
    <nav className="flex items-center justify-center space-x-2" aria-label="Pagination">
      {/* Previous Button */}
      {currentPage > 1 ? (
        <Button asChild variant="outline" size="sm">
          <Link href={`${baseUrl}?page=${currentPage - 1}`} className="flex items-center gap-1">
            <ChevronLeft className="w-4 h-4" />
            Previous
          </Link>
        </Button>
      ) : (
        <Button variant="outline" size="sm" disabled className="flex items-center gap-1 bg-transparent">
          <ChevronLeft className="w-4 h-4" />
          Previous
        </Button>
      )}

      {/* Page Numbers */}
      <div className="flex items-center space-x-1">
        {/* First page if not in range */}
        {pageNumbers[0] > 1 && (
          <>
            <Button asChild variant="outline" size="sm">
              <Link href={`${baseUrl}?page=1`}>1</Link>
            </Button>
            {pageNumbers[0] > 2 && <span className="px-2 text-muted-foreground">...</span>}
          </>
        )}

        {/* Page number buttons */}
        {pageNumbers.map((page) => (
          <Button
            key={page}
            asChild={page !== currentPage}
            variant={page === currentPage ? "default" : "outline"}
            size="sm"
            className={cn(page === currentPage && "bg-primary text-primary-foreground")}
          >
            {page === currentPage ? <span>{page}</span> : <Link href={`${baseUrl}?page=${page}`}>{page}</Link>}
          </Button>
        ))}

        {/* Last page if not in range */}
        {pageNumbers[pageNumbers.length - 1] < totalPages && (
          <>
            {pageNumbers[pageNumbers.length - 1] < totalPages - 1 && (
              <span className="px-2 text-muted-foreground">...</span>
            )}
            <Button asChild variant="outline" size="sm">
              <Link href={`${baseUrl}?page=${totalPages}`}>{totalPages}</Link>
            </Button>
          </>
        )}
      </div>

      {/* Next Button */}
      {currentPage < totalPages ? (
        <Button asChild variant="outline" size="sm">
          <Link href={`${baseUrl}?page=${currentPage + 1}`} className="flex items-center gap-1">
            Next
            <ChevronRight className="w-4 h-4" />
          </Link>
        </Button>
      ) : (
        <Button variant="outline" size="sm" disabled className="flex items-center gap-1 bg-transparent">
          Next
          <ChevronRight className="w-4 h-4" />
        </Button>
      )}
    </nav>
  )
}
