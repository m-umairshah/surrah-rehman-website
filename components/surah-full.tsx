"use client";

type Verse = { number: number; arabic: string };

function toArabicDigits(n: number) {
  const map = ["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"];
  return String(n).split("").map(d => map[Number(d)]).join("");
}

function AyahEnd({ n }: { n: number }) {
  return (
    <span className="mx-1 text-primary text-[16px]">
      ﴿{toArabicDigits(n)}﴾
    </span>
  );
}

export function SurahFull({ verses }: { verses: Verse[] }) {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-arabic">سورة الرحمن</h2>

          {/* Arabic Quran-style block */}
          <div dir="rtl" lang="ar" className="rounded-xl bg-background p-6 shadow-sm text-2xl md:text-3xl leading-loose">
            {/* Bismillah */}
            <p className="mb-8 font-bold font-arabic">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </p>

            {/* Continuous paragraph */}
            <p className="whitespace-pre-wrap break-words font-arabic">
              {verses.map(v => (
                <span key={v.number}>
                  {v.arabic}
                  <AyahEnd n={v.number} />{" "}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
