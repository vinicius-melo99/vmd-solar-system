import './styles.css';

type TitleProps = {
  headline: string
}

const index = ({ headline }: TitleProps) => {
  return (
    <h2>{ headline }</h2>
  )
}

export default index;