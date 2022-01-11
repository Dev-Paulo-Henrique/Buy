import './styles.scss' 
import { ReactNode } from 'react'
import cx from 'classnames'

type QuestionProps = {
  content:  string;
  author: {
    name: string;
    avatar: string;
  }
  children?: ReactNode;
  isAnswered?: boolean;
  isHighLighted?: boolean;
}
export function Question({
  content ,
  author,
  isAnswered = false,
  isHighLighted = false,
  children
}: QuestionProps) {
  return (
    <div 
      className={cx(
        'question', 
        { answered: isAnswered },
        { isHighLighted: isHighLighted && !isAnswered }
      )}
      >
      <p>
        {content}
      <span className="status">
        { isAnswered ? 'Entregue' : isHighLighted ? 'Visualizado' : 'Não visto'}
        </span>
        </p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div>
          { children }
        </div>
      </footer>
    </div>
  );
}