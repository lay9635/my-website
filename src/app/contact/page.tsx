import { Layout } from "@/components/layout/Layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ContactSection } from "@/components/sections/home/ContactSection"

export default function ContactPage() {
  return (
    <Layout>
      <div className="pt-32 pb-10 bg-ht-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="section-title mb-4">
              <span className="text-ht-red">CONTACT US</span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="section-subtitle">
                我們竭誠為您服務，歡迎填寫以下表單與我們聯繫
              </p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8 mb-20">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    姓名 <span className="text-ht-red">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="請輸入您的姓名"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium">
                    聯絡電話 <span className="text-ht-red">*</span>
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="請輸入您的聯絡電話"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                  信箱
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="請輸入您的電子信箱"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium">
                  留言內容 <span className="text-ht-red">*</span>
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="請輸入您的留言內容"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="captcha" className="block text-sm font-medium">
                  驗證碼 <span className="text-ht-red">*</span>
                </label>
                <div className="flex items-center gap-4">
                  <Input
                    id="captcha"
                    name="captcha"
                    placeholder="請輸入右方驗證碼"
                    required
                    className="flex-1"
                  />
                  <div className="bg-gray-200 p-2 rounded-md w-24 text-center">
                    KGYQ
                  </div>
                </div>
              </div>

              <div className="pt-4 text-right">
                <Button type="submit" className="bg-ht-red hover:bg-ht-black text-white">
                  送出
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <ContactSection />
    </Layout>
  )
}
