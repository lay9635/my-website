'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, {
    message: '請輸入您的姓名',
  }),
  phone: z.string().min(7, {
    message: '請輸入有效的電話號碼',
  }),
  email: z.string().email({
    message: '請輸入有效的電子郵件地址',
  }),
  subject: z.string().optional(),
  message: z.string().min(5, {
    message: '請輸入至少5個字的留言內容',
  }),
  captcha: z.string().min(1, {
    message: '請輸入驗證碼',
  }),
});

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      subject: '',
      message: '',
      captcha: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log(values);
      setSuccessMessage('您的訊息已成功發送！我們將盡快與您聯繫。');
      form.reset();
      setIsSubmitting(false);
    }, 1500);
  }

  return (
    <div className="w-full max-w-lg mx-auto">
      {successMessage ? (
        <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 text-center">
          <h4 className="text-lg font-medium mb-2">感謝您的留言</h4>
          <p>{successMessage}</p>
          <Button
            className="mt-4 bg-green-600 hover:bg-green-700"
            onClick={() => setSuccessMessage(null)}
          >
            返回表單
          </Button>
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">客戶名稱 *</FormLabel>
                    <FormControl>
                      <Input placeholder="您的姓名" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">聯絡電話 *</FormLabel>
                    <FormControl>
                      <Input placeholder="您的聯絡電話" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">信箱 *</FormLabel>
                  <FormControl>
                    <Input placeholder="您的電子郵件地址" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">主旨</FormLabel>
                  <FormControl>
                    <Input placeholder="訊息主旨" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">留言內容 *</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="請輸入您的留言或需求"
                      className="min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="captcha"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">驗證碼 *</FormLabel>
                  <div className="flex items-center gap-3">
                    <FormControl>
                      <Input placeholder="請輸入驗證碼" className="w-32" {...field} />
                    </FormControl>
                    <div className="bg-gray-200 px-3 py-2 rounded text-gray-600 font-mono">
                      KGYQ
                    </div>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 h-auto text-base"
              disabled={isSubmitting}
            >
              {isSubmitting ? '送出中...' : (
                <span className="flex items-center gap-2">
                  送出 <ArrowRight size={16} />
                </span>
              )}
            </Button>
          </form>
        </Form>
      )}
    </div>
  );
}
