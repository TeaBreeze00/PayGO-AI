"use client"

import type React from "react"

import { useState } from "react"
import { Bot, Brain, CreditCard, ImageIcon, MessageSquare, Plus, Send, Sparkles } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function ChatbotPage() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([
    { role: "assistant", content: "Hello! How can I help you today?" },
  ])
  const [inputValue, setInputValue] = useState("")
  const [selectedModel, setSelectedModel] = useState("gpt-4o")
  const [showBuyCredits, setShowBuyCredits] = useState(false)
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("")

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputValue.trim()) {
      setMessages([...messages, { role: "user", content: inputValue }])
      // Simulate AI response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: `This is a simulated response from ${selectedModel}. In a real implementation, this would be generated by the selected AI model.`,
          },
        ])
      }, 1000)
      setInputValue("")
    }
  }

  const aiModels = [
    { id: "gpt-4o", name: "GPT-4o", icon: <Sparkles className="h-4 w-4" />, credits: 10 },
    { id: "deepseek", name: "DeepSeek", icon: <Brain className="h-4 w-4" />, credits: 5 },
    { id: "gemini", name: "Gemini", icon: <Bot className="h-4 w-4" />, credits: 8 },
    { id: "dalle", name: "DALL-E", icon: <ImageIcon className="h-4 w-4" />, credits: 15 },
    { id: "o1", name: "OpenAI o1", icon: <Sparkles className="h-4 w-4" />, credits: 20 },
  ]

  const paymentMethods = [
    { id: "creditcard", name: "Credit Card" },
    { id: "googlepay", name: "Google Pay" },
    { id: "paytm", name: "Paytm" },
    { id: "phonepe", name: "PhonePe" },
    { id: "cred", name: "CRED" },
  ]

  const creditPackages = [
    { id: "basic", name: "Basic", credits: 100, price: "$10" },
    { id: "standard", name: "Standard", credits: 500, price: "$45" },
    { id: "premium", name: "Premium", credits: 1000, price: "$80" },
  ]

  return (
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        {/* Sidebar */}
        <div className="hidden md:flex w-80 flex-col border-r bg-white dark:bg-gray-800 dark:border-gray-700">
          <div className="p-4 border-b dark:border-gray-700">
            <h2 className="text-xl font-bold">AI Chat</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">Select a model and start chatting</p>
          </div>

          <div className="p-4 border-b dark:border-gray-700">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium">Your Credits</h3>
              <Badge variant="outline" className="bg-primary/10 text-primary">
                250 Credits
              </Badge>
            </div>
            <Progress value={25} className="h-2 mb-2" />
            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
              <span>0</span>
              <span>1000</span>
            </div>
            <Button onClick={() => setShowBuyCredits(true)} variant="outline" className="w-full mt-2">
              Buy More Credits
            </Button>
          </div>

          <div className="p-4 flex-1 overflow-auto">
            <h3 className="font-medium mb-3">Select AI Model</h3>
            <div className="space-y-2">
              {aiModels.map((model) => (
                  <Button
                      key={model.id}
                      variant={selectedModel === model.id ? "default" : "outline"}
                      className="w-full justify-start"
                      onClick={() => setSelectedModel(model.id)}
                  >
                    <div className="flex items-center w-full">
                      <span className="mr-2">{model.icon}</span>
                      <span className="flex-1">{model.name}</span>
                      <Badge variant="outline" className="ml-auto">
                        {model.credits} credits/msg
                      </Badge>
                    </div>
                  </Button>
              ))}
            </div>
          </div>

          <div className="p-4 border-t dark:border-gray-700">
            <div className="flex items-center">
              <Avatar className="h-8 w-8 mr-2">
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-sm font-medium">User Name</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">user@example.com</p>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Sparkles className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col">
          <header className="flex items-center justify-between p-4 border-b bg-white dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center">
              <Button variant="outline" size="icon" className="md:hidden mr-2">
                <MessageSquare className="h-4 w-4" />
              </Button>
              <div>
                <h2 className="font-medium">
                  Chatting with <span className="font-bold">{aiModels.find((m) => m.id === selectedModel)?.name}</span>
                </h2>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {aiModels.find((m) => m.id === selectedModel)?.credits} credits per message
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Plus className="h-4 w-4 mr-1" /> New Chat
              </Button>
            </div>
          </header>

          <div className="flex-1 overflow-auto p-4 bg-gray-50 dark:bg-gray-900">
            {messages.map((message, index) => (
                <div key={index} className={`flex mb-4 ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  {message.role === "assistant" && (
                      <Avatar className="h-8 w-8 mr-2">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" />
                        <AvatarFallback>AI</AvatarFallback>
                      </Avatar>
                  )}
                  <div
                      className={`p-3 rounded-lg max-w-[80%] ${
                          message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                      }`}
                  >
                    {message.content}
                  </div>
                  {message.role === "user" && (
                      <Avatar className="h-8 w-8 ml-2">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" />
                        <AvatarFallback>U</AvatarFallback>
                      </Avatar>
                  )}
                </div>
            ))}
          </div>

          <footer className="p-4 border-t bg-white dark:bg-gray-800 dark:border-gray-700">
            <form onSubmit={handleSendMessage} className="flex gap-2">
              <Textarea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="min-h-[50px] flex-1 resize-none"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault()
                      handleSendMessage(e)
                    }
                  }}
              />
              <Button type="submit" size="icon" disabled={!inputValue.trim()}>
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </footer>
        </div>

        {/* Buy Credits Dialog */}
        <Dialog open={showBuyCredits} onOpenChange={setShowBuyCredits}>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Buy Credits</DialogTitle>
              <DialogDescription>Purchase credits to use with our AI models.</DialogDescription>
            </DialogHeader>

            <Tabs defaultValue="packages">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="packages">Credit Packages</TabsTrigger>
                <TabsTrigger value="custom">Custom Amount</TabsTrigger>
              </TabsList>

              <TabsContent value="packages" className="space-y-4 mt-4">
                <div className="grid grid-cols-3 gap-4">
                  {creditPackages.map((pkg) => (
                      <Card key={pkg.id} className="cursor-pointer hover:border-primary">
                        <CardHeader className="p-4 pb-2">
                          <h3 className="font-bold">{pkg.name}</h3>
                          <p className="text-2xl font-bold">{pkg.price}</p>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <p className="text-sm text-gray-500">{pkg.credits} credits</p>
                        </CardContent>
                      </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="custom" className="space-y-4 mt-4">
                <div className="grid gap-4">
                  <div>
                    <label className="text-sm font-medium">Credit Amount</label>
                    <Input type="number" placeholder="Enter amount" min="10" />
                    <p className="text-xs text-gray-500 mt-1">Minimum 10 credits ($1)</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <Separator className="my-4" />

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Payment Method</label>
                <Select onValueChange={setSelectedPaymentMethod}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select payment method" />
                  </SelectTrigger>
                  <SelectContent>
                    {paymentMethods.map((method) => (
                        <SelectItem key={method.id} value={method.id}>
                          {method.name}
                        </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {selectedPaymentMethod === "creditcard" && (
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Card Number</label>
                      <Input placeholder="1234 5678 9012 3456" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium">Expiry Date</label>
                        <Input placeholder="MM/YY" />
                      </div>
                      <div>
                        <label className="text-sm font-medium">CVV</label>
                        <Input placeholder="123" />
                      </div>
                    </div>
                  </div>
              )}

              {(selectedPaymentMethod === "googlepay" ||
                  selectedPaymentMethod === "paytm" ||
                  selectedPaymentMethod === "phonepe" ||
                  selectedPaymentMethod === "cred") && (
                  <div className="p-4 border rounded-md text-center">
                    <p>
                      You'll be redirected to {paymentMethods.find((m) => m.id === selectedPaymentMethod)?.name} to complete
                      your payment.
                    </p>
                  </div>
              )}
            </div>

            <DialogFooter>
              <Button variant="outline" onClick={() => setShowBuyCredits(false)}>
                Cancel
              </Button>
              <Button disabled={!selectedPaymentMethod}>
                <CreditCard className="h-4 w-4 mr-2" /> Pay Now
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
  )
}

