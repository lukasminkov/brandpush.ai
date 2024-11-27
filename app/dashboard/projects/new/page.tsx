'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function NewProject() {
  const [scriptType, setScriptType] = useState('ai')

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Create New Ad</h2>
        <p className="text-muted-foreground">
          Fill in the details below to generate your UGC ad.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Product Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="productName">Product Name</Label>
            <Input id="productName" placeholder="Enter product name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="productUrl">Product URL</Label>
            <Input id="productUrl" placeholder="https://" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="productDescription">Product Description</Label>
            <Textarea
              id="productDescription"
              placeholder="Brief description of your product"
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Video Script</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Tabs defaultValue="ai" onValueChange={setScriptType}>
            <TabsList>
              <TabsTrigger value="ai">AI Generated</TabsTrigger>
              <TabsTrigger value="custom">Write Your Own</TabsTrigger>
            </TabsList>
            <TabsContent value="ai" className="space-y-4">
              <div className="space-y-2">
                <Label>Hook Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a hook type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="problem-solution">Problem-Solution</SelectItem>
                    <SelectItem value="curiosity">Curiosity</SelectItem>
                    <SelectItem value="statistic">Statistic</SelectItem>
                    <SelectItem value="story">Story</SelectItem>
                    <SelectItem value="ai-choice">Let AI Decide</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Tone</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select tone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="professional">Professional</SelectItem>
                    <SelectItem value="casual">Casual</SelectItem>
                    <SelectItem value="enthusiastic">Enthusiastic</SelectItem>
                    <SelectItem value="humorous">Humorous</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </TabsContent>
            <TabsContent value="custom">
              <div className="space-y-2">
                <Label htmlFor="customScript">Your Script</Label>
                <Textarea
                  id="customScript"
                  placeholder="Write your script here..."
                  className="min-h-[200px]"
                />
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>AI Creator</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Select Creator</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Choose an AI creator" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="creator1">Sarah</SelectItem>
                <SelectItem value="creator2">Michael</SelectItem>
                <SelectItem value="creator3">Emma</SelectItem>
                <SelectItem value="creator4">David</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Media</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="flex items-center justify-center h-32 rounded-lg border-2 border-dashed">
              <Button variant="ghost">Upload Media</Button>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              Upload product images or videos to be featured in your ad
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button size="lg">
          Generate Ad
        </Button>
      </div>
    </div>
  )
}

