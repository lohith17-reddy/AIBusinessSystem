import { useEffect } from 'react'
import { createChat } from '@n8n/chat'
import '@n8n/chat/style.css'

const N8N_CHAT_URL =
  'https://kudos-cucumber-cottage.ngrok-free.dev/webhook/87d027c8-c3d6-44ab-823d-98170f61791d/chat'

export default function AISupport() {
  useEffect(() => {
    createChat({
      target: '#n8n-chat',
      webhookUrl: N8N_CHAT_URL,

      mode: 'fullscreen',

      chatInputKey: 'chatInput',
      chatSessionKey: 'sessionId',

      showWelcomeScreen: false,
      showInput: true,
      loadPreviousSession: false,

      initialMessages: [
        'Hi! 👋 Welcome to NovaTech Electronics. How can I help you today?',
      ],

      i18n: {
        en: {
          title: 'NovaTech AI Support',
          subtitle:
            'Ask us about products, delivery, returns, payments, and more.',
          footer: '',
          getStarted: 'New Conversation',
          inputPlaceholder: 'Ask NovaTech AI...',
        },
      },
    })
  }, [])

  return (
    <section id="ai-support" className="py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            AI Support
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            NovaTech AI Customer Support
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Get answers about our products, delivery, returns, payments, and
            other NovaTech services.
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div
            id="n8n-chat"
            className="relative h-[650px] w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}