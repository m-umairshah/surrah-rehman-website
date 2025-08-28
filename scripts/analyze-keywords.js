// Script to fetch and analyze keyword data from provided CSV files
import fs from "fs"

const csvUrls = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Free%20Related%20Keywords%20Generator%20-%20No%20Sign-Up%20Needed-9rYzmeE5iOdw9QUPYADHoCndzswvOp.csv",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/google.com-surah%20rahman-RIKEj371HRLtRqE337oQUBdzuRtWRK.csv",
]

async function fetchAndAnalyzeKeywords() {
  console.log("[v0] Starting keyword analysis...")

  for (let i = 0; i < csvUrls.length; i++) {
    const url = csvUrls[i]
    const fileName = i === 0 ? "related-keywords.csv" : "surah-rahman-keywords.csv"

    try {
      console.log(`[v0] Fetching ${fileName}...`)
      const response = await fetch(url)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const csvText = await response.text()
      console.log(`[v0] Successfully fetched ${fileName}`)
      console.log(`[v0] File size: ${csvText.length} characters`)

      // Parse CSV data
      const lines = csvText.split("\n")
      const headers = lines[0].split(",").map((h) => h.trim().replace(/"/g, ""))
      console.log(`[v0] Headers for ${fileName}:`, headers)

      // Analyze first few rows
      const sampleData = []
      for (let j = 1; j <= Math.min(10, lines.length - 1); j++) {
        if (lines[j].trim()) {
          const row = lines[j].split(",").map((cell) => cell.trim().replace(/"/g, ""))
          const rowObj = {}
          headers.forEach((header, index) => {
            rowObj[header] = row[index] || ""
          })
          sampleData.push(rowObj)
        }
      }

      console.log(`[v0] Sample data from ${fileName}:`)
      console.log(JSON.stringify(sampleData.slice(0, 5), null, 2))

      // Extract high-volume keywords
      const highVolumeKeywords = []
      for (let j = 1; j < lines.length; j++) {
        if (lines[j].trim()) {
          const row = lines[j].split(",").map((cell) => cell.trim().replace(/"/g, ""))
          const keyword = row[0]
          const volume = row[1]

          if (keyword && volume) {
            // Convert volume to number (remove commas)
            const volumeNum = Number.parseInt(volume.replace(/,/g, "")) || 0
            if (volumeNum > 1000) {
              // Only high-volume keywords
              highVolumeKeywords.push({
                keyword: keyword.toLowerCase(),
                volume: volumeNum,
                originalVolume: volume,
              })
            }
          }
        }
      }

      // Sort by volume
      highVolumeKeywords.sort((a, b) => b.volume - a.volume)

      console.log(`[v0] High-volume keywords from ${fileName} (>1000 searches):`)
      highVolumeKeywords.slice(0, 20).forEach((kw) => {
        console.log(`  - "${kw.keyword}" (${kw.originalVolume} searches)`)
      })

      // Save analysis results
      const analysisResult = {
        fileName,
        totalRows: lines.length - 1,
        headers,
        sampleData: sampleData.slice(0, 5),
        highVolumeKeywords: highVolumeKeywords.slice(0, 50),
      }

      // Write to file for reference
      fs.writeFileSync(`public/${fileName.replace(".csv", "-analysis.json")}`, JSON.stringify(analysisResult, null, 2))
      console.log(`[v0] Analysis saved to public/${fileName.replace(".csv", "-analysis.json")}`)
    } catch (error) {
      console.error(`[v0] Error fetching ${fileName}:`, error.message)
    }
  }

  console.log("[v0] Keyword analysis complete!")
}

// Run the analysis
fetchAndAnalyzeKeywords()
