import { useState, useEffect } from 'react'
import { database } from '../services/firebase'
import { useAuth } from './useAuth'

type FirebaseQuestions = Record<string, {
  author: {
    name: string;
    avatar: string;
  }
  content: string;
  date: string;
  isHighLighted: boolean;
  isAnswered: boolean;
  likes: Record<string, {
    authorId: string;
  }>
}>

type QuestionType = {
  id: string;
  author: {
    name: string;
    avatar: string;
  }
  date: string;
  content: string;
  isHighLighted: boolean;
  isAnswered: boolean;
  likeCount: number;
  likeId: string | undefined;
}


export function useRoom() {
  const { user } =  useAuth()
  const [ questions, setQuestions ] = useState<QuestionType[]>([])
  // const [ title, setTitle ] = useState('')

  useEffect(() => {
    const roomRef = database.ref('rooms/questions')
    roomRef.on('value', room => {
      const databaseRoom = room.val()
      const firebaseQuestions: FirebaseQuestions = databaseRoom  ??  {}

      const parsedQuestion = Object.entries(firebaseQuestions).map(([key, value]) => {
        return {
          id: key,
          content: value.content,
          author: value.author,
          date: value.date,
          isHighLighted: value.isHighLighted,
          isAnswered: value.isAnswered,
          likeCount:Object.values(value.likes ?? {}).length,
          likeId: Object.entries(value.likes ?? {}).find(([key, like]) => like.authorId === user?.id)?.[0],
        }
      })
      // setTitle(databaseRoom.title)
      setQuestions(parsedQuestion)
    })
    return () => {
      roomRef.off('value')
    }
  }, [ user?.id])

  return { questions,  }//title
}