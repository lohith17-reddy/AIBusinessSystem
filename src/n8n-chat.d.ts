declare module '@n8n/chat' {
  export function createChat(options: {
    target?: string
    webhookUrl: string
    mode?: 'window' | 'fullscreen'
    chatInputKey?: string
    chatSessionKey?: string
    showWelcomeScreen?: boolean
    showInput?: boolean
    loadPreviousSession?: boolean
    initialMessages?: string[]
    i18n?: {
      en?: {
        title?: string
        subtitle?: string
        footer?: string
        getStarted?: string
        inputPlaceholder?: string
      }
    }
  }): void
}