import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms and Conditions - Surah Rahman Website | Usage Terms",
  description:
    "Read our terms and conditions to understand the rules and guidelines for using the Surah Rahman website and its content.",
  keywords: "terms and conditions, website usage terms, surah rahman website terms, user agreement",
}

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Terms and Conditions</h1>
              <p className="text-xl text-muted-foreground">Last updated: January 2025</p>
            </div>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Agreement to Terms</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Welcome to Surah Rahman Website ("we," "our," or "us"). These Terms and Conditions ("Terms") govern
                    your use of our website located at suraherahman.com and all related services, features, and content
                    provided by us.
                  </p>
                  <p className="mb-4">
                    By accessing or using our website, you agree to be bound by these Terms. If you disagree with any
                    part of these Terms, then you may not access or use our website.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    These Terms constitute a legally binding agreement between you and Surah Rahman Website.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Use of Our Website</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Permitted Use</h4>
                    <p className="text-sm text-muted-foreground mb-3">You may use our website for:</p>
                    <ul className="space-y-1 text-sm ml-4">
                      <li>• Personal, non-commercial use</li>
                      <li>• Educational and religious purposes</li>
                      <li>• Sharing content with others for Islamic education</li>
                      <li>• Downloading content for offline personal use</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Prohibited Use</h4>
                    <p className="text-sm text-muted-foreground mb-3">You may not:</p>
                    <ul className="space-y-1 text-sm ml-4">
                      <li>• Use our content for commercial purposes without permission</li>
                      <li>• Modify, distribute, or create derivative works from our content</li>
                      <li>• Use automated systems to access or download content</li>
                      <li>• Attempt to gain unauthorized access to our systems</li>
                      <li>• Use our website for any illegal or harmful activities</li>
                      <li>• Disrespect or misrepresent Islamic content</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Intellectual Property Rights</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    The content on our website, including but not limited to text, graphics, logos, audio recordings,
                    and software, is the property of Surah Rahman Website or its content suppliers and is protected by
                    copyright and other intellectual property laws.
                  </p>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-2">Quranic Content</h4>
                      <p className="text-sm text-muted-foreground">
                        The Arabic text of the Quran is the word of Allah and is not subject to copyright. However, our
                        translations, audio recordings, and presentation formats are protected by intellectual property
                        rights.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Audio Recordings</h4>
                      <p className="text-sm text-muted-foreground">
                        The audio recordings of Quranic recitations are used with proper permissions and are intended
                        for educational and religious purposes.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>User Conduct</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    As a user of our website, you agree to conduct yourself in a manner that is respectful of Islamic
                    values and our community guidelines:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Treat all Islamic content with respect and reverence</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Use appropriate language in all communications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Respect the rights and beliefs of other users</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Report any technical issues or inappropriate content</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Follow all applicable laws and regulations</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Disclaimer of Warranties</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Our website and all content are provided on an "as is" and "as available" basis. We make no
                    representations or warranties of any kind, express or implied, regarding:
                  </p>
                  <ul className="space-y-1 text-sm ml-4 mb-4">
                    <li>• The accuracy, completeness, or reliability of content</li>
                    <li>• The availability or functionality of the website</li>
                    <li>• The absence of errors, viruses, or other harmful components</li>
                    <li>• The security of data transmission</li>
                  </ul>
                  <p className="text-sm text-muted-foreground">
                    While we strive to provide accurate Islamic content, we recommend consulting with qualified Islamic
                    scholars for religious guidance and interpretation.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Limitation of Liability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    To the fullest extent permitted by law, Surah Rahman Website shall not be liable for any indirect,
                    incidental, special, consequential, or punitive damages, including but not limited to:
                  </p>
                  <ul className="space-y-1 text-sm ml-4 mb-4">
                    <li>• Loss of profits, data, or use</li>
                    <li>• Business interruption</li>
                    <li>• Personal injury or property damage</li>
                    <li>• Any other commercial damages or losses</li>
                  </ul>
                  <p className="text-sm text-muted-foreground">
                    Our total liability for any claims arising from your use of the website shall not exceed the amount
                    you paid to access our services (which is currently zero, as our services are free).
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Privacy and Data Protection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Your privacy is important to us. Our collection and use of personal information is governed by our
                    Privacy Policy, which is incorporated into these Terms by reference.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    By using our website, you consent to the collection and use of your information as described in our
                    Privacy Policy.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Modifications to Terms</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    We reserve the right to modify these Terms at any time. When we make changes, we will:
                  </p>
                  <ul className="space-y-1 text-sm ml-4 mb-4">
                    <li>• Update the "Last updated" date at the top of this page</li>
                    <li>• Post the revised Terms on our website</li>
                    <li>• Notify users of material changes through our website or email</li>
                  </ul>
                  <p className="text-sm text-muted-foreground">
                    Your continued use of the website after any modifications constitutes acceptance of the updated
                    Terms.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Termination</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    We may terminate or suspend your access to our website immediately, without prior notice or
                    liability, for any reason, including but not limited to:
                  </p>
                  <ul className="space-y-1 text-sm ml-4 mb-4">
                    <li>• Breach of these Terms</li>
                    <li>• Inappropriate use of our content</li>
                    <li>• Violation of applicable laws</li>
                    <li>• Disrespectful behavior towards Islamic content or community</li>
                  </ul>
                  <p className="text-sm text-muted-foreground">
                    Upon termination, your right to use the website will cease immediately.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Governing Law</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    These Terms shall be governed by and construed in accordance with applicable laws, without regard to
                    conflict of law principles.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Any disputes arising from these Terms or your use of the website shall be resolved through
                    appropriate legal channels, with preference for amicable resolution in accordance with Islamic
                    principles of justice and fairness.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">If you have any questions about these Terms and Conditions, please contact us:</p>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-sm">
                      <strong>Email:</strong> legal@suraherahman.com
                    </p>
                    <p className="text-sm">
                      <strong>Website:</strong> www.suraherahman.com/contact-us
                    </p>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">
                    We welcome your feedback and are committed to addressing any concerns you may have about our Terms
                    and Conditions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
