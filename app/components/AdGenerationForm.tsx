'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export default function AdGenerationForm({ onSubmit }: { onSubmit: (data: any) => void }) {
  const [formData, setFormData] = useState({
    productName: '',
    brandName: '',
    targetAudience: '',
    adObjective: '',
    keyFeatures: '',
    tone: '',
    duration: '15',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="productName" className="block text-sm font-medium text-gray-700">Product Name</label>
        <Input
          type="text"
          id="productName"
          name="productName"
          value={formData.productName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="brandName" className="block text-sm font-medium text-gray-700">Brand Name</label>
        <Input
          type="text"
          id="brandName"
          name="brandName"
          value={formData.brandName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="targetAudience" className="block text-sm font-medium text-gray-700">Target Audience</label>
        <Input
          type="text"
          id="targetAudience"
          name="targetAudience"
          value={formData.targetAudience}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="adObjective" className="block text-sm font-medium text-gray-700">Ad Objective</label>
        <Input
          type="text"
          id="adObjective"
          name="adObjective"
          value={formData.adObjective}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="keyFeatures" className="block text-sm font-medium text-gray-700">Key Features</label>
        <Textarea
          id="keyFeatures"
          name="keyFeatures"
          value={formData.keyFeatures}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="tone" className="block text-sm font-medium text-gray-700">Tone</label>
        <Select name="tone" onValueChange={(value) => handleSelectChange('tone', value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select tone" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="friendly">Friendly</SelectItem>
            <SelectItem value="professional">Professional</SelectItem>
            <SelectItem value="humorous">Humorous</SelectItem>
            <SelectItem value="serious">Serious</SelectItem>
            <SelectItem value="inspirational">Inspirational</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <label htmlFor="duration" className="block text-sm font-medium text-gray-700">Duration (seconds)</label>
        <Select name="duration" onValueChange={(value) => handleSelectChange('duration', value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select duration" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="15">15 seconds</SelectItem>
            <SelectItem value="30">30 seconds</SelectItem>
            <SelectItem value="60">60 seconds</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button type="submit">Generate Ad</Button>
    </form>
  )
}

