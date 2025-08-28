import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us - Surah Rahman Website | Get in Touch",
  description:
    "Contact us for questions, feedback, or suggestions about our Surah Rahman content. We welcome your input to improve our Islamic educational resources.",
  keywords: "contact surah rahman website, islamic website contact, quran website feedback, get in touch",
}

export default function ContactUsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
              <p className="text-xl text-muted-foreground text-balance">
                We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="Your first name" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Your last name" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="your.email@example.com" />
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="What is your message about?" />
                    </div>
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Please share your thoughts, questions, or feedback..."
                        rows={6}
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Get in Touch</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-primary text-xl">📧</span>
                      <div>
                        <h4 className="font-semibold">Email</h4>
                        <p className="text-sm text-muted-foreground">info@suraherahman.com</p>
                        <p className="text-sm text-muted-foreground">support@suraherahman.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary text-xl">🌐</span>
                      <div>
                        <h4 className="font-semibold">Website</h4>
                        <p className="text-sm text-muted-foreground">www.suraherahman.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary text-xl">⏰</span>
                      <div>
                        <h4 className="font-semibold">Response Time</h4>
                        <p className="text-sm text-muted-foreground">We typically respond within 24-48 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>What can we help you with?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Questions about Surah Rahman content</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Technical issues with audio or video</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Suggestions for new features or content</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Feedback on translations or recitations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Partnership or collaboration inquiries</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>General questions about Islamic content</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Community Guidelines</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">When contacting us, please keep in mind:</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Be respectful and courteous in your communication</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Provide clear and specific details about your inquiry</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>We welcome constructive feedback and suggestions</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* FAQ Section */}
            <Card className="mt-12">
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Can I download the audio files?</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Yes, we provide download options for all our audio recitations for offline listening.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Are the translations authentic?</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      All our translations are reviewed by qualified Islamic scholars to ensure accuracy.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Is this website free to use?</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Yes, all content on our website is completely free as a service to the Muslim community.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Can I share your content?</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      We encourage sharing our content to spread the beauty of Surah Rahman with others.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
