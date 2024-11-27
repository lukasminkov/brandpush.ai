'use client'

import { useState } from 'react'
import AdGenerationForm from '../components/AdGenerationForm'
import { Button } from '@/components/ui/button'

export default function GenerateAd() {
  const [generatedAd, setGeneratedAd] = useState<string | null>(null)

  const handleSubmit = async (data: any) => {
    // TODO: Implement API call to captions.ai here
    console.log('Submitting data:', data)
    // Simulating API call
    setTimeout(() => {
      setGeneratedAd('https://example.com/generated-ad-video.mp4')
    }, 2000)
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Generate UGC Ad</h1>
      {!generatedAd ? (
        <AdGenerationForm onSubmit={handleSubmit} />
      ) : (
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Your Generated Ad</h2>
          <video src={generatedAd} controls className="w-full" />
          <div className="flex space-x-4">
            <Button onClick={() => setGeneratedAd(null)}>Generate Another Ad</Button>
            <Button variant="outline" onClick={() => window.open(generatedAd, '_blank')}>Download Ad</Button>
          </div>
        </div>
      )}
    </div>
  )
}

