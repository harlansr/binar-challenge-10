import { Button } from "react-bootstrap";
import { useSelector } from "react-redux"
// import style from './button.module.css'

const LoadingButton = ({title, onClick}) => {
  const loadingData = useSelector((state) => {
    return state.loadingReducer
  })

  if(loadingData.loadingStatus){
    return(
        <Button variant="danger" disabled >Loading</Button>
    )
  }else{
    return(
        <Button variant="success" onClick={onClick}>{title}</Button>
      )
    }
  }

export default LoadingButton