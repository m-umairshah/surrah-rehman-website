import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - Surah Rahman Website | Data Protection",
  description:
    "Read our privacy policy to understand how we collect, use, and protect your personal information on the Surah Rahman website.",
  keywords: "privacy policy, data protection, surah rahman website privacy, user data security",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
              <p className="text-xl text-muted-foreground">Last updated: January 2025</p>
            </div>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Introduction</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    At Surah Rahman Website ("we," "our," or "us"), we are committed to protecting your privacy and
                    ensuring the security of your personal information. This Privacy Policy explains how we collect,
                    use, disclose, and safeguard your information when you visit our website suraherahman.com.
                  </p>
                  <p>
                    By using our website, you consent to the data practices described in this policy. If you do not
                    agree with the practices described in this policy, please do not use our website.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Information We Collect</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Personal Information</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      We may collect personal information that you voluntarily provide to us when you:
                    </p>
                    <ul className="space-y-1 text-sm ml-4">
                      <li>• Contact us through our contact form</li>
                      <li>• Subscribe to our newsletter or updates</li>
                      <li>• Participate in surveys or feedback forms</li>
                      <li>• Report technical issues or provide suggestions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Automatically Collected Information</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      When you visit our website, we may automatically collect certain information, including:
                    </p>
                    <ul className="space-y-1 text-sm ml-4">
                      <li>• IP address and location data</li>
                      <li>• Browser type and version</li>
                      <li>• Device information</li>
                      <li>• Pages visited and time spent on our site</li>
                      <li>• Referring website addresses</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>How We Use Your Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-3">We use the information we collect for the following purposes:</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>To provide, operate, and maintain our website and services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>To improve, personalize, and expand our website content</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>To understand and analyze how you use our website</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>To communicate with you and respond to your inquiries</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>To send you updates, newsletters, and promotional materials (with your consent)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>To detect, prevent, and address technical issues</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Information Sharing and Disclosure</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    We do not sell, trade, or otherwise transfer your personal information to third parties without your
                    consent, except in the following circumstances:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        <strong>Service Providers:</strong> We may share information with trusted third-party service
                        providers who assist us in operating our website
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        <strong>Legal Requirements:</strong> We may disclose information if required by law or in
                        response to valid legal requests
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        <strong>Safety and Security:</strong> We may share information to protect the rights, property,
                        or safety of our users or others
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Data Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    We implement appropriate technical and organizational security measures to protect your personal
                    information against unauthorized access, alteration, disclosure, or destruction. These measures
                    include:
                  </p>
                  <ul className="space-y-1 text-sm ml-4">
                    <li>• Encryption of data in transit and at rest</li>
                    <li>• Regular security assessments and updates</li>
                    <li>• Access controls and authentication measures</li>
                    <li>• Secure hosting and data storage practices</li>
                  </ul>
                  <p className="mt-4 text-sm text-muted-foreground">
                    However, please note that no method of transmission over the internet or electronic storage is 100%
                    secure, and we cannot guarantee absolute security.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Cookies and Tracking Technologies</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    We use cookies and similar tracking technologies to enhance your browsing experience and analyze
                    website usage. Cookies are small data files stored on your device that help us:
                  </p>
                  <ul className="space-y-1 text-sm ml-4 mb-4">
                    <li>• Remember your preferences and settings</li>
                    <li>• Analyze website traffic and user behavior</li>
                    <li>• Improve website functionality and performance</li>
                    <li>• Provide personalized content and recommendations</li>
                  </ul>
                  <p className="text-sm text-muted-foreground">
                    You can control cookie settings through your browser preferences. However, disabling cookies may
                    affect some website functionality.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Your Rights and Choices</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-3">You have the following rights regarding your personal information:</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        <strong>Access:</strong> Request access to the personal information we hold about you
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        <strong>Correction:</strong> Request correction of inaccurate or incomplete information
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        <strong>Deletion:</strong> Request deletion of your personal information
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        <strong>Opt-out:</strong> Unsubscribe from marketing communications at any time
                      </span>
                    </li>
                  </ul>
                  <p className="mt-4 text-sm text-muted-foreground">
                    To exercise these rights, please contact us using the information provided in our Contact Us page.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Changes to This Privacy Policy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    We may update this Privacy Policy from time to time to reflect changes in our practices or for other
                    operational, legal, or regulatory reasons. We will notify you of any material changes by:
                  </p>
                  <ul className="space-y-1 text-sm ml-4 mb-4">
                    <li>• Posting the updated policy on our website</li>
                    <li>• Updating the "Last updated" date at the top of this policy</li>
                    <li>• Sending you an email notification (if you have provided your email address)</li>
                  </ul>
                  <p className="text-sm text-muted-foreground">
                    We encourage you to review this Privacy Policy periodically to stay informed about how we protect
                    your information.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    If you have any questions, concerns, or requests regarding this Privacy Policy or our data
                    practices, please contact us:
                  </p>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-sm">
                      <strong>Email:</strong> privacy@suraherahman.com
                    </p>
                    <p className="text-sm">
                      <strong>Website:</strong> www.suraherahman.com/contact-us
                    </p>
                  </div>
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
