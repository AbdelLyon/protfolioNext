import { faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { NextPage } from 'next'
import { MouseEvent, useCallback, useContext, useEffect, useState } from 'react'
import AnimationCircle from '../components/AnimationCircle'
import Description from '../components/Description'
import Header from '../components/Header'
import Icons from '../components/Icons'
import Layout from '../components/Layout'
import { initialState, StateContext } from '../context/State.context'
import { datas } from '../data/datas'
import { Props, State } from '../interfaces/interfaces'

const Home: NextPage<Props> = ({ initState }): JSX.Element => {

  const { state, setState } = useContext(StateContext);
  const [changeAnimation, setChangeAnimation] = useState(false);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [])

  useEffect(() => {
    state.category === 'front-end' ? setState({ ...initState }) : setState({ ...initialState(datas.back) })
  }, [state.category, initState, setState])

  useEffect(() => {
    if (!state.isVisible) setState((state: State) => ({ ...state, isVisible: true }));
  }, [state.isVisible, setState])

  const handleClick = useCallback((data: State) => {
    setChangeAnimation(false);
    setState((state: State) => ({ ...state, isVisible: false }));

    const timer = setTimeout(() =>
      setState((state: State) => ({
        ...state,
        title: data.title,
        color: data.color,
        icon: data.icon,
        content: data.content
      })
      ), 600);

    return () => clearTimeout(timer)
  }, [setState])

  const onChangeCategory = useCallback(((e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setChangeAnimation(true);
    const category = e.currentTarget.id;
    setState(((state: State) => ({ ...state, category, isVisible: false })));
  }), [setState])

  if (isLoading) {
    return <div className="container-spinner">
      <FontAwesomeIcon size='5x' className='loading-animation' style={{ color: state.color }} icon={faReact} />
    </div>

  }


  return (
    <Layout title='Accueil'>
      <Header changeAnimation={changeAnimation} onChangeCategory={(e: MouseEvent<HTMLAnchorElement>) => onChangeCategory(e)} >
        <div className="header-content flex flex-row-between">
          {state && state.category === 'front-end'
            ? <Icons datas={datas.front} onHandleClick={handleClick} />
            : <Icons datas={datas.back} onHandleClick={handleClick} />}
          <AnimationCircle changeAnimation={changeAnimation} />
          <Description />
        </div>
      </Header>
    </Layout >
  )
}

export const getStaticProps = async () => {
  return {
    props: { initState: initialState(datas.front) }
  }
}

export default Home;