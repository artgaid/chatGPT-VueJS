export interface AnswerType {
  choices: ChoicesType[]
  created: number
  id: string
  model: string
  object: string
  usage: UsageAnswerType
}

export interface ChoicesType {
  finish_reason: string
  index: number
  message: {
    content: string
    role: string
  }
}

export interface UsageAnswerType {
  completion_tokens: number
  prompt_tokens: number
  total_tokens: number
}

export interface MessageType {
  sender: 'user' | 'bot' | 'error'
  text: string
}
