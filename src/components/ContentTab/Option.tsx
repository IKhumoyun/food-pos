import { Link, useRouteMatch } from 'react-router-dom';

interface IProps {
  title: String,
  active?: Boolean,
  link: String
}

const Option = ({ title, active, link }: IProps) => {
  let { url } = useRouteMatch();

  return (
    <Link to={`${url}${link}`} className={`tab-option ${active ? 'active' : ''}`}>{title}</Link>
  )
}

export default Option;