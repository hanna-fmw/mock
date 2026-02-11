'use client'

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6">
      <h1 className="text-6xl font-bold tracking-tight">Oops</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Något gick fel. Försök igen.
      </p>
      <button
        onClick={reset}
        className="mt-8 inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Försök igen
      </button>
    </div>
  )
}
